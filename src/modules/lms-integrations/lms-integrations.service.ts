import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Client, createClientAsync } from 'soap-invd';
import { LmsAddCourseDto } from './dtos/lms-add-course.dto';
import { LmsCreateUserDto } from './dtos/lms-create-user.dto';
import { LmsGetActivityBriefUserDto } from './dtos/lms-get-activity-brief-user.dto';
import { LmsGetAllDetailsDto } from './dtos/lms-get-all-details.dto';
import { LmsLoginWithCourseDto } from './dtos/lms-login-with-course.dto';
import { LmsRemoveCourseDto } from './dtos/lms-remove-course.dto';
import { LmsUpdateUserPhotoDto } from './dtos/lms-update-user-photo.dto';
import {
  AddActivityUserWithSpecificDateInput,
  AddActivityUserWithSpecificDateOutput,
  DeleteActivityInput,
  GetActivityOutput,
  GetKeyInput,
  GetKeyOutput,
  GetUserActivityBriefResultInput,
  GetUserActivityBriefResultOutput,
  GetUserActivityDetailsInput,
  GetUserActivityDetailsOutput,
  RemoveActivityUsersInput,
  RemoveActivityUsersOutput,
  SynchronizeAllUserInfoInput,
  SynchronizeAllUserInfoOutput,
  UpdateUserPhotoInput,
  UpdateUserPhotoOutput,
  User,
} from './generated-types/types';
import { GraylogService } from 'nestjs-graylog';
// import { Participant } from '../participant/entities/participant.entity';

@Injectable()
export class LmsIntegrationsService {
  private readonly authenticationHeader;
  private client_static;
  constructor(
    private readonly httpService: HttpService,
    private readonly graylog: GraylogService,
  ) {
    // enocta lms servisleri icin gerekli olan auth headerdir
    this.authenticationHeader =
      '<Authenticate xmlns="http://tempuri.org/"><UserName>' +
      process.env.ENOCTA_USERNAME +
      '</UserName><Password>' +
      process.env.ENOCTA_PASSWORD +
      '</Password></Authenticate>';
  }

  async splitNameSurname(fullName: string): Promise<[string, string]> {
    // First, clean up the name from any extra spaces.
    fullName = fullName.replace(/\s+/g, ' ').trim();

    const nameParts = fullName.trim().split(' ');

    if (nameParts.length === 1) {
      return [nameParts[0], 'Null']; // If there's only one word, it's considered as the name, and the surname will be empty.
    } else if (nameParts.length === 2) {
      return [nameParts[0], nameParts[1]]; // If there are two words, the first word is the name, the second is the surname.
    } else {
      // If there are 3 or more words, the first two words are the name, and the rest is the surname.
      const name = nameParts.slice(0, 2).join(' ');
      const surname = nameParts.slice(2).join(' ');
      return [name, surname];
    }
  }

  async createAsyncClient(): Promise<Client> {
    try {
      const client = await createClientAsync(process.env.ENOCTA_API_URL);
      client.addSoapHeader(this.authenticationHeader);
      return client;
    } catch (err) {
      await this.graylog.error('Failed to connect to LMS Enocta', {
        message: err.message,
      });
      throw new BadRequestException('lms.error.lms_connection_error');
    }
  }

  private async getClient(): Promise<Client> {
    if (!this.client_static) {
      this.client_static = await this.createAsyncClient();
    }
    return this.client_static;
  }

  // ActivityUnitsAndSessionsResult
  async GetActivityUnitsAndSessions(
    next?: number,
    prev?: number,
    inMonth = 4,
  ): Promise<any> {
    const nextInt = next ? next : 0;
    const prevInt = prev ? prev : 0;

    const now = new Date();
    if (prevInt > 0) {
      now.setMonth(now.getMonth() - prevInt);
      now.setHours(0, 0, 0, 0);
    }

    if (nextInt > 0) {
      now.setMonth(now.getMonth() + nextInt);
      now.setHours(0, 0, 0, 0);
    }

    const half = Math.floor(inMonth / 2);
    const startDate = new Date(now);
    startDate.setMonth(startDate.getMonth() - half);

    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + prevInt);
    //->format('Y-m-d\TH:i:s');
    const args = {
      minUpdateDate: startDate.toISOString(),
      maxUpdateDate: endDate.toISOString(),
    };
    const client = await this.getClient();
    return await new Promise((resolve, reject) => {
      client.GetActivityUnitsAndSessionsOfUnit(args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async SynchronizeAllUserInfo(
    input: LmsCreateUserDto,
  ): Promise<SynchronizeAllUserInfoOutput> {
    if (input.is_active == null) {
      input.is_active = 1;
    }

    let langCode = 0;
    if (input.lang_code != 'tr') {
      langCode = 1;
    }
    const user: User = {
      USER_CODE: input.user_code,
      LANGUAGE: langCode, //tr 0, en 1
      STATUS: input.is_active,
      USER_TYPE: 1,
      EMAIL: input.email,
      USER_FEATURES: { string: ['user', 'ORAV'] },
    };

    if (input.first_name) {
      user.USER_NAME = input.first_name;
    }
    if (input.last_name) {
      user.USER_SURNAME = input.last_name;
    }

    const args: SynchronizeAllUserInfoInput = {
      UserInfoList: {
        UserInfo: [user],
      },
      editManuelUsers: false,
    };
    const client = await this.getClient();
    const result: SynchronizeAllUserInfoOutput = await new Promise(
      (resolve, reject) => {
        client.SynchronizeAllUserInfo(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      },
    );

    if (
      result?.SynchronizeAllUserInfoResult?.UserResult[0].resultType != 'S1' &&
      result?.SynchronizeAllUserInfoResult?.UserResult[0].resultType != 'S3'
    ) {
      await this.graylog.warning('User Synchronize Failed', {
        resultType:
          result.SynchronizeAllUserInfoResult?.UserResult[0].resultType,
        userCode: result?.SynchronizeAllUserInfoResult?.UserResult[0].userCode,
        resultDesc:
          result?.SynchronizeAllUserInfoResult?.UserResult[0].resultDesc,
      });
    } else {
      await this.graylog.info('User Synchronize Success', {
        resultType:
          result?.SynchronizeAllUserInfoResult?.UserResult[0].resultType,
        userCode: result?.SynchronizeAllUserInfoResult?.UserResult[0].userCode,
        resultDesc:
          result?.SynchronizeAllUserInfoResult?.UserResult[0].resultDesc,
      });
    }

    return result;
  }

  async AddActivityUserWithSpecificDate(
    input: LmsAddCourseDto,
  ): Promise<AddActivityUserWithSpecificDateOutput> {
    const args: AddActivityUserWithSpecificDateInput = {
      activityCode: input.course_lms_id,
      userCode: input.trt_sso_id,
      startDate: input.start_date.toISOString(),
      endDate: input.end_date.toISOString(),
      enforceCapacityControl: false,
      selfRegistration: true,
    };
    try {
      const client = await this.getClient();
      const result: AddActivityUserWithSpecificDateOutput = await new Promise(
        (resolve, reject) => {
          client.AddActivityUserWithSpecificDate(args, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        },
      );

      if (
        result?.AddActivityUserWithSpecificDateResult?.resultType != 'S1' &&
        result?.AddActivityUserWithSpecificDateResult?.resultType != 'S3'
      ) {
        await this.graylog.warning('AddActivityUserWithSpecificDate Failed', {
          resultType: result.AddActivityUserWithSpecificDateResult.resultType,
          resultDesc: result?.AddActivityUserWithSpecificDateResult.resultDesc,
        });
        return null;
      }
      return result;
    } catch (e) {
      await this.graylog.error('AddActivityUserWithSpecificDate Error', {
        message: e.message,
      });
      return null;
    }
  }

  async RemoveActivityUsers(
    input: LmsRemoveCourseDto,
  ): Promise<RemoveActivityUsersOutput> {
    const args: RemoveActivityUsersInput = {
      activityCode: input.course_lms_id,
      userList: { string: [input.trt_sso_id] },
    };
    const client = await this.getClient();
    const result: RemoveActivityUsersOutput = await new Promise(
      (resolve, reject) => {
        client.RemoveActivityUsers(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      },
    );

    if (
      result?.RemoveActivityUsersResult?.resultType != 'S1' &&
      result?.RemoveActivityUsersResult?.resultType != 'S3'
    ) {
      console.error('---START RemoveActivityUsers Error---');
      console.error(
        args,
        'Kod: ',
        result.RemoveActivityUsersResult.resultType,
        'Desc: ',
        result.RemoveActivityUsersResult.resultDesc,
      );
      console.error('---END RemoveActivityUsers Error---');
    }

    return result;
  }

  async GetUserActivityDetailsNOTNEED(
    input: LmsGetAllDetailsDto,
  ): Promise<GetUserActivityDetailsOutput> {
    const args: GetUserActivityDetailsInput = {
      userCodes: { string: [input.trt_sso_id] },
      emptyIntegrationCodes: false,
      compulsory: '-1',
      userStatus: '1',
      activityCompletionStatus: { int: [0, 1, 2, 3, 4] },
    };

    const client = await this.getClient();
    const result: GetUserActivityDetailsOutput = await new Promise(
      (resolve, reject) => {
        client.GetUserActivityDetails(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      },
    );

    return result;
  }

  /** todo:  kullanilmiyor */
  async GetLoginUrlWithCourse(input: LmsLoginWithCourseDto): Promise<string> {
    const args: GetKeyInput = {
      userCode: input.trt_sso_id,
      pageID: '30116',
    };

    const client = await this.getClient();
    const result: GetKeyOutput = await new Promise((resolve, reject) => {
      client.GetKey(args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (!result) {
      console.error('---START GetLoginUrlWithCourse Error---');
      console.error(args, 'User Code Bulunamadı ');
      console.error('---END GetLoginUrlWithCourse Error---');
      return null;
    }

    const url =
      process.env.ENOCTA_LOGIN_URL +
      '/' +
      result.GetKeyResult +
      '&EncEntCode=' +
      input.course_lms_id;

    return url;
  }

  // async AddActivityUsers(participants: Participant[], event: EventEntity) {
  //   const client = await this.getClient();
  //
  //   const enoctaUserCode = [];
  //   for (const participant of participants) {
  //     //enoctaUserCode.push(participant.email);
  //     const getOrCreateUser = await this.SynchronizeAllUserInfo({
  //       email: participant.email,
  //       is_active: 1,
  //       lang_code: 'tr',
  //       user_code: participant.id,
  //       first_name: participant.firstName,
  //       last_name: participant.lastName,
  //     });
  //     if (
  //       getOrCreateUser?.SynchronizeAllUserInfoResult?.UserResult[0]
  //         .resultType != 'S1' &&
  //       getOrCreateUser?.SynchronizeAllUserInfoResult?.UserResult[0]
  //         .resultType != 'S3'
  //     ) {
  //       await this.graylog.warning('SynchronizeAllUserInfo Failed', {
  //         context: {
  //           email: participant.email,
  //           resultType:
  //             getOrCreateUser?.SynchronizeAllUserInfoResult?.UserResult[0]
  //               .resultType,
  //           resultDesc:
  //             getOrCreateUser?.SynchronizeAllUserInfoResult?.UserResult[0]
  //               .resultDesc,
  //         },
  //       });
  //       continue;
  //     }
  //     enoctaUserCode.push(
  //       getOrCreateUser.SynchronizeAllUserInfoResult.UserResult[0].userCode,
  //     );
  //     console.log(getOrCreateUser);
  //   }
  //
  //   const args: AddActivityUsersInput = {
  //     activityCode: event.eventType + event.integrationCode,
  //     userList: {
  //       string: enoctaUserCode,
  //     },
  //   };
  //
  //   console.log(args);
  //
  //   const result: AddActivityUsersOutput = await new Promise(
  //     (resolve, reject) => {
  //       client.AddActivityUsers(args, (err, result) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(result);
  //         }
  //       });
  //     },
  //   );
  //
  //   if (
  //     result?.AddActivityUsersResult?.resultType != 'S1' &&
  //     result?.AddActivityUsersResult?.resultType != 'S3'
  //   ) {
  //     await this.graylog.warning('AddActivityUsers Failed', {
  //       context: args,
  //       resultType: result.AddActivityUsersResult.resultType,
  //       resultDesc: result?.AddActivityUsersResult.resultDesc,
  //     });
  //     // 422 status code exception
  //     throw new BadRequestException(result?.AddActivityUsersResult.resultDesc);
  //   }
  //
  //   await this.graylog.info('AddActivityUsers Success', {
  //     context: args,
  //     resultType: result.AddActivityUsersResult.resultType,
  //     resultDesc: result?.AddActivityUsersResult.resultDesc,
  //   });
  //
  //   return result;
  // }

  async GetLoginUrl(userCode: string): Promise<string> {
    const args: GetKeyInput = {
      userCode,
    };

    const client = await this.getClient();
    const result: GetKeyOutput = await new Promise((resolve, reject) => {
      client.GetKey(args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (!result) {
      console.error('---START GetLoginUrlWithCourse Error---');
      console.error(args, 'User Code Bulunamadı ');
      console.error('---END GetLoginUrlWithCourse Error---');
      return null;
    }

    return process.env.ENOCTA_LOGIN_URL + '/' + result.GetKeyResult;
  }

  async UpdateUserPhoto(
    input: LmsUpdateUserPhotoDto,
  ): Promise<UpdateUserPhotoOutput> {
    const imageBuffer = await this.downloadImage(input.photo_url);
    const byteArray = new Uint8Array(imageBuffer);
    const args: UpdateUserPhotoInput = {
      userCode: input.trt_sso_id,
      file: byteArray.toString(),
    };
    const client = await this.getClient();
    const result: UpdateUserPhotoOutput = await new Promise(
      (resolve, reject) => {
        client.UpdateUserPhoto(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      },
    );

    if (
      result?.UpdateUserPhotoResult?.resultType != 'S1' &&
      result?.UpdateUserPhotoResult?.resultType != 'S3'
    ) {
      console.error('---START UpdateUserPhoto Error---');
      console.error(
        args,
        'Kod: ',
        result.UpdateUserPhotoResult.resultType,
        'Desc: ',
        result.UpdateUserPhotoResult.resultDesc,
      );
      console.error('---END UpdateUserPhoto Error---');
    }

    return result;
  }

  async GetUserActivityBriefResult(
    input: LmsGetActivityBriefUserDto,
  ): Promise<GetUserActivityBriefResultOutput> {
    const args: GetUserActivityBriefResultInput = {
      userCodes: { string: [input.trt_sso_id] },
      completionStatus: '-1',
      activityIntegrationCodes: { string: input.lms_course_id_list },
      compulsory: '-1',
      userStatus: '1',
    };

    const client = await this.getClient();
    const result: GetUserActivityBriefResultOutput = await new Promise(
      (resolve, reject) => {
        client.GetUserActivityBriefResult(args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      },
    );

    if (
      result?.GetUserActivityBriefResultResult?.ResultType != 'S1' &&
      result?.GetUserActivityBriefResultResult?.ResultType != 'S3'
    ) {
      console.error('---START GetUserActivityBriefResult Error---');
      console.error(
        args,
        'Kod: ',
        result.GetUserActivityBriefResultResult.ResultType,
        'Desc: ',
        result.GetUserActivityBriefResultResult.ResultDescription,
      );
      console.error('---END GetUserActivityBriefResult Error---');
    }

    return result;
  }

  async GetLmsCourseData(activity_code: string): Promise<GetActivityOutput> {
    const args: DeleteActivityInput = {
      activityCode: activity_code,
    };

    const client = await this.getClient();
    const result: GetActivityOutput = await new Promise((resolve, reject) => {
      client.GetActivity(args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (
      result?.GetActivityResult?.activityResult.resultType != 'S1' &&
      result?.GetActivityResult?.activityResult.resultType != 'S3'
    ) {
      console.error('---START GetLmsCourseData Error---');
      console.error(
        args,
        'Kod: ',
        result.GetActivityResult.activityResult.resultType,
        'Desc: ',
        result.GetActivityResult.activityResult.resultType,
      );
      console.error('---END GetLmsCourseData Error---');
    }

    return result;
  }

  async IsActivityExistAndActive(activity_code: string): Promise<boolean> {
    const result = await this.GetLmsCourseData(activity_code);
    return (
      result?.GetActivityResult?.activityResult.resultType == 'S1' &&
      result?.GetActivityResult?.STATUS == '1'
    );
  }

  async downloadImage(imageUrl: string): Promise<Buffer> {
    const response = await this.httpService.axiosRef.get(imageUrl, {
      responseType: 'arraybuffer',
    });
    return Buffer.from(response.data, 'binary');
  }
}
