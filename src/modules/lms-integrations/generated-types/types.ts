export interface LmsIntegrations {
  LMS_IntegrationServices?: LMSIntegrationServices;
}

export interface LMSIntegrationServices {
  LMS_IntegrationServicesSoap?: LmsIntegrationServicesSoap;
  LMS_IntegrationServicesSoap12?: LmsIntegrationServicesSoap;
}

export interface LmsIntegrationServicesSoap {
  GetUserQuestionsOfExamUnits?: GetUserQuestionsOfExamUnits;
  GetCertificatesByUserCode?: GetCertificatesByUserCode;
  UpdateUserInformationSurveyBasicInfo?: UpdateUserInformationSurveyBasicInfo;
  GetUnansweredSurveysByUserCode?: GetUnansweredSurveysByUserCode;
  GetSurveyDetailInfo?: GetSurveyDetailInfo;
  GetSurveyDetailInfoForMultipleSurveys?: GetSurveyDetailInfoForMultipleSurveys;
  GetUserBadges?: GetUserBadges;
  GetUserBasedActivityCostsResult?: GetUserBasedActivityCostsResult;
  GetUserMobileApplicationVersions?: GetUserMobileApplicationVersions;
  CheckUserMobileApplicationVersion?: CheckUserMobileApplicationVersion;
  AddUpdateExternalPortal?: AddUpdateExternalPortal;
  GetGamificationScores?: GetGamificationScores;
  GetGamificationBadges?: GetGamificationBadges;
  GetLMSLogs?: GetLMSLogs;
  VerifyCertificate?: VerifyCertificate;
  ResetUserExam?: ResetUserExam;
  GetCourseAttendances?: GetCourseAttendances;
  GetCourseEvaluationSurveysResults?: GetCourseEvaluationSurveysResults;
  GetAdvisorEvaluationSurveysResults?: GetAdvisorEvaluationSurveysResults;
  UpdateUserActivitySessionAttendance?: UpdateUserActivitySessionAttendance;
  GetAllUsersActivityCourseDetailInfo?: GetAllUsersActivityCourseDetailInfo;
  GetUserActivityBriefResult?: GetUserActivityBriefResult;
  GetAllUserCompletedActivityInfoByCompleteDate?: GetAllUserCompletedActivityInfoByCompleteDate;
  AddSurveyUsers?: AddSurveyUsers;
  RemoveSurveyUsers?: RemoveSurveyUsers;
  CopySurvey?: CopySurvey;
  GetSurveyStatistics?: GetSurveyStatistics;
  UpdateQSCompanyLicence?: UpdateQSCompanyLicence;
  AddLiteQSCompany?: AddLiteQSCompany;
  AddQSCompany?: AddQSCompany;
  RemoveQSCompany?: RemoveQSCompany;
  AddQSManager?: AddQSManager;
  STMEtkinlikMaliyetEkle?: STMEtkinlikMaliyetEkle;
  STMEtkinlikMaliyetSil?: STMEtkinlikMaliyetSil;
  GetPortalContentList?: GetPortalContentList;
  GetUserKurumsalTubeContent?: GetUserKurumsalTubeContent;
  GetUserKurumsalTubeContentDetails?: GetUserKurumsalTubeContentDetails;
  UserScoreKurumsalTubeContent?: UserScoreKurumsalTubeContent;
  UserWatchKurumsalTubeContent?: UserWatchKurumsalTubeContent;
  AddCommentToKurumsalTubeContent?: AddCommentToKurumsalTubeContent;
  UpdateKurumsalTubeContentComment?: UpdateKurumsalTubeContentComment;
  DeleteKurumsalTubeContentComment?: DeleteKurumsalTubeContentComment;
  LikeKurumsalTubeContentComment?: LikeKurumsalTubeContentComment;
  DislikeKurumsalTubeContentComment?: DislikeKurumsalTubeContentComment;
  AddKurumsalTubeContentType?: AddKurumsalTubeContentType;
  UpdateKurumsalTubeContentType?: UpdateKurumsalTubeContentType;
  DeleteKurumsalTubeContentType?: DeleteKurumsalTubeContentType;
  AddKurumsalTubeContentCategory?: AddKurumsalTubeContentCategory;
  UpdateKurumsalTubeContentCategory?: UpdateKurumsalTubeContentCategory;
  DeleteKurumsalTubeContentCategory?: DeleteKurumsalTubeContentCategory;
  AddKurumsalTubeContent?: AddKurumsalTubeContent;
  UpdateKurumsalTubeContent?: UpdateKurumsalTubeContent;
  DeleteKurumsalTubeContent?: DeleteKurumsalTubeContent;
  CourseLikeAction?: CourseLikeAction;
  AddCourseComment?: AddCourseComment;
  GetCourseStats?: GetCourseStats;
  GetCourseComments?: GetCourseComments;
  UpdateCourseComment?: UpdateCourseComment;
  DeleteCourseComment?: DeleteCourseComment;
  GetUserCompletedCourseList?: GetUserCompletedCourseList;
  GetUserAssignedCourseList?: GetUserAssignedCourseList;
  AddFirm?: AddFirm;
  UpdateFirm?: UpdateFirm;
  DeleteFirm?: DeleteFirm;
  AddFacility?: AddFacility;
  UpdateFacility?: UpdateFacility;
  DeleteFacility?: DeleteFacility;
  AddHall?: AddHall;
  UpdateHall?: UpdateHall;
  DeleteHall?: DeleteHall;
  GetUsersCancellationRequests?: GetUsersCancellationRequests;
  GetAdvisorsCancellationRequests?: GetAdvisorsCancellationRequests;
  GetActivityCancellationRequests?: GetActivityCancellationRequests;
  GetMobileTokens?: GetMobileTokens;
  AddMobileToken?: AddMobileToken;
  DeleteMobileToken?: DeleteMobileToken;
  SendNotificationManual?: SendNotificationManual;
  GetSentMails?: GetSentMails;
  SendMail?: SendMail;
  GetKey?: GetKey;
  GetKeyWithCourseCode?: GetKeyWithCourseCode;
  GetMobileSSOToken?: GetMobileSSOToken;
  GetUserActivityInfoAndTestStatisticsWithDates?: GetUserActivityInfoAndTestStatisticsWithDates;
  GetUserActivityInfoAndTestStatisticsWithCompletionDates?: GetUserActivityInfoAndTestStatisticsWithCompletionDates;
  GetActivityInvoicesBetweenDates?: GetActivityInvoicesBetweenDates;
  GetUserExamUnitsWithIntegrationCodes?: GetUserExamUnitsWithIntegrationCodes;
  GetUserExamUnits?: GetUserExamUnits;
  GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodes?: GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodes;
  GetActivityDetailList?: GetActivityDetailList;
  GetActivityDetailList_v2?: GetActivityDetailListV2;
  GetActivitiesOfPrograms?: GetActivitiesOfPrograms;
  GetActivityList?: GetActivityList;
  UpdateActivityCode?: UpdateActivityCode;
  CreateActivityBudget?: CreateActivityBudget;
  GetSessionActivityList?: GetSessionActivityList;
  GetUpdatedActivityUnits?: GetUpdatedActivityUnits;
  GetUpdatedProgramsAndUnits?: GetUpdatedProgramsAndUnits;
  GetActivityUsers?: GetActivityUsers;
  AddSessionToActivity?: AddSessionToActivity;
  DeleteSessionFromActivity?: DeleteSessionFromActivity;
  UpdateSessionInActivity?: UpdateSessionInActivity;
  SynchronizeActivityCategories?: SynchronizeActivityCategories;
  GetActivityExamStatistic?: GetActivityExamStatistic;
  GetUserExamResult?: GetUserExamResult;
  GetActivityUnitsAndSessionsOfUnit?: GetActivityUnitsAndSessionsOfUnit;
  AddActivityUser?: AddActivityUser;
  AddActivityUserWithSpecificDate?: AddActivityUserWithSpecificDate;
  AddActivityUsers?: AddActivityUsers;
  RemoveActivityUser?: RemoveActivityUser;
  RemoveActivityUsers?: RemoveActivityUsers;
  AddRemoveActivityUser?: AddRemoveActivityUser;
  GetUserActivities?: GetUserActivities;
  GetUserActivityDetails?: GetUserActivityDetails;
  GetAllUserActivitiesBetweenDates?: GetAllUserActivitiesBetweenDates;
  GetAllInstructorsBetweenDates?: GetAllInstructorsBetweenDates;
  GetUserActivityInfo?: GetUserActivityInfo;
  GetUserActivityInfoAndTestStatistics?: GetUserActivityInfoAndTestStatistics;
  GetUserUnits?: GetUserUnits;
  GetUserActivityInfoByUpdateDate?: GetUserActivityInfoByUpdateDate;
  GetAllUserActivityInfoByUpdateDate?: GetAllUserActivityInfoByUpdateDate;
  GetAllUserActivityInfoByUpdateDateWithOneCondition?: GetAllUserActivityInfoByUpdateDateWithOneCondition;
  GetAllUserActivityInfoByUpdateDateWithTwoCondition?: GetAllUserActivityInfoByUpdateDateWithTwoCondition;
  GetAllUserActivityUnitInfoByUpdateDate?: GetAllUserActivityUnitInfoByUpdateDate;
  GetAllUserActivityUnitInfoByUpdateDateWithOption?: GetAllUserActivityUnitInfoByUpdateDateWithOption;
  GetAllUserActivityUnitInfoByUpdateDateForAll?: GetAllUserActivityUnitInfoByUpdateDateForAll;
  GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDates?: GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDates;
  GetCompletedActivityUserUnitsByUpdateDate?: GetCompletedActivityUserUnitsByUpdateDate;
  GetCompletedActivityUsersByCompleteDate?: GetCompletedActivityUsersByCompleteDate;
  GetUserDailyExperienceDuration?: GetUserDailyExperienceDuration;
  SynchronizeActivityUser?: SynchronizeActivityUser;
  SynchronizeActivityUsers?: SynchronizeActivityUsers;
  GetCompletedActivityUsers?: GetCompletedActivityUsers;
  FinishActivityUserSession?: FinishActivityUserSession;
  GetUsersCertOfPart?: GetUsersCERTOfPart;
  GetUsersCertOfPartWithActivity?: GetUsersCERTOfPartWithActivity;
  GetParticipationCertificatesBetweenTwoDates?: GetParticipationCertificatesBetweenTwoDates;
  UpdateActivityInfoForUser?: UpdateActivityInfoForUser;
  UpdateUnitInfoForUser?: UpdateUnitInfoForUser;
  AddUpdateActivityToUserFromIntCode?: AddUpdateActivityToUserFromIntCode;
  GetVersion?: GetVersion;
  UpdateSysAdminPassword?: UpdateSysAdminPassword;
  AddUser?: AddUser;
  UpdateUser?: UpdateUser;
  UpdateUserStatus?: UpdateUserStatus;
  UpdateUserCode?: UpdateUserCode;
  DeleteUser?: DeleteUser;
  DeleteUserList?: DeleteUserList;
  GetUser?: GetUser;
  GetUserList?: GetUserList;
  GetAllUsers?: GetAllUsers;
  GetUsersWithAddDate?: GetUsersWithAddDate;
  SynchronizeAllUserInfo?: SynchronizeAllUserInfo;
  SynchronizeUserInfo?: SynchronizeUserInfo;
  SynchronizeAllUserInfoWithPassiveProperty?: SynchronizeAllUserInfoWithPassiveProperty;
  ResetUserPassword?: ResetUserPassword;
  UpdateUserPassword?: UpdateUserPassword;
  UpdateUserPhoto?: UpdateUserPhoto;
  CanUserLogin?: CanUserLogin;
  GetUserInfo?: GetUserInfo;
  GetUserInfoAfterUpdateDate?: GetUserInfoAfterUpdateDate;
  GetUserCustomRanking?: GetUserCustomRanking;
  GetTeachers?: GetTeachers;
  GetNewCourses?: GetNewCourses;
  GetPortalUserActivities?: GetPortalUserActivities;
  GetCustomControlValue?: GetCustomControlValue;
  GetUserByBirthday?: GetUserByBirthday;
  GetUserPropertyInfos?: GetUserPropertyInfos;
  GetUserByTCKNo?: GetUserByTCKNo;
  GetUserByEMail?: GetUserByEMail;
  SynchronizeTeacherInfo?: SynchronizeTeacherInfo;
  InsertExcuseRecord?: InsertExcuseRecord;
  UpdateExcuseRecord?: UpdateExcuseRecord;
  DeleteExcuseRecord?: DeleteExcuseRecord;
  GetAllHallList?: GetAllHallList;
  GetAllFacilityList?: GetAllFacilityList;
  GetInstructorsInfo?: GetInstructorsInfo;
  GetFirmList?: GetFirmList;
  CanManagerAddUser?: CanManagerAddUser;
  ManagerOneLevelLowerUserList?: ManagerOneLevelLowerUserList;
  UserPasswordRemindMail?: UserPasswordRemindMail;
  SetRemainUsersToInactive?: SetRemainUsersToInactive;
  GetUserListAccordingtoTotalScore?: GetUserListAccordingtoTotalScore;
  GetAllUsersWithRestrictedInfo?: GetAllUsersWithRestrictedInfo;
  AddCourse?: AddCourse;
  UpdateCourse?: UpdateCourse;
  UpdateCourseStatus?: UpdateCourseStatus;
  DeleteCourse?: DeleteCourse;
  GetCourse?: GetCourse;
  GetCourseList?: GetCourseList;
  GetAllCourseListByUpdateDate?: GetAllCourseListByUpdateDate;
  GetCourseActivityStats?: GetCourseActivityStats;
  GetAllCourseList?: GetAllCourseList;
  SynchronizeCourseInfo?: SynchronizeCourseInfo;
  GetCourseStatistics?: GetCourseStatistics;
  GetUniqueObjectList?: GetUniqueObjectList;
  GetObjectDetailInfo?: GetObjectDetailInfo;
  GetUserGroups?: GetUserGroups;
  GetUsersOfUserGroups?: GetUsersOfUserGroups;
  GetSearchResult?: GetSearchResult;
  GetUnattendedParticipationStatistics?: GetUnattendedParticipationStatistics;
  UploadVideoList?: UploadVideoList;
  GetUserBasedCourseStats?: GetUserBasedCourseStats;
  isActivityExists?: IsActivityExists;
  AddActivity?: AddActivity;
  CreateActivity?: CreateActivity;
  CreateActivityWithProgramme?: CreateActivityWithProgramme;
  CreateSimpleActivity?: CreateSimpleActivity;
  CreateSimpleActivityForOneExam?: CreateSimpleActivityForOneExam;
  CreateActivitiesForAllActiveCourses?: CreateActivitiesForAllActiveCourses;
  CreateActivitiesForEnoctaCourses?: CreateActivitiesForEnoctaCourses;
  CreateActivitiesForFirmCourses?: CreateActivitiesForFirmCourses;
  UpdateActivity?: UpdateActivity;
  DeleteActivity?: DeleteActivity;
  DeleteTempActivity?: DeleteTempActivity;
  GetActivity?: GetActivity;
}

export interface AddActivity {
  input?: AddActivityInput;
  output?: AddActivityOutput;
}

export interface AddActivityInput {
  activity?: Activity;
}

export interface Activity {
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_VISIBILITY?: string;
  ACTIVITY_OWNER?: string;
  ACTIVITY_STATUS?: string;
  ACTIVITY_CATEGORY_CODE?: string;
  ACTIVITY_CERTIFICATE?: string;
  ACTIVITY_UNIT_LIST?: ActivityUnitList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUnitList {
  ActivityUnit?: ActivityUnit[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUnit {
  UNIT_CODE?: string;
  UNIT_TYPE?: string;
  SESSION_LIST?: SessionList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SessionList {
  ActivitySession?: ActivitySession[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivitySession {
  SESSION_CODE?: string;
  START_DATE?: string;
  END_DATE?: string;
  INSTRUCTOR_LIST?: UserList;
  MONITOR_LIST?: UserList;
  HALL_CODE?: string;
  MIN_ATTENDANCE_DURATION?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserList {
  string?: string[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddActivityOutput {
  AddActivityResult?: AddActivityResultClass;
}

export interface AddActivityResultClass {
  activityCode?: string;
  resultType?: string;
  resultDesc?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddActivityUser {
  input?: AddActivityUserInput;
  output?: AddActivityUserOutput;
}

export interface AddActivityUserInput {
  activityCode?: string;
  userCode?: string;
  enforceCapacityControl?: string;
  selfRegistration?: string;
}

export interface AddActivityUserOutput {
  AddActivityUserResult?: AddActivityResultClass;
}

export interface AddActivityUserWithSpecificDate {
  input?: AddActivityUserWithSpecificDateInput;
  output?: AddActivityUserWithSpecificDateOutput;
}

export interface AddActivityUserWithSpecificDateInput {
  activityCode?: string;
  userCode?: string;
  startDate?: string;
  endDate?: string;
  enforceCapacityControl?: boolean;
  selfRegistration?: boolean;
}

export interface AddActivityUserWithSpecificDateOutput {
  AddActivityUserWithSpecificDateResult?: AddActivityResultClass;
}

export interface AddActivityUsers {
  input?: AddActivityUsersInput;
  output?: AddActivityUsersOutput;
}

export interface AddActivityUsersInput {
  activityCode?: string;
  userList?: UserList;
  enforceCapacityControl?: string;
  selfRegistration?: string;
}

export interface AddActivityUsersOutput {
  AddActivityUsersResult?: AddActivityResultClass;
}

export interface AddCommentToKurumsalTubeContent {
  input?: AddCommentToKurumsalTubeContentInput;
  output?: AddCommentToKurumsalTubeContentOutput;
}

export interface AddCommentToKurumsalTubeContentInput {
  userCode?: string;
  contentID?: string;
  title?: string;
  comment?: string;
}

export interface AddCommentToKurumsalTubeContentOutput {
  AddCommentToKurumsalTubeContentResult?: string;
}

export interface AddCourse {
  input?: AddCourseInput;
  output?: AddCourseOutput;
}

export interface AddCourseInput {
  courseInfo?: CourseInfo;
}

export interface CourseInfo {
  COURSE_SYSTEM_CODE?: string;
  COURSE_CODE?: string;
  COURSE_FORMAT?: string;
  COURSE_NAME?: string;
  DESCRIPTION?: string;
  COURSE_TYPE?: string;
  TARGET?: string;
  TARGET_GROUP?: string;
  TOPIC_TITLES?: string;
  ESTIMATED_TIME?: string;
  ESTIMATED_TIME_GUN?: string;
  PLAN_TYPE?: string;
  STATUS?: string;
  LANGUAGE?: string;
  TARGET_AUDIENCE?: UserList;
  ORGANIZATIONAL_POSITION?: UserList;
  COMPETENCES?: UserList;
  COURSE_MATERIALS?: CourseMaterials;
  VALIDITY_PERIOD?: string;
  PHOTO_URL?: string;
  COURSE_SUB_TYPE?: string;
  CATEGORY_CODE?: string;
  CATEGORY_NAME?: string;
  UPPER_CATEGORY_CODE?: string;
  UPPER_CATEGORY_NAME?: string;
  VISIBLE?: string;
  CATEGORY_LIST?: CategoryList;
  KEYWORD?: string;
  courseResult?: AddCourseResultClass;
  COMPETENCY_LIST?: CompetencyList;
  COURSE_ENT_CODE?: string;
  TASK_TYPE?: string;
  TASK_KIND?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CategoryList {
  CourseCategory?: CourseCategory[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseCategory {
  COURSE_CATEGORY_NAME?: string;
  COURSE_CATEGORY_CODE?: string;
  COURSE_CATEGORY_LEVEL?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CompetencyList {
  CompetencyInfo?: CompetencyInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CompetencyInfo {
  COMPETENCY_CODE?: string;
  COMPETENCY_INTEGRATION_CODE?: string;
  COMPETENCY_NAME?: string;
  COMPETENCY_LEVEL?: string;
  UPPER_COMPETENCY_INTEGRATION_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseMaterials {
  CourseMaterials?: CourseMaterialsClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseMaterialsClass {
  courseMaterialsName?: string;
  courseMaterialsUrl?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddCourseResultClass {
  courseCode?: string;
  resultType?: string;
  resultDesc?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddCourseOutput {
  AddCourseResult?: AddCourseResultClass;
}

export interface AddCourseComment {
  input?: AddCourseCommentInput;
  output?: AddCourseCommentOutput;
}

export interface AddCourseCommentInput {
  userCode?: string;
  unitIntegrationCode?: string;
  comment?: string;
}

export interface AddCourseCommentOutput {
  AddCourseCommentResult?: string;
}

export interface AddFacility {
  input?: AddFacilityInput;
  output?: AddFacilityOutput;
}

export interface AddFacilityInput {
  facility?: Facility;
}

export interface Facility {
  FACILITY_INTEGRATION_CODE?: string;
  FACILITY_NAME?: string;
  FACILITY_USER_CODE?: string;
  FACILITY_CITY_INTEGRATION_CODE?: string;
  FACILITY_IS_ACCOMMODATION?: string;
  FACILITY_ESTIMATED_DAILY_COST?: string;
  FACILITY_ADDRESS?: string;
  FACILITY_DESCRIPTION?: string;
  FACILITY_EXPLANATION?: string;
  FACILITY_PORTAL_STATUS?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddFacilityOutput {
  AddFacilityResult?: Result;
}

export interface Result {
  resultType?: string;
  resultDesc?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddFirm {
  input?: AddFirmInput;
  output?: AddFirmOutput;
}

export interface AddFirmInput {
  firm?: Firm;
}

export interface Firm {
  FIRM_NAME?: string;
  FIRM_USER_NAME?: string;
  FIRM_USER_SURNAME?: string;
  FIRM_EMAIL?: string;
  FIRM_TEL?: string;
  FIRM_COMPANY_NAME?: string;
  FIRM_INSIDE_COMPANY?: string;
  FIRM_REFERENCES?: string;
  FIRM_EXPLANATION?: string;
  FIRM_ACCREDITATION_ID?: string;
  FIRM_CATEGORY_ID?: string;
  FIRM_INTEGRATION_CODE?: string;
  FIRM_IBAN_NO?: string;
  FIRM_TAX_NUMBER?: string;
  FIRM_TYPE?: string;
  FIRM_STATUS?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddFirmOutput {
  AddFirmResult?: Result;
}

export interface AddHall {
  input?: AddHallInput;
  output?: AddHallOutput;
}

export interface AddHallInput {
  hall?: Hall;
}

export interface Hall {
  HALL_INTEGRATION_CODE?: string;
  HALL_FACILITY_INTEGRATION_CODE?: string;
  HALL_NAME?: string;
  HALL_CAPACITY?: string;
  HALL_EXPLANATION?: string;
  HALL_TYPE?: string;
  HALL_USER_CODE?: string;
  HALL_MIN_CAPACITY?: string;
  HALL_MAX_CAPACITY?: string;
  HALL_ACCOMODATION_FACILITY_INTEGRATION_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddHallOutput {
  AddHallResult?: Result;
}

export interface AddKurumsalTubeContent {
  input?: AddKurumsalTubeContentInput;
  output?: AddKurumsalTubeContentOutput;
}

export interface AddKurumsalTubeContentInput {
  content?: PurpleContent;
}

export interface PurpleContent {
  Title?: string;
  ShortDescription?: string;
  ContentTypeCode?: string;
  ContentCategoryCode?: string;
  IconFile?: string;
  IconFileName?: string;
  FileContentAsEmbededCode?: string;
  StartDate?: string;
  EndDate?: string;
  IsFeatured?: string;
  IsImportant?: string;
  CanUserComment?: string;
  CanUserGivePoint?: string;
  LoginViewStatus?: string;
  Status?: string;
  IsVideoContent?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddKurumsalTubeContentOutput {
  AddKurumsalTubeContentResult?: AddKurumsalTubeContentResult;
}

export interface AddKurumsalTubeContentResult {
  resultType?: string;
  resultDesc?: string;
  ObjectCode?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddKurumsalTubeContentCategory {
  input?: AddKurumsalTubeContentCategoryInput;
  output?: AddKurumsalTubeContentCategoryOutput;
}

export interface AddKurumsalTubeContentCategoryInput {
  contentCategory?: ContentCategory;
}

export interface ContentCategory {
  DefaultLanguageCode?: string;
  NameList?: NameList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface NameList {
  NameForLanguage?: Name[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Name {
  LanguageCode?: string;
  Name?: string;
  PluralName?: string;
  Description?: string;
  Keywords?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddKurumsalTubeContentCategoryOutput {
  AddKurumsalTubeContentCategoryResult?: AddKurumsalTubeContentResult;
}

export interface AddKurumsalTubeContentType {
  input?: AddKurumsalTubeContentTypeInput;
  output?: AddKurumsalTubeContentTypeOutput;
}

export interface AddKurumsalTubeContentTypeInput {
  contentType?: ContentType;
}

export interface ContentType {
  DefaultLanguageCode?: string;
  NameList?: NameList;
  LoginViewStatus?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddKurumsalTubeContentTypeOutput {
  AddKurumsalTubeContentTypeResult?: AddKurumsalTubeContentResult;
}

export interface AddLiteQSCompany {
  input?: AddLiteQSCompanyInput;
  output?: AddLiteQSCompanyOutput;
}

export interface AddLiteQSCompanyInput {
  user?: User;
  qs_userID?: string;
  qs_userCode?: string;
  companyName?: string;
  virDirName?: string;
  logoID?: string;
  LicenceNumber?: string;
  licenceStartDate?: string;
  licenceEndDate?: string;
}

export interface User {
  USER_CODE?: string;
  ENOCTA_USER_ID?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  PASSWORD?: string;
  LANGUAGE?: number;
  STATUS?: number;
  USER_TYPE?: number;
  FOTOGRAF?: string;
  ADDRESS?: string;
  CITY?: string;
  ENOCTA_CITY_ID?: string;
  DISTRICT?: string;
  ZIP_CODE?: string;
  EMAIL?: string;
  WEBADDRESS?: string;
  TEL1?: string;
  TEL2?: string;
  GSM1?: string;
  GSM2?: string;
  FAX?: string;
  GENDER?: string;
  ENOCTA_GENDER?: string;
  MANAGER?: string;
  ENOCTA_MANAGER_ID?: string;
  BIRTHDAY?: string;
  REGISTER_ID?: string;
  TCK_NO?: string;
  DATE_OF_ENTRY?: string;
  DATE_OF_LEAVE?: string;
  MARITAL_STATUS?: string;
  ENOCTA_MARITAL_STATUS?: string;
  MAIDEN_NAME?: string;
  PLACE_OF_BIRTH?: string;
  ENOCTA_PLACE_OF_BIRTH?: string;
  EDUCATIONAL_STATUS?: string;
  ENOCTA_EDUCATIONAL_STATUS?: string;
  REGISTER_DATE?: string;
  PILOT_SOSYAL?: string;
  GORSEL_YUZDE?: string;
  ISITSEL_YUZDE?: string;
  KINESTETIK_YUZDE?: string;
  PORTAL_PAGE?: string;
  ENOCTA_USER_FEATURES_LIST?: EnoctaUserFeaturesList;
  USER_FEATURES?: UserList;
  userResult?: AddUserResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface EnoctaUserFeaturesList {
  UserFeatures?: UserFeatures[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserFeatures {
  _userFeatures?: UserList;
  _isActive?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddUserResultClass {
  userCode?: string;
  resultType?: string;
  resultDesc?: string;
  userID?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddLiteQSCompanyOutput {
  AddLiteQSCompanyResult?: AddLiteQSCompanyResultClass;
}

export interface AddLiteQSCompanyResultClass {
  anyType?: AnyTypeClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AnyTypeClass {}

export interface AddMobileToken {
  input?: AddMobileTokenInput;
  output?: AddMobileTokenOutput;
}

export interface AddMobileTokenInput {
  request?: PurpleRequest;
}

export interface PurpleRequest {
  UserID?: string;
  DeviceID?: string;
  PushToken?: string;
  OsType?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddMobileTokenOutput {
  AddMobileTokenResult?: TokenResult;
}

export interface TokenResult {
  resultType?: string;
  resultDesc?: string;
  info?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddQSCompany {
  input?: AddQSCompanyInput;
  output?: AddQSCompanyOutput;
}

export interface AddQSCompanyInput {
  qs_userID?: string;
  companyName?: string;
  companyEmail?: string;
  virDirName?: string;
  logoID?: string;
  LicenceNumber?: string;
  licenceStartDate?: string;
  licenceEndDate?: string;
}

export interface AddQSCompanyOutput {
  AddQSCompanyResult?: AddLiteQSCompanyResultClass;
}

export interface AddQSManager {
  input?: AddQSManagerInput;
  output?: AddQSManagerOutput;
}

export interface AddQSManagerInput {
  user?: User;
  liteAdmin?: string;
  qs_userCode?: string;
  companyName?: string;
}

export interface AddQSManagerOutput {
  AddQSManagerResult?: AddLiteQSCompanyResultClass;
}

export interface AddRemoveActivityUser {
  input?: AddRemoveActivityUserInput;
  output?: AddRemoveActivityUserOutput;
}

export interface AddRemoveActivityUserInput {
  addedActivityCode?: string;
  removedActivityCode?: string;
  userCode?: string;
  enforceCapacityControl?: string;
  selfRegistration?: string;
}

export interface AddRemoveActivityUserOutput {
  AddRemoveActivityUserResult?: AddRemoveActivityUserResult;
}

export interface AddRemoveActivityUserResult {
  UserActivityResult?: AddActivityResultClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddSessionToActivity {
  input?: AddSessionToActivityInput;
  output?: AddSessionToActivityOutput;
}

export interface AddSessionToActivityInput {
  activityCode?: string;
  courseCode?: string;
  baslangicTarihi?: string;
  bitisTarihi?: string;
  instructorList?: string;
  monitorList?: string;
  hallCode?: string;
  minAttendanceDuration?: string;
}

export interface AddSessionToActivityOutput {
  AddSessionToActivityResult?: AddActivityResultClass;
}

export interface AddSurveyUsers {
  input?: AddSurveyUsersInput;
  output?: AddSurveyUsersOutput;
}

export interface AddSurveyUsersInput {
  userCode?: string;
  surveyID?: string;
}

export interface AddSurveyUsersOutput {
  AddSurveyUsersResult?: Result;
}

export interface AddUpdateActivityToUserFromIntCode {
  input?: AddUpdateActivityToUserFromIntCodeInput;
  output?: AddUpdateActivityToUserFromIntCodeOutput;
}

export interface AddUpdateActivityToUserFromIntCodeInput {
  userCode?: string;
  courseIntCode?: string;
  successStatus?: string;
  finishStatus?: string;
  score?: string;
  dateCompleted?: string;
  selfRegistration?: string;
}

export interface AddUpdateActivityToUserFromIntCodeOutput {
  AddUpdateActivityToUserFromIntCodeResult?: Result;
}

export interface AddUpdateExternalPortal {
  input?: AddUpdateExternalPortalInput;
  output?: AddUpdateExternalPortalOutput;
}

export interface AddUpdateExternalPortalInput {
  externalPortalCode?: string;
  externalPortalName?: string;
  portalLinkAddress?: string;
  ssoPresharedKey?: string;
  status?: string;
  companyName?: string;
}

export interface AddUpdateExternalPortalOutput {
  AddUpdateExternalPortalResult?: AddUpdateExternalPortalResult;
}

export interface AddUpdateExternalPortalResult {
  resultType?: string;
  resultDesc?: string;
  EXTERNAL_PORTAL_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AddUser {
  input?: AddUserInput;
  output?: AddUserOutput;
}

export interface AddUserInput {
  userInfo?: User;
}

export interface AddUserOutput {
  AddUserResult?: AddUserResultClass;
}

export interface CanManagerAddUser {
  input?: CanManagerAddUserInput;
  output?: CanManagerAddUserOutput;
}

export interface CanManagerAddUserInput {
  userCode?: string;
  maxUserNumber?: string;
}

export interface CanManagerAddUserOutput {
  CanManagerAddUserResult?: string;
}

export interface CanUserLogin {
  input?: CanUserLoginInput;
  output?: CanUserLoginOutput;
}

export interface CanUserLoginInput {
  userCode?: string;
  userPassword?: string;
}

export interface CanUserLoginOutput {
  CanUserLoginResult?: string;
}

export interface CheckUserMobileApplicationVersion {
  input?: CheckUserMobileApplicationVersionInput;
  output?: CheckUserMobileApplicationVersionOutput;
}

export interface CheckUserMobileApplicationVersionInput {
  userCode?: string;
  mobileOS?: string;
}

export interface CheckUserMobileApplicationVersionOutput {
  CheckUserMobileApplicationVersionResult?: CheckUserMobileApplicationVersionResult;
}

export interface CheckUserMobileApplicationVersionResult {
  resultType?: string;
  resultDesc?: string;
  updateRequired?: string;
  version?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CopySurvey {
  input?: CopySurveyInput;
  output?: CopySurveyOutput;
}

export interface CopySurveyInput {
  surveyID?: string;
}

export interface CopySurveyOutput {
  CopySurveyResult?: Result;
}

export interface CourseLikeAction {
  input?: CourseLikeActionInput;
  output?: CourseLikeActionOutput;
}

export interface CourseLikeActionInput {
  userID?: string;
  unitID?: string;
  type?: string;
}

export interface CourseLikeActionOutput {
  CourseLikeActionResult?: string;
}

export interface CreateActivitiesForAllActiveCourses {
  input?: CreateActivitiesForAllActiveCoursesInput;
  output?: CreateActivitiesForAllActiveCoursesOutput;
}

export interface CreateActivitiesForAllActiveCoursesInput {
  baslangicTarihi?: string;
  bitisTarihi?: string;
  categoryName?: string;
  categoryCode?: string;
  activityOwner?: string;
}

export interface CreateActivitiesForAllActiveCoursesOutput {
  CreateActivitiesForAllActiveCoursesResult?: CreateActivitiesForCoursesResult;
}

export interface CreateActivitiesForCoursesResult {
  ActivityResult?: AddActivityResultClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CreateActivitiesForEnoctaCourses {
  input?: CreateActivitiesForAllActiveCoursesInput;
  output?: CreateActivitiesForEnoctaCoursesOutput;
}

export interface CreateActivitiesForEnoctaCoursesOutput {
  CreateActivitiesForEnoctaCoursesResult?: CreateActivitiesForCoursesResult;
}

export interface CreateActivitiesForFirmCourses {
  input?: CreateActivitiesForFirmCoursesInput;
  output?: CreateActivitiesForFirmCoursesOutput;
}

export interface CreateActivitiesForFirmCoursesInput {
  baslangicTarihi?: string;
  bitisTarihi?: string;
  categoryName?: string;
  categoryCode?: string;
  activityOwner?: string;
  uretenKodu?: string;
}

export interface CreateActivitiesForFirmCoursesOutput {
  CreateActivitiesForFirmCoursesResult?: CreateActivitiesForCoursesResult;
}

export interface CreateActivity {
  input?: CreateActivityInput;
  output?: CreateActivityOutput;
}

export interface CreateActivityInput {
  activityInfo?: ActivityInfo;
}

export interface ActivityInfo {
  ACTIVITY_ENOCTA_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  START_DATE?: Date;
  END_DATE?: Date;
  CREATE_DATE?: string;
  UPDATE_DATE?: string;
  VISIBLE?: string;
  ACTIVITY_OWNER?: string;
  STATUS?: string;
  ACTIVITY_CERTIFICATE?: string;
  PHOTO_URL?: string;
  COURSE_CODE?: string;
  CATEGORY_CODE?: string;
  CATEGORY_NAME?: string;
  ADDITIONAL_INFO1?: string;
  ADDITIONAL_INFO2?: string;
  ADDITIONAL_INFO3?: string;
  ETKINLIK_TARTISMA_GRUBU_KONUSU?: string;
  ACTIVITY_SESSION_LIST?: SessionList;
  activityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CreateActivityOutput {
  CreateActivityResult?: AddActivityResultClass;
}

export interface CreateActivityBudget {
  input?: CreateActivityBudgetInput;
  output?: CreateActivityBudgetOutput;
}

export interface CreateActivityBudgetInput {
  etkinlikEntegrasyonKodu?: string;
  faturaNo?: string;
  firmaAdi?: string;
  faturaTarihi?: string;
  aciklama?: string;
  kalemTipiKodu?: string;
  tutar?: string;
  egitimEntegrasyonKodu?: string;
  kullaniciKodu?: string;
}

export interface CreateActivityBudgetOutput {
  CreateActivityBudgetResult?: AddActivityResultClass;
}

export interface CreateActivityWithProgramme {
  input?: CreateActivityWithProgrammeInput;
  output?: CreateActivityWithProgrammeOutput;
}

export interface CreateActivityWithProgrammeInput {
  kullaniciKodu?: string;
  etkinlikEntegrasyonKodu?: string;
  etkinlikAdi?: string;
  baslangicTarihi?: string;
  bitisTarihi?: string;
  programEntegrasyonKodu?: string;
  kategoriEntegrasyonAdi?: string;
  kategoriEntegrasyonKodu?: string;
  zorunluEtkinlik?: string;
}

export interface CreateActivityWithProgrammeOutput {
  CreateActivityWithProgrammeResult?: AddActivityResultClass;
}

export interface CreateSimpleActivity {
  input?: CreateSimpleActivityInput;
  output?: CreateSimpleActivityOutput;
}

export interface CreateSimpleActivityInput {
  activityInfo?: ActivityInfo;
  pretest?: string;
  posttest?: string;
}

export interface CreateSimpleActivityOutput {
  CreateSimpleActivityResult?: AddActivityResultClass;
}

export interface CreateSimpleActivityForOneExam {
  input?: CreateActivityInput;
  output?: CreateSimpleActivityForOneExamOutput;
}

export interface CreateSimpleActivityForOneExamOutput {
  CreateSimpleActivityForOneExamResult?: AddActivityResultClass;
}

export interface DeleteActivity {
  input?: DeleteActivityInput;
  output?: DeleteActivityOutput;
}

export interface DeleteActivityInput {
  activityCode?: string;
}

export interface DeleteActivityOutput {
  DeleteActivityResult?: AddActivityResultClass;
}

export interface DeleteCourse {
  input?: DeleteCourseInput;
  output?: DeleteCourseOutput;
}

export interface DeleteCourseInput {
  courseCode?: string;
}

export interface DeleteCourseOutput {
  DeleteCourseResult?: AddCourseResultClass;
}

export interface DeleteCourseComment {
  input?: DeleteCourseCommentInput;
  output?: DeleteCourseCommentOutput;
}

export interface DeleteCourseCommentInput {
  unitIntegrationCode?: string;
  commentCode?: string;
  userCodeWhoMakesDelete?: string;
}

export interface DeleteCourseCommentOutput {
  DeleteCourseCommentResult?: Result;
}

export interface DeleteExcuseRecord {
  input?: DeleteExcuseRecordInput;
  output?: DeleteExcuseRecordOutput;
}

export interface DeleteExcuseRecordInput {
  excuseID?: string;
}

export interface DeleteExcuseRecordOutput {
  DeleteExcuseRecordResult?: ExcuseRecordResult;
}

export interface ExcuseRecordResult {
  resultType?: string;
  resultDesc?: string;
  excuseID?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface DeleteFacility {
  input?: DeleteFacilityInput;
  output?: DeleteFacilityOutput;
}

export interface DeleteFacilityInput {
  integrationCode?: string;
}

export interface DeleteFacilityOutput {
  DeleteFacilityResult?: Result;
}

export interface DeleteFirm {
  input?: DeleteFacilityInput;
  output?: DeleteFirmOutput;
}

export interface DeleteFirmOutput {
  DeleteFirmResult?: Result;
}

export interface DeleteHall {
  input?: DeleteFacilityInput;
  output?: DeleteHallOutput;
}

export interface DeleteHallOutput {
  DeleteHallResult?: Result;
}

export interface DeleteKurumsalTubeContent {
  input?: DeleteKurumsalTubeContentInput;
  output?: DeleteKurumsalTubeContentOutput;
}

export interface DeleteKurumsalTubeContentInput {
  contentID?: string;
}

export interface DeleteKurumsalTubeContentOutput {
  DeleteKurumsalTubeContentResult?: Result;
}

export interface DeleteKurumsalTubeContentCategory {
  input?: DeleteKurumsalTubeContentCategoryInput;
  output?: DeleteKurumsalTubeContentCategoryOutput;
}

export interface DeleteKurumsalTubeContentCategoryInput {
  contentCategoryID?: string;
}

export interface DeleteKurumsalTubeContentCategoryOutput {
  DeleteKurumsalTubeContentCategoryResult?: Result;
}

export interface DeleteKurumsalTubeContentComment {
  input?: DeleteKurumsalTubeContentCommentInput;
  output?: DeleteKurumsalTubeContentCommentOutput;
}

export interface DeleteKurumsalTubeContentCommentInput {
  userCode?: string;
  commentID?: string;
}

export interface DeleteKurumsalTubeContentCommentOutput {
  DeleteKurumsalTubeContentCommentResult?: string;
}

export interface DeleteKurumsalTubeContentType {
  input?: DeleteKurumsalTubeContentTypeInput;
  output?: DeleteKurumsalTubeContentTypeOutput;
}

export interface DeleteKurumsalTubeContentTypeInput {
  contentTypeID?: string;
}

export interface DeleteKurumsalTubeContentTypeOutput {
  DeleteKurumsalTubeContentTypeResult?: Result;
}

export interface DeleteMobileToken {
  input?: DeleteMobileTokenInput;
  output?: DeleteMobileTokenOutput;
}

export interface DeleteMobileTokenInput {
  request?: FluffyRequest;
}

export interface FluffyRequest {
  UserID?: string;
  DeviceID?: string;
  UserToken?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface DeleteMobileTokenOutput {
  DeleteMobileTokenResult?: Result;
}

export interface DeleteSessionFromActivity {
  input?: DeleteSessionFromActivityInput;
  output?: DeleteSessionFromActivityOutput;
}

export interface DeleteSessionFromActivityInput {
  activityCode?: string;
  courseCode?: string;
  sessionCode?: string;
}

export interface DeleteSessionFromActivityOutput {
  DeleteSessionFromActivityResult?: AddActivityResultClass;
}

export interface DeleteTempActivity {
  input?: DeleteTempActivityInput;
  output?: DeleteTempActivityOutput;
}

export interface DeleteTempActivityInput {
  userCode?: string;
}

export interface DeleteTempActivityOutput {
  DeleteTempActivityResult?: AddActivityResultClass;
}

export interface DeleteUser {
  input?: DeleteTempActivityInput;
  output?: DeleteUserOutput;
}

export interface DeleteUserOutput {
  DeleteUserResult?: AddUserResultClass;
}

export interface DeleteUserList {
  input?: DeleteUserListInput;
  output?: DeleteUserListOutput;
}

export interface DeleteUserListInput {
  userCodeList?: UserList;
}

export interface DeleteUserListOutput {
  DeleteUserListResult?: DeleteUserListResultClass;
}

export interface DeleteUserListResultClass {
  UserResult?: AddUserResultClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface DislikeKurumsalTubeContentComment {
  input?: DeleteKurumsalTubeContentCommentInput;
  output?: DislikeKurumsalTubeContentCommentOutput;
}

export interface DislikeKurumsalTubeContentCommentOutput {
  DislikeKurumsalTubeContentCommentResult?: string;
}

export interface FinishActivityUserSession {
  input?: FinishActivityUserSessionInput;
  output?: FinishActivityUserSessionOutput;
}

export interface FinishActivityUserSessionInput {
  sessionID?: string;
}

export interface FinishActivityUserSessionOutput {
  FinishActivityUserSessionResult?: string;
}

export interface GetActivitiesOfPrograms {
  input?: GetActivitiesOfProgramsInput;
  output?: GetActivitiesOfProgramsOutput;
}

export interface GetActivitiesOfProgramsInput {
  programList?: UserList;
  activityStatus?: string;
  createdByCertificate?: string;
}

export interface GetActivitiesOfProgramsOutput {
  GetActivitiesOfProgramsResult?: GetActivitResult;
}

export interface GetActivitResult {
  Data?: GetActivitiesOfProgramsResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivitiesOfProgramsResultData {
  ActivityInfo_v2?: ActivityInfoV2[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityInfoV2 {
  ACTIVITY_CODE?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_NAME?: string;
  PROGRAM_INTEGRATION_CODE?: string;
  PROGRAM_NAME?: string;
  START_DATE?: string;
  END_DATE?: string;
  CREATE_DATE?: string;
  UPDATE_DATE?: string;
  VISIBLE?: string;
  ACTIVITY_OWNER?: string;
  STATUS?: string;
  ACTIVITY_CERTIFICATE?: string;
  CREATED_BY_CERTIFICATE?: string;
  CATEGORY_INFO?: CategoryInfo;
  SELF_REGISTRATION?: string;
  ESTIMATED_HOURS?: string;
  ESTIMATED_DAYS?: string;
  EXPLANATION?: string;
  LARGE_IMAGE?: string;
  MEDIUM_IMAGE?: string;
  SMALL_IMAGE?: string;
  UNIT_LIST?: UnitList;
  activityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CategoryInfo {
  CategoryInfo?: CategoryInfoClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CategoryInfoClass {
  CATEGORY_CODE?: string;
  CATEGORY_INTEGRATION_CODE?: string;
  CATEGORY_NAME?: string;
  CATEGORY_LEVEL?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UnitList {
  ActivityUnitInfo_v2?: ActivityUnitInfoV2[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUnitInfoV2 {
  ACTIVITY_CODE?: string;
  UNIT_CODE?: string;
  UNIT_INTEGRATION_CODE?: string;
  UNIT_NAME?: string;
  UNIT_TYPE?: string;
  COURSE_FORMAT?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivity {
  input?: DeleteActivityInput;
  output?: GetActivityOutput;
}

export interface GetActivityOutput {
  GetActivityResult?: ActivityInfo;
}

export interface GetActivityCancellationRequests {
  input?: GetActivityCancellationRequestsInput;
  output?: GetActivityCancellationRequestsOutput;
}

export interface GetActivityCancellationRequestsInput {
  startDate?: string;
  endDate?: string;
}

export interface GetActivityCancellationRequestsOutput {
  GetActivityCancellationRequestsResult?: GetActivityCancellationRequestsResult;
}

export interface GetActivityCancellationRequestsResult {
  ActivityCancellationRequest?: ActivityCancellationRequest[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityCancellationRequest {
  UserCode?: string;
  ActivityIntegrationCode?: string;
  CancellationReasonIntegrationCode?: string;
  CancellationRequestDate?: string;
  CancellationRequestExp?: string;
  RequestApprovalDate?: string;
  RequestApprovalExp?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityDetailList {
  input?: GetActivityDetailListInput;
  output?: GetActivityDetailListOutput;
}

export interface GetActivityDetailListInput {
  activityList?: UserList;
  startDate?: string;
  endDate?: string;
  minUpdateDate?: string;
  maxUpdateDate?: string;
  emptyIntegrationCodes?: string;
}

export interface GetActivityDetailListOutput {
  GetActivityDetailListResult?: GetActivityListResult;
}

export interface GetActivityListResult {
  ActivityInfo?: ActivityInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityDetailListV2 {
  input?: GetActivityDetailListV2Input;
  output?: GetActivityDetailListV2Output;
}

export interface GetActivityDetailListV2Input {
  minUpdateDate?: string;
  maxUpdateDate?: string;
  activityList?: UserList;
  emptyIntegrationCodes?: string;
  categoryEntCodes?: UserList;
  selfRegistration?: string;
}

export interface GetActivityDetailListV2Output {
  GetActivityDetailList_v2Result?: GetActivitResult;
}

export interface GetActivityExamStatistic {
  input?: GetActivityExamStatisticInput;
  output?: GetActivityExamStatisticOutput;
}

export interface GetActivityExamStatisticInput {
  activityCode?: string;
  examCode?: string;
}

export interface GetActivityExamStatisticOutput {
  GetActivityExamStatisticResult?: GetActivityExamStatisticResult;
}

export interface GetActivityExamStatisticResult {
  ExamName?: string;
  Duration?: string;
  QuestionCount?: string;
  SuccessScore?: string;
  UserCount?: string;
  CompletedUserCount?: string;
  Average?: string;
  MaxScore?: string;
  MinScore?: string;
  Median?: string;
  AverageCorrectAnswers?: string;
  AverageWrongAnswers?: string;
  AverageBlankAnswers?: string;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityInvoicesBetweenDates {
  input?: GetActivityInvoicesBetweenDatesInput;
  output?: GetActivityInvoicesBetweenDatesOutput;
}

export interface GetActivityInvoicesBetweenDatesInput {
  startDate?: string;
  endDate?: string;
  languageId?: string;
}

export interface GetActivityInvoicesBetweenDatesOutput {
  GetActivityInvoicesBetweenDatesResult?: GetActivityInvoicesBetweenDatesResult;
}

export interface GetActivityInvoicesBetweenDatesResult {
  Data?: GetActivityInvoicesBetweenDatesResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityInvoicesBetweenDatesResultData {
  Invoice?: Invoice[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Invoice {
  BillId?: string;
  BillNo?: string;
  UserCode?: string;
  ActivityIntegrationCode?: string;
  ActivityCode?: string;
  ActivityName?: string;
  UnitIntegrationCode?: string;
  UnitName?: string;
  UnitCode?: string;
  CompanyCode?: string;
  CompanyName?: string;
  BillingDate?: string;
  Description?: string;
  Items?: Items;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Items {
  InvoiceItem?: InvoiceItem[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface InvoiceItem {
  BillId?: string;
  ItemId?: string;
  Price?: string;
  ItemName?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityList {
  input?: GetActivityListInput;
  output?: GetActivityListOutput;
}

export interface GetActivityListInput {
  activityList?: UserList;
  minUpdateDate?: string;
  maxUpdateDate?: string;
  emptyIntegrationCodes?: string;
}

export interface GetActivityListOutput {
  GetActivityListResult?: GetActivityListResult;
}

export interface GetActivityUnitsAndSessionsOfUnit {
  input?: GetActivityUnitsAndSessionsOfUnitInput;
  output?: GetActivityUnitsAndSessionsOfUnitOutput;
}

export interface GetActivityUnitsAndSessionsOfUnitInput {
  unitIntegrationCodes?: UserList;
  startDate?: string;
  endDate?: string;
  activityIntegrationCodes?: UserList;
  minUpdateDate?: string;
  maxUpdateDate?: string;
  emptyIntegrationCodes?: string;
}

export interface GetActivityUnitsAndSessionsOfUnitOutput {
  GetActivityUnitsAndSessionsOfUnitResult?: GetActivityUnitsAndSessionsOfUnitResult;
}

export interface GetActivityUnitsAndSessionsOfUnitResult {
  Data?: GetActivityUnitsAndSessionsOfUnitResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityUnitsAndSessionsOfUnitResultData {
  ActivityUnitsAndSessionsResult?: ActivityUnitsAndSessionsResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Level {
  LEVEL_ID?: string;
  LEVEL_NAME?: string;
}

export interface ActivityUnitsAndSessionsResult {
  LEVEL: Level;
  ACTIVITY_CODE?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_OWNER_NAME?: string;
  ACTIVITY_OWNER_CODE?: string;
  STATUS?: string;
  MIN_CAPACITY?: string;
  RECOMMENDED_CAPACITY?: string;
  MAX_CAPACITY?: string;
  ACTIVITY_UNIT_INFO?: ActivityUnitInfo;
  ACTIVITY_CATEGORY_INFO?: CategoryInfo;
  UNIT_CATEGORY_INFO?: CategoryInfo;
  PLAN_TYPE?: string;
  ACTIVITY_CREATE_DATE?: string;
  ACTIVITY_EXPLANATIOIN?: string;
  ACTIVITY_ADDITIONAL_INFO?: ActivityAdditionalInfo;
  ACTIVITY_PICTURE_ADRESS_LARGE?: string;
  ACTIVITY_PICTURE_ADRESS_MEDIUM?: string;
  ACTIVITY_PICTURE_ADRESS_SMALL?: string;
  COMPULSORY?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityAdditionalInfo {
  ActivityAdditionalInfo?: ActivityAdditionalInfoClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityAdditionalInfoClass {
  ACTIVITY_CODE?: string;
  ADDITIONAL_INFO_NAME?: string;
  ADDITIONAL_INFO_VALUE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUnitInfo {
  ActivityUnitInfo?: ActivityUnitInfoClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUnitInfoClass {
  ACTIVITY_CODE?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_NAME?: string;
  UNIT_CODE?: string;
  UNIT_INTEGRATION_CODE?: string;
  UNIT_NAME?: string;
  UNIT_TYPE?: string;
  COURSE_FORMAT?: string;
  COURSE_SUB_TYPE?: string;
  UNIT_OWNER_NAME?: string;
  UNIT_OWNER_CODE?: string;
  SESSION_INFO?: Session;
  UNIT_CATEGORY_INFO?: CategoryInfo;
  COURSE_PRODUCING_COMPANY?: string;
  UNIT_EXPLANATIOIN?: string;
  UNIT_EXPECTED_DURATION_DAY?: string;
  UNIT_EXPECTED_DURATION_HOUR?: string;
  UNIT_EXPECTED_DURATION_MINUTE?: string;
  COURSE_LANGUAGE?: string;
  COURSE_PICTURE_ADRESS_LARGE?: string;
  COURSE_PICTURE_ADRESS_MEDIUM?: string;
  COURSE_PICTURE_ADRESS_SMALL?: string;
  UNIT_STATUS?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Session {
  SessionInfo?: SessionInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SessionInfo {
  ACTIVITY_CODE?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  UNIT_CODE?: string;
  UNIT_INTEGRATION_CODE?: string;
  SESSION_CODE?: string;
  SESSION_START_DATE?: string;
  SESSION_END_DATE?: string;
  SESSION_FACILITY_CODE?: string;
  SESSION_FACILITY_NAME?: string;
  SESSION_HALL_CODE?: string;
  SESSION_HALL_NAME?: string;
  INSTRUCTOR_LIST?: RList;
  OBSERVER_LIST?: RList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface RList {
  InstructorInfo?: InstructorInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface InstructorInfo {
  INSTRUCTOR_PICTURE_ADDRESS: any;
  JOB_EXPERIENCE: any;
  ACCREDITATION: any;
  EXPERTISE_AREAS: any;
  INSTRUCTOR_TARGET_AUDIENCE: any;
  INSTRUCTOR_EXPERTISE_AREAS: any;
  INSTRUCTOR_REFERENCES: any;
  INSTRUCTOR_RESUME: any;
  INSTRUCTOR_CODE?: string;
  INSTRUCTOR_NAME?: string;
  INSTRUCTOR_TYPE?: string;
  INSTRUCTOR_COMPANY_NAME?: string;
  INSTRUCTOR_SESSION_LINK?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetActivityUsers {
  input?: GetActivityUsersInput;
  output?: GetActivityUsersOutput;
}

export interface GetActivityUsersInput {
  activityIntCodes?: UserList;
}

export interface GetActivityUsersOutput {
  GetActivityUsersResult?: GetActivityUsersResult;
}

export interface GetActivityUsersResult {
  ActivityUsers?: ActivityUsers[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUsers {
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_USERS?: UserList;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAdvisorEvaluationSurveysResults {
  input?: GetAdvisorEvaluationSurveysResultsInput;
  output?: GetAdvisorEvaluationSurveysResultsOutput;
}

export interface GetAdvisorEvaluationSurveysResultsInput {
  advisorCode?: string;
  courseIntegrationCode?: string;
  activityIntegrationCode?: string;
  startDate?: string;
  endDate?: string;
}

export interface GetAdvisorEvaluationSurveysResultsOutput {
  GetAdvisorEvaluationSurveysResultsResult?: GetAdvisorEvaluationSurveysResultsResult;
}

export interface GetAdvisorEvaluationSurveysResultsResult {
  AdvisorEvaluationResult?: AdvisorEvaluationResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AdvisorEvaluationResult {
  UserCode?: string;
  ActivityIntegrationCode?: string;
  CourseIntegrationCode?: string;
  SessionNo?: string;
  SessionStartDate?: string;
  SessionEndDate?: string;
  EvaluationScore?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAdvisorsCancellationRequests {
  input?: GetActivityCancellationRequestsInput;
  output?: GetAdvisorsCancellationRequestsOutput;
}

export interface GetAdvisorsCancellationRequestsOutput {
  GetAdvisorsCancellationRequestsResult?: GetAdvisorsCancellationRequestsResult;
}

export interface GetAdvisorsCancellationRequestsResult {
  AdvisorCancellationRequest?: AdvisorCancellationRequest[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AdvisorCancellationRequest {
  UserCode?: string;
  ActivityIntegrationCode?: string;
  CourseIntegrationCode?: string;
  CancellationReasonIntegrationCode?: string;
  CancellationRequestDate?: string;
  CancellationRequestExp?: string;
  RequestApprovalDate?: string;
  RequestApprovalExp?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllCourseList {
  input?: GetAllCourseListInput;
  output?: GetAllCourseListOutput;
}

export interface GetAllCourseListInput {
  includePassive?: string;
}

export interface GetAllCourseListOutput {
  GetAllCourseListResult?: GetAllCourseListResult;
}

export interface GetAllCourseListResult {
  CourseInfo?: CourseInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllCourseListByUpdateDate {
  input?: GetAllCourseListByUpdateDateInput;
  output?: GetAllCourseListByUpdateDateOutput;
}

export interface GetAllCourseListByUpdateDateInput {
  updateDate?: string;
}

export interface GetAllCourseListByUpdateDateOutput {
  GetAllCourseListByUpdateDateResult?: GetAllCourseListResult;
}

export interface GetAllFacilityList {
  input?: AnyTypeClass;
  output?: GetAllFacilityListOutput;
}

export interface GetAllFacilityListOutput {
  GetAllFacilityListResult?: GetAllFacilityListResult;
}

export interface GetAllFacilityListResult {
  FacilityInfo?: FacilityInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface FacilityInfo {
  FACILITY_CODE?: string;
  FACILITY_INTEGRATION_CODE?: string;
  FACILITY_NAME?: string;
  FACILITY_ADDRESS?: string;
  FACILITY_CITY_INTEGRATION_CODE?: string;
  FACILITY_DESCRIPTION?: string;
  FACILITY_ESTIMATED_DAILY_COST?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllHallList {
  input?: GetAllHallListInput;
  output?: GetAllHallListOutput;
}

export interface GetAllHallListInput {
  facilityEntCode?: string;
}

export interface GetAllHallListOutput {
  GetAllHallListResult?: GetAllHallListResult;
}

export interface GetAllHallListResult {
  HallInfo?: HallInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface HallInfo {
  HALL_CODE?: string;
  HALL_INTEGRATION_CODE?: string;
  FACILITY_CODE?: string;
  FACILITY_INTEGRATION_CODE?: string;
  HALL_NAME?: string;
  HALL_CAPACITY?: string;
  HALL_DESCRIPTION?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllInstructorsBetweenDates {
  input?: GetActivityCancellationRequestsInput;
  output?: GetAllInstructorsBetweenDatesOutput;
}

export interface GetAllInstructorsBetweenDatesOutput {
  GetAllInstructorsBetweenDatesResult?: GetAllInstructorsBetweenDatesResult;
}

export interface GetAllInstructorsBetweenDatesResult {
  TeacherActivityInfo?: TeacherActivityInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface TeacherActivityInfo {
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_ENT_CODE?: string;
  INST_CODE?: string;
  INST_NAME_SURNAME?: string;
  SESSION_START_DATE?: string;
  SESSION_END_DATE?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  userActivityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUserActivitiesBetweenDates {
  input?: GetAllUserActivitiesBetweenDatesInput;
  output?: GetAllUserActivitiesBetweenDatesOutput;
}

export interface GetAllUserActivitiesBetweenDatesInput {
  startDate?: string;
  endDate?: string;
  getEmptyIntegrationCode?: string;
}

export interface GetAllUserActivitiesBetweenDatesOutput {
  GetAllUserActivitiesBetweenDatesResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivitiesBetweenDatesResult {
  UserActivityInfo?: GetUserActivityInfoResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserActivityInfoResult {
  ACTIVITY_ENT_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  COURSE_UNIQUE_ID?: string;
  COURSE_CODE?: string;
  COURSE_INTERFACE_CODE?: string;
  COURSE_NAME?: string;
  USER_CODE?: string;
  ASSIGNMENT_DATE?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  COMPLETION_DATE?: string;
  COURSE_COMPLETION_DATE?: string;
  COURSE_FIRST_ENTRANCE_DATE?: string;
  COURSE_LAST_ENTRANCE_DATE?: string;
  EXPERIENCE_DURATION?: string;
  COURSE_EXPERIENCE_DURATION?: string;
  COMPLETION_PERCENTAGE?: string;
  ACTIVITY_SUCCESS_STATUS?: string;
  ACTIVITY_COMPLETE_STATUS?: string;
  ACTIVITY_SCORE?: string;
  ACTIVITY_STATUS?: string;
  ACTIVITY_USER_STATUS?: string;
  COURSE_SUCCESS_STATUS?: string;
  COURSE_COMPLETE_STATUS?: string;
  COURSE_SCORE?: string;
  PRETEST_SUCCESS_STATUS?: string;
  PRETEST_COMPLETE_STATUS?: string;
  PRETEST_SCORE?: string;
  POSTTEST_SUCCESS_STATUS?: string;
  POSTTEST_COMPLETE_STATUS?: string;
  POSTTEST_SCORE?: string;
  EKSINAV1_SUCCESS_STATUS?: string;
  EKSINAV1_COMPLETE_STATUS?: string;
  EKSINAV1_SCORE?: string;
  EKSINAV2_SUCCESS_STATUS?: string;
  EKSINAV2_COMPLETE_STATUS?: string;
  EKSINAV2_SCORE?: string;
  REGISTER_ID?: string;
  COURSE_TYPE?: string;
  CATEGORY_CODE?: string;
  CATEGORY_NAME?: string;
  COURSE_ENROLLMENT_REASON?: string;
  COURSE_ENTRY_COUNT?: string;
  PLAN_TYPE?: string;
  userActivityResult?: AddActivityResultClass;
  PROGRAM_DESCRIPTION?: string;
  LARGE_IMAGE?: string;
  MEDIUM_IMAGE?: string;
  SMALL_IMAGE?: string;
  COURSE_ENT_CODE?: string;
  TASK_TYPE?: string;
  TASK_KIND?: string;
  ASSIGNMENT_REASON?: string;
  ACTIVITY_ID?: string;
  COMPULSORY?: string;
  USER_UNIT_EXEMPTION_STATUS?: string;
  COURSE_FORMAT?: string;
  COURSE_ESTIMATED_HOURS?: string;
  COURSE_ESTIMATED_DAYS?: string;
  PROGRAM_INTEGRATION_CODE?: string;
  PROGRAM_NAME?: string;
  CATEGORY_ENT_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUserActivityInfoByUpdateDate {
  input?: GetAllCourseListByUpdateDateInput;
  output?: GetAllUserActivityInfoByUpdateDateOutput;
}

export interface GetAllUserActivityInfoByUpdateDateOutput {
  GetAllUserActivityInfoByUpdateDateResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityInfoByUpdateDateWithOneCondition {
  input?: GetAllUserActivityInfoByUpdateDateWithOneConditionInput;
  output?: GetAllUserActivityInfoByUpdateDateWithOneConditionOutput;
}

export interface GetAllUserActivityInfoByUpdateDateWithOneConditionInput {
  updateDate?: string;
  getAllData?: string;
}

export interface GetAllUserActivityInfoByUpdateDateWithOneConditionOutput {
  GetAllUserActivityInfoByUpdateDateWithOneConditionResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityInfoByUpdateDateWithTwoCondition {
  input?: GetAllUserActivityInfoByUpdateDateWithTwoConditionInput;
  output?: GetAllUserActivityInfoByUpdateDateWithTwoConditionOutput;
}

export interface GetAllUserActivityInfoByUpdateDateWithTwoConditionInput {
  minUpdateDate?: string;
  maxUpdateDate?: string;
  getAllData?: string;
  userStatus?: string;
}

export interface GetAllUserActivityInfoByUpdateDateWithTwoConditionOutput {
  GetAllUserActivityInfoByUpdateDateWithTwoConditionResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityUnitInfoByUpdateDate {
  input?: GetAllCourseListByUpdateDateInput;
  output?: GetAllUserActivityUnitInfoByUpdateDateOutput;
}

export interface GetAllUserActivityUnitInfoByUpdateDateOutput {
  GetAllUserActivityUnitInfoByUpdateDateResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDates {
  input?: GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDatesInput;
  output?: GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDatesOutput;
}

export interface GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDatesInput {
  minUpdateDate?: string;
  maxUpdateDate?: string;
  emptyIntegration?: string;
  onlyUpdatedUsers?: string;
  activityEntegrationCodes?: UserList;
  pageSize?: string;
  currentPage?: string;
}

export interface GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDatesOutput {
  GetAllUserActivityUnitInfoByUpdateDateBetweenTwoDatesResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityUnitInfoByUpdateDateForAll {
  input?: GetAllUserActivityUnitInfoByUpdateDateForAllInput;
  output?: GetAllUserActivityUnitInfoByUpdateDateForAllOutput;
}

export interface GetAllUserActivityUnitInfoByUpdateDateForAllInput {
  updateDate?: string;
  emptyIntegration?: string;
}

export interface GetAllUserActivityUnitInfoByUpdateDateForAllOutput {
  GetAllUserActivityUnitInfoByUpdateDateForAllResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserActivityUnitInfoByUpdateDateWithOption {
  input?: GetAllUserActivityUnitInfoByUpdateDateWithOptionInput;
  output?: GetAllUserActivityUnitInfoByUpdateDateWithOptionOutput;
}

export interface GetAllUserActivityUnitInfoByUpdateDateWithOptionInput {
  updateDate?: string;
  onlyUpdatedUsers?: string;
}

export interface GetAllUserActivityUnitInfoByUpdateDateWithOptionOutput {
  GetAllUserActivityUnitInfoByUpdateDateWithOptionResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetAllUserCompletedActivityInfoByCompleteDate {
  input?: GetAllUserCompletedActivityInfoByCompleteDateInput;
  output?: GetAllUserCompletedActivityInfoByCompleteDateOutput;
}

export interface GetAllUserCompletedActivityInfoByCompleteDateInput {
  complationDateBegin?: string;
  complationDateEnd?: string;
  courseType?: string;
  activityIntegrationCodes?: UserList;
  emptyIntegration?: string;
  userState?: string;
  pageSize?: string;
  pageNumber?: string;
}

export interface GetAllUserCompletedActivityInfoByCompleteDateOutput {
  GetAllUserCompletedActivityInfoByCompleteDateResult?: GetAllUserCompletedActivityInfoByCompleteDateResultClass;
}

export interface GetAllUserCompletedActivityInfoByCompleteDateResultClass {
  Data?: GetAllUserCompletedActivityInfoByCompleteDateResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUserCompletedActivityInfoByCompleteDateResultData {
  UserActivityBriefResult?: UserActivityBriefResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserActivityBriefResult {
  RESULT?: Result;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  USER_ID?: string;
  USER_REGISTER_ID?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_STATUS?: string;
  ACTIVITY_CATEGORY_INFO?: CategoryInfo;
  COMPULSORY?: string;
  LEARNING_PATH?: string;
  PLAN_TYPE?: string;
  ACTIVITY_USER_STATUS?: string;
  ASSIGNMENT_DATE?: string;
  ACTIVITY_COMPLETE_STATUS?: string;
  ACTIVITY_SUCCESS_STATUS?: string;
  ACTIVITY_SCORE?: string;
  ACTIVITY_COMPLETE_DATE?: string;
  ACTIVITY_SUCCESS_DATE?: Date;
  EXPERIENCE_DURATION?: string;
  COMPLETION_PERCENTAGE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUsers {
  input?: GetAllUsersInput;
  output?: GetAllUsersOutput;
}

export interface GetAllUsersInput {
  status?: string;
  type?: string;
  lastUpdateDate?: string;
}

export interface GetAllUsersOutput {
  GetAllUsersResult?: GetAllUsersResult;
}

export interface GetAllUsersResult {
  UserInfo?: User[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUsersActivityCourseDetailInfo {
  input?: GetAllUsersActivityCourseDetailInfoInput;
  output?: GetAllUsersActivityCourseDetailInfoOutput;
}

export interface GetAllUsersActivityCourseDetailInfoInput {
  updateDate?: string;
  maxUpdateDate?: string;
  activityIntegrationCodes?: UserList;
}

export interface GetAllUsersActivityCourseDetailInfoOutput {
  GetAllUsersActivityCourseDetailInfoResult?: GetAllUsersActivityCourseDetailInfoResult;
}

export interface GetAllUsersActivityCourseDetailInfoResult {
  Data?: GetAllUsersActivityCourseDetailInfoResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUsersActivityCourseDetailInfoResultData {
  UserUnitDetailInfo?: UserUnitDetailInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserUnitDetailInfo {
  UserCode?: string;
  ActivityEntCode?: string;
  ActivityCode?: string;
  ActivityName?: string;
  CourseEntCode?: string;
  CourseCode?: string;
  CourseName?: string;
  CourseCompletionStatus?: string;
  CourseSuccessStatus?: string;
  FirstEnteranceDate?: string;
  LastEnteranceDate?: string;
  CourseCompletionDate?: string;
  CourseScore?: string;
  ExperienceDuration?: string;
  MobileExperienceDuration?: string;
  TotalDuration?: string;
  ExpectedDuration?: string;
  EvaluationDate?: string;
  CourseCategoryInfo?: CourseCategoryInfo;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseCategoryInfo {
  CourseCategoryDetail?: CourseCategoryDetail[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseCategoryDetail {
  CategoryID?: string;
  CategoryLevel?: string;
  CategoryName?: string;
  CategoryIntegrationCode?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetAllUsersWithRestrictedInfo {
  input?: GetAllUsersWithRestrictedInfoInput;
  output?: GetAllUsersWithRestrictedInfoOutput;
}

export interface GetAllUsersWithRestrictedInfoInput {
  status?: string;
  type?: string;
  lastUpdateDate?: string;
  userAttributes?: UserList;
  userPropName?: UserList;
  userPropValue?: UserList;
}

export interface GetAllUsersWithRestrictedInfoOutput {
  GetAllUsersWithRestrictedInfoResult?: GetAllUsersWithRestrictedInfoResult;
}

export interface GetAllUsersWithRestrictedInfoResult {
  PortalUser?: PortalUser[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface PortalUser {
  UserId?: string;
  UserCode?: string;
  Name?: string;
  Surname?: string;
  Mail?: string;
  BirthDate?: string;
  RegisterDate?: string;
  DateOfEntry?: string;
  DateOfLeave?: string;
  Gender?: string;
  Attributes?: Attributes;
  Language?: string;
  Status?: string;
  UserType?: string;
  ManagerCode?: string;
  UserResult?: AddUserResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Attributes {
  PortalUserAttribute?: PortalUserAttribute[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface PortalUserAttribute {
  Title?: string;
  Value?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCertificatesByUserCode {
  input?: DeleteTempActivityInput;
  output?: GetCertificatesByUserCodeOutput;
}

export interface GetCertificatesByUserCodeOutput {
  GetCertificatesByUserCodeResult?: GetCertificatesByUserCodeResult;
}

export interface GetCertificatesByUserCodeResult {
  Data?: GetCertificatesByUserCodeResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCertificatesByUserCodeResultData {
  CertiticateDetail?: CertiticateDetail[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CertiticateDetail {
  UnitName?: string;
  Name?: string;
  EndDate?: string;
  UniqueID?: string;
  ExamCount?: string;
  EducationCount?: string;
  AccomplishedExamCount?: string;
  AccomplishedEducationCount?: string;
  EducationComplationRate?: string;
  Status?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCompletedActivityUserUnitsByUpdateDate {
  input?: GetCompletedActivityUserUnitsByUpdateDateInput;
  output?: GetCompletedActivityUserUnitsByUpdateDateOutput;
}

export interface GetCompletedActivityUserUnitsByUpdateDateInput {
  minUpdateDate?: string;
  maxUpdateDate?: string;
  userPropName?: UserList;
  userPropValue?: UserList;
  unitTypes?: UnitTypes;
}

export interface UnitTypes {
  int?: number[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCompletedActivityUserUnitsByUpdateDateOutput {
  GetCompletedActivityUserUnitsByUpdateDateResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetCompletedActivityUsers {
  input?: GetCompletedActivityUsersInput;
  output?: GetCompletedActivityUsersOutput;
}

export interface GetCompletedActivityUsersInput {
  percentage?: string;
}

export interface GetCompletedActivityUsersOutput {
  GetCompletedActivityUsersResult?: GetCompletedActivityUsersResult;
}

export interface GetCompletedActivityUsersResult {
  uai?: GetAllUserActivitiesBetweenDatesResult;
  sessionID?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCompletedActivityUsersByCompleteDate {
  input?: GetCompletedActivityUsersByCompleteDateInput;
  output?: GetCompletedActivityUsersByCompleteDateOutput;
}

export interface GetCompletedActivityUsersByCompleteDateInput {
  completeDate?: string;
}

export interface GetCompletedActivityUsersByCompleteDateOutput {
  GetCompletedActivityUsersByCompleteDateResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetCourse {
  input?: GetCourseInput;
  output?: GetCourseOutput;
}

export interface GetCourseInput {
  courseCode?: string;
  includePassive?: string;
}

export interface GetCourseOutput {
  GetCourseResult?: CourseInfo;
}

export interface GetCourseActivityStats {
  input?: GetCourseActivityStatsInput;
  output?: GetCourseActivityStatsOutput;
}

export interface GetCourseActivityStatsInput {
  courseIntegrationCodes?: UserList;
  listPassives?: string;
}

export interface GetCourseActivityStatsOutput {
  GetCourseActivityStatsResult?: GetCourseActivityStatsResult;
}

export interface GetCourseActivityStatsResult {
  Data?: GetCourseActivityStatsResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseActivityStatsResultData {
  CourseActivityStats?: CourseActivityStats[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseActivityStats {
  COURSE_ENT_CODE?: string;
  COURSE_UNIT_CODE?: string;
  COURSE_NAME?: string;
  ACTIVITY_ENT_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_STATUS?: string;
  TOTAL_USER_COUNT?: string;
  COURSE_COMPLETED_USER_COUNT?: string;
  COURSE_ONGOING_USER_COUNT?: string;
  COURSE_NOTSTARTED_USER_COUNT?: string;
  COURSE_SUCCEEDED_USER_COUNT?: string;
  COURSE_FAILED_USER_COUNT?: string;
  COURSE_SCORE_AVG?: string;
  COURSE_TOTAL_EXP_DURATION?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseAttendances {
  input?: GetCourseAttendancesInput;
  output?: GetCourseAttendancesOutput;
}

export interface GetCourseAttendancesInput {
  activityIntegrationCode?: string;
}

export interface GetCourseAttendancesOutput {
  GetCourseAttendancesResult?: GetCourseAttendancesResult;
}

export interface GetCourseAttendancesResult {
  SessionAttendanceInfo?: SessionAttendanceInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SessionAttendanceInfo {
  ActivityIntegrationCode?: string;
  CourseIntegrationCode?: string;
  SessionNo?: string;
  UserCode?: string;
  AttendanceDuration?: string;
  AttendanceStatus?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseComments {
  input?: GetCourseCommentsInput;
  output?: GetCourseCommentsOutput;
}

export interface GetCourseCommentsInput {
  unitIntegrationCode?: string;
}

export interface GetCourseCommentsOutput {
  GetCourseCommentsResult?: GetCourseCommentsResult;
}

export interface GetCourseCommentsResult {
  resultType?: string;
  resultDesc?: string;
  Comments?: Comments;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Comments {
  CommentDetail?: CommentDetail[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CommentDetail {
  CommentCode?: string;
  UserCode?: string;
  UserName?: string;
  UserSurname?: string;
  CommentText?: string;
  RelatedCommentCode?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseEvaluationSurveysResults {
  input?: GetCourseEvaluationSurveysResultsInput;
  output?: GetCourseEvaluationSurveysResultsOutput;
}

export interface GetCourseEvaluationSurveysResultsInput {
  courseIntegrationCode?: string;
  startDate?: string;
  endDate?: string;
}

export interface GetCourseEvaluationSurveysResultsOutput {
  GetCourseEvaluationSurveysResultsResult?: GetCourseEvaluationSurveysResultsResult;
}

export interface GetCourseEvaluationSurveysResultsResult {
  CourseEvaluationResult?: CourseEvaluationResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseEvaluationResult {
  ActivityIntegrationCode?: string;
  CourseIntegrationCode?: string;
  EvaluationScore?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseList {
  input?: GetCourseListInput;
  output?: GetCourseListOutput;
}

export interface GetCourseListInput {
  courseList?: UserList;
  includePassive?: string;
}

export interface GetCourseListOutput {
  GetCourseListResult?: GetAllCourseListResult;
}

export interface GetCourseStatistics {
  input?: GetCourseStatisticsInput;
  output?: GetCourseStatisticsOutput;
}

export interface GetCourseStatisticsInput {
  startDate?: string;
  endDate?: string;
  getPassives?: string;
}

export interface GetCourseStatisticsOutput {
  GetCourseStatisticsResult?: GetCourseStatisticsResult;
}

export interface GetCourseStatisticsResult {
  CourseStatisticsResult?: CourseStatisticsResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseStatisticsResult {
  COURSE_INTEGRATION_CODE?: string;
  COURSE_CODE?: string;
  COURSE_NAME?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_CATEGORY_CODE?: string;
  ACTIVITY_CATEGORY_NAME?: string;
  TOTAL_USER_COUNT?: string;
  NOT_STARTED_USER_COUNT?: string;
  CONTINUING_USER_COUNT?: string;
  FINISHED_USER_COUNT?: string;
  SUCCEEDED_USER_COUNT?: string;
  FAILED_USER_COUNT?: string;
  AVG_SCORE?: string;
  TOTAL_EXP_DURATION?: string;
  SURVEY_ANSWER_COUNT?: string;
  SURVEY_AVG_SCORE?: string;
  SURVEY_COURSE_AVG_SCORE?: string;
  SURVEY_INSTRUCTOR_AVG_SCORE?: string;
  SURVEY_HALL_AVG_SCORE?: string;
  COURSE_FORMAT?: string;
  COURSE_TYPE?: string;
  ESTIMATED_TIME?: string;
  ESTIMATED_DAYS?: string;
  LANGUAGE?: string;
  COURSE_SUB_TYPE?: string;
  COURSE_CATEGORY_CODE?: string;
  COURSE_CATEGORY_NAME?: string;
  COURSE_UPPER_CATEGORY_CODE?: string;
  COURSE_UPPER_CATEGORY_NAME?: string;
  courseResult?: AddCourseResultClass;
  CATEGORY_LIST?: CategoryList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCourseStats {
  input?: GetCourseStatsInput;
  output?: GetCourseStatsOutput;
}

export interface GetCourseStatsInput {
  unitID?: string;
}

export interface GetCourseStatsOutput {
  GetCourseStatsResult?: GetCourseStatsResult;
}

export interface GetCourseStatsResult {
  resultType?: string;
  resultDesc?: string;
  unitID?: string;
  likeCount?: string;
  disLikeCount?: string;
  commentCount?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetCustomControlValue {
  input?: GetCustomControlValueInput;
  output?: GetCustomControlValueOutput;
}

export interface GetCustomControlValueInput {
  UserId?: string;
  Type?: string;
}

export interface GetCustomControlValueOutput {
  GetCustomControlValueResult?: string;
}

export interface GetFirmList {
  input?: GetFirmListInput;
  output?: GetFirmListOutput;
}

export interface GetFirmListInput {
  firmEntCodes?: UserList;
}

export interface GetFirmListOutput {
  GetFirmListResult?: GetFirmListResult;
}

export interface GetFirmListResult {
  FirmInfo?: Firm[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetGamificationBadges {
  input?: GetGamificationBadgesInput;
  output?: GetGamificationBadgesOutput;
}

export interface GetGamificationBadgesInput {
  beginDate?: string;
  endDate?: string;
  userCodes?: UserList;
}

export interface GetGamificationBadgesOutput {
  GetGamificationBadgesResult?: GetGamificationBadgesResult;
}

export interface GetGamificationBadgesResult {
  resultType?: string;
  resultDesc?: string;
  Badges?: Badges;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Badges {
  GamificationBadge?: GamificationBadge[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GamificationBadge {
  User_Code?: string;
  User_Name?: string;
  User_Surname?: string;
  Badge_Name?: string;
  Date?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetGamificationScores {
  input?: GetGamificationBadgesInput;
  output?: GetGamificationScoresOutput;
}

export interface GetGamificationScoresOutput {
  GetGamificationScoresResult?: GetGamificationScoresResult;
}

export interface GetGamificationScoresResult {
  resultType?: string;
  resultDesc?: string;
  GamificationScores?: GamificationScores;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GamificationScores {
  GamificationScore?: GamificationScore[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GamificationScore {
  User_Code?: string;
  User_Name?: string;
  User_Surname?: string;
  Behaviour_Name?: string;
  IsBadge?: string;
  Score?: string;
  Date?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetInstructorsInfo {
  input?: GetInstructorsInfoInput;
  output?: GetInstructorsInfoOutput;
}

export interface GetInstructorsInfoInput {
  instructorAddDate?: string;
}

export interface GetInstructorsInfoOutput {
  GetInstructorsInfoResult?: GetInstructorsInfoResult;
}

export interface GetInstructorsInfoResult {
  TeachersInfo?: TeachersInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface TeachersInfo {
  USER_CODE?: string;
  INSTRUCTOR_NAME_SURNAME?: string;
  INSTRUCTOR_NAME?: string;
  INSTRUCTOR_SURNAME?: string;
  INSTRUCTOR_TYPE?: string;
  INSTRUCTOR_FIRM?: string;
  INSTRUCTOR_FIRM_ENT_CODE?: string;
  INSTRUCTOR_EVALUATION_SCORE?: string;
  INSTRUCTOR_ACCREDITATION?: string;
  INSTRUCTOR_ADD_DATE?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetKey {
  input?: GetKeyInput;
  output?: GetKeyOutput;
}

export interface GetKeyInput {
  userCode?: string;
  pageID?: string;
  bypass2fa?: string;
}

export interface GetKeyOutput {
  GetKeyResult?: string;
}

export interface GetKeyWithCourseCode {
  input?: GetKeyWithCourseCodeInput;
  output?: GetKeyWithCourseCodeOutput;
}

export interface GetKeyWithCourseCodeInput {
  userCode?: string;
  pageID?: string;
  courseEntCode?: string;
  bypass2fa?: string;
}

export interface GetKeyWithCourseCodeOutput {
  GetKeyWithCourseCodeResult?: string;
}

export interface GetLMSLogs {
  input?: GetLMSLogsInput;
  output?: GetLMSLogsOutput;
}

export interface GetLMSLogsInput {
  userCode?: UnitTypes;
  logType?: UnitTypes;
  logUserIp?: UserList;
  startDate?: string;
  endDate?: string;
  logStatus?: string;
}

export interface GetLMSLogsOutput {
  GetLMSLogsResult?: GetLMSLogsResult;
}

export interface GetLMSLogsResult {
  LMSLogs?: LMSLogs[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface LMSLogs {
  LOG_KODU?: string;
  KULLANICI_KODU?: string;
  LOG_TIPI?: string;
  ACIKLAMA?: string;
  TARIH?: string;
  DURUM?: string;
  KULLANICI_IP?: string;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetMobileSSOToken {
  input?: GetMobileSSOTokenInput;
  output?: GetMobileSSOTokenOutput;
}

export interface GetMobileSSOTokenInput {
  userCode?: string;
  bypass2fa?: string;
}

export interface GetMobileSSOTokenOutput {
  GetMobileSSOTokenResult?: TokenResult;
}

export interface GetMobileTokens {
  input?: GetMobileTokensInput;
  output?: GetMobileTokensOutput;
}

export interface GetMobileTokensInput {
  userID?: string;
}

export interface GetMobileTokensOutput {
  GetMobileTokensResult?: GetMobileTokensResult;
}

export interface GetMobileTokensResult {
  MobileToken?: MobileToken[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface MobileToken {
  resultType?: string;
  resultDesc?: string;
  UserID?: string;
  DeviceID?: string;
  UserToken?: string;
  PushToken?: string;
  OsType?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetNewCourses {
  input?: GetNewCoursesInput;
  output?: GetNewCoursesOutput;
}

export interface GetNewCoursesInput {
  UserId?: string;
  DateAdded?: string;
  keyword?: string;
}

export interface GetNewCoursesOutput {
  GetNewCoursesResult?: string;
}

export interface GetObjectDetailInfo {
  input?: GetObjectDetailInfoInput;
  output?: GetObjectDetailInfoOutput;
}

export interface GetObjectDetailInfoInput {
  ObjectID?: string;
}

export interface GetObjectDetailInfoOutput {
  GetObjectDetailInfoResult?: GetObjectDetailInfoResult;
}

export interface GetObjectDetailInfoResult {
  resultType?: string;
  resultDesc?: string;
  ObjectType?: string;
  ObjectID?: string;
  ObjectStatus?: string;
  AddDate?: string;
  LastUpdateDate?: string;
  ThumbnailURL?: string;
  ObjectName?: string;
  ObjectExp?: string;
  ObjectLikeCount?: string;
  ObjectViewCount?: string;
  ObjectDuration?: string;
  ObjectPageID?: string;
  ObjectCourseFormat?: string;
  UserList?: UserList;
  ObjectKeywords?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetParticipationCertificatesBetweenTwoDates {
  input?: GetParticipationCertificatesBetweenTwoDatesInput;
  output?: GetParticipationCertificatesBetweenTwoDatesOutput;
}

export interface GetParticipationCertificatesBetweenTwoDatesInput {
  startDate?: string;
  endDate?: string;
  userCodes?: UserList;
  activityCodes?: UserList;
  categoryCodes?: UserList;
}

export interface GetParticipationCertificatesBetweenTwoDatesOutput {
  GetParticipationCertificatesBetweenTwoDatesResult?: GetParticipationCertificatesBetweenTwoDatesResult;
}

export interface GetParticipationCertificatesBetweenTwoDatesResult {
  Data?: GetUsersCERTOfPartWithActivityResult;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUsersCERTOfPartWithActivityResult {
  UserCertOfPart?: UserCERTOfPart[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserCERTOfPart {
  ACTIVITY_ID?: string;
  ACTIVITY_ICON_ID?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_INTEGRATION_CODE?: string;
  CERTIFICATE_LINK?: string;
  USER_ACTIVITY_SCORE?: string;
  USER_ACTIVITY_COMPLETION_DATE?: string;
  UNIT_LIST?: UserList;
  result?: Result;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  ACTIVITY_CATEGORY_INFO?: CategoryInfo;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetPortalContentList {
  input?: GetPortalContentListInput;
  output?: GetPortalContentListOutput;
}

export interface GetPortalContentListInput {
  portalContentCodes?: UnitTypes;
  portalContentTypeCodes?: UnitTypes;
  portalContentCategoryCodes?: UnitTypes;
  publishStatus?: string;
  viewStatus?: string;
  minViewDate?: string;
  maxViewDate?: string;
  minAddUpdateDate?: string;
  languageIntegrationCode?: string;
}

export interface GetPortalContentListOutput {
  GetPortalContentListResult?: GetPortalContentListResult;
}

export interface GetPortalContentListResult {
  Data?: GetPortalContentListResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetPortalContentListResultData {
  PortalContentResult?: PortalContentResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface PortalContentResult {
  PORTAL_CONTENT_CODE?: string;
  PORTAL_CONTENT_NAME?: string;
  PORTAL_CONTENT_TYPE_CODE?: string;
  PORTAL_CONTENT_TYPE_NAME?: string;
  PORTAL_CONTENT_CATEGORY_CODE?: string;
  PORTAL_CONTENT_CATEGORY_NAME?: string;
  START_DATE?: string;
  END_DATE?: string;
  INTRO_TEXT?: string;
  CONTENT_TEXT?: string;
  ICON_ADDRESS?: string;
  PUBLISH_STATUS?: string;
  VIEW_STATUS?: string;
  INTETERESTS?: Inteterests;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Inteterests {
  Interest?: Interest[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Interest {
  CODE?: string;
  INTEGRATION_CODE?: string;
  NAME?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetPortalUserActivities {
  input?: GetPortalUserActivitiesInput;
  output?: GetPortalUserActivitiesOutput;
}

export interface GetPortalUserActivitiesInput {
  UserId?: string;
  Name?: string;
  StartDate?: string;
  EndDate?: string;
}

export interface GetPortalUserActivitiesOutput {
  GetPortalUserActivitiesResult?: string;
}

export interface GetSearchResult {
  input?: GetSearchResultInput;
  output?: GetSearchResultOutput;
}

export interface GetSearchResultInput {
  userCode?: string;
  keyword?: string;
  include?: UserList;
  topicOfInterests?: UserList;
  cultureID?: string;
  skip?: string;
  take?: string;
  sortBy?: string;
  sortDirection?: string;
  setCourseFormat?: string;
}

export interface GetSearchResultOutput {
  GetSearchResultResult?: GetSearchResultResult;
}

export interface GetSearchResultResult {
  Data?: GetSearchResultResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSearchResultResultData {
  ObjectDetailInfo?: GetObjectDetailInfoResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSentMails {
  input?: GetSentMailsInput;
  output?: GetSentMailsOutput;
}

export interface GetSentMailsInput {
  startDate?: string;
  endDate?: string;
  templateList?: UnitTypes;
}

export interface GetSentMailsOutput {
  GetSentMailsResult?: GetSentMailsResult;
}

export interface GetSentMailsResult {
  resultType?: string;
  resultDesc?: string;
  sentMailList?: SentMailList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SentMailList {
  SentMail?: SentMail[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SentMail {
  messageID?: string;
  userCode?: string;
  userCulture?: string;
  userGSMCode?: string;
  sendDate?: string;
  templateID?: string;
  parameterList?: ParameterList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ParameterList {
  NameValue?: NameValue[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface NameValue {
  name?: string;
  value?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSessionActivityList {
  input?: GetSessionActivityListInput;
  output?: GetSessionActivityListOutput;
}

export interface GetSessionActivityListInput {
  hallCode?: string;
  facilityCode?: string;
  baslangicTarihi?: string;
  bitisTarihi?: string;
}

export interface GetSessionActivityListOutput {
  GetSessionActivityListResult?: GetSessionActivityListResultClass;
}

export interface GetSessionActivityListResultClass {
  SessionActivityInfo?: SessionActivityInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SessionActivityInfo {
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  START_DATE?: string;
  CREATE_DATE?: string;
  END_DATE?: string;
  VISIBLE?: string;
  ACTIVITY_OWNER?: string;
  ACTIVITY_OWNER_CODE?: string;
  STATUS?: string;
  COURSE_CODE?: string;
  COURSE_UNIQUE_ID?: string;
  COURSE_INFO?: CourseInfo;
  EGITMEN?: string;
  GOZETMEN?: string;
  OTURUM_KODU?: string;
  SESSION_START_DATE?: string;
  SESSION_END_DATE?: string;
  SESSION_FACILITY_CODE?: string;
  SESSION_HALL_CODE?: string;
  SESSION_FACILITY_NAME?: string;
  SESSION_HALL_NAME?: string;
  USER_INFO_LIST?: GetAllUsersResult;
  CATEGORY_CODE?: string;
  CATEGORY_NAME?: string;
  ADDITIONAL_INFO1?: string;
  ADDITIONAL_INFO2?: string;
  ADDITIONAL_INFO3?: string;
  activityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSurveyDetailInfo {
  input?: GetSurveyDetailInfoInput;
  output?: GetSurveyDetailInfoOutput;
}

export interface GetSurveyDetailInfoInput {
  surveyID?: string;
  lang?: string;
  answerStartDate?: string;
  answerEndDate?: string;
}

export interface GetSurveyDetailInfoOutput {
  GetSurveyDetailInfoResult?: GetSurveyDetailInfoResult;
}

export interface GetSurveyDetailInfoResult {
  Data?: Data;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Data {
  SurveyCode?: string;
  SurveyName?: string;
  SurveyDescription?: string;
  SurveyStartDate?: string;
  SurveyEndDate?: string;
  CompulsoryStatus?: string;
  SurveyType?: string;
  AnswerUpdateStatus?: string;
  Version?: string;
  VersionSurveyCode?: string;
  AnswerGetType?: string;
  ActivityInfo?: ActivityInfoClass;
  CourseInfo?: CourseInfoClass;
  CreatedBy?: string;
  Foreword?: string;
  Lastword?: string;
  Questions?: Questions;
  QuestionGroups?: QuestionGroups;
  Users?: Users;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityInfoClass {
  ID?: string;
  NAME?: string;
  INTEGRATION_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CourseInfoClass {
  ID?: string;
  NAME?: string;
  INTEGRATION_CODE?: string;
  UnitId?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface QuestionGroups {
  SurveyQuestionGroupInfo?: SurveyQuestionGroupInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestionGroupInfo {
  QuestionGroupId?: string;
  QuestionGroupName?: string;
  GroupType?: string;
  SessionType?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Questions {
  _SurveyQuestion?: SurveyQuestion[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestion {
  QuestionId?: string;
  QuestionText?: string;
  IsRequired?: string;
  QuestionGroupId?: string;
  SurveyQuestionType?: string;
  Answers?: Answers;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Answers {
  SurveyQuestionChoice?: SurveyQuestionChoice[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestionChoice {
  AnswerId?: string;
  AnswerText?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Users {
  SurveyUser?: SurveyUser[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyUser {
  UserCode?: string;
  Name?: string;
  LastName?: string;
  EvaluatedUserCode?: string;
  EvaluatedName?: string;
  EvaluatedLastName?: string;
  UserClass?: string;
  ContentEvaluationScore?: string;
  InstructorEvaluationScore?: string;
  SurveyAnswerDate?: string;
  ActivityInfo?: ActivityInfoClass;
  CourseInfo?: CourseInfoClass;
  Sessions?: Session;
  UserAnswers?: UserAnswers;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserAnswers {
  SurveyUserAnswer?: SurveyUserAnswer[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyUserAnswer {
  QuestionId?: string;
  QuestionText?: string;
  AnswersOfUser?: AnswersOfUser;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface AnswersOfUser {
  SurveyQuestionUserAnswer?: SurveyQuestionUserAnswer[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestionUserAnswer {
  AnswerId?: string;
  AnswerText?: string;
  SessionCode?: string;
  UserClass?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSurveyDetailInfoForMultipleSurveys {
  input?: GetSurveyDetailInfoForMultipleSurveysInput;
  output?: GetSurveyDetailInfoForMultipleSurveysOutput;
}

export interface GetSurveyDetailInfoForMultipleSurveysInput {
  surveyIDs?: UnitTypes;
  lang?: string;
  answerStartDate?: string;
  answerEndDate?: string;
  getPassives?: string;
}

export interface GetSurveyDetailInfoForMultipleSurveysOutput {
  GetSurveyDetailInfoForMultipleSurveysResult?: GetSurveyDetailInfoForMultipleSurveysResult;
}

export interface GetSurveyDetailInfoForMultipleSurveysResult {
  Data?: GetSurveyDetailInfoForMultipleSurveysResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSurveyDetailInfoForMultipleSurveysResultData {
  SurveyDetail?: Data[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetSurveyStatistics {
  input?: CopySurveyInput;
  output?: GetSurveyStatisticsOutput;
}

export interface GetSurveyStatisticsOutput {
  GetSurveyStatisticsResult?: GetSurveyStatisticsResult;
}

export interface GetSurveyStatisticsResult {
  SurveyName?: string;
  StartDate?: string;
  EndDate?: string;
  TotalAnsweredUserCount?: string;
  SurveyAvgScore?: string;
  QuestionGroupsStats?: QuestionGroupsStats;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface QuestionGroupsStats {
  SurveyQuestionGroupsStatistics?: SurveyQuestionGroupsStatistics[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestionGroupsStatistics {
  GroupName?: string;
  GroupAvgScore?: string;
  QuestionStats?: QuestionStats;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface QuestionStats {
  SurveyQuestionStatistics?: SurveyQuestionStatistics[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SurveyQuestionStatistics {
  Order?: string;
  QuestionText?: string;
  QuestionAvgScore?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetTeachers {
  input?: GetTeachersInput;
  output?: GetTeachersOutput;
}

export interface GetTeachersInput {
  keyword?: string;
  inCompany?: string;
}

export interface GetTeachersOutput {
  GetTeachersResult?: string;
}

export interface GetUnansweredSurveysByUserCode {
  input?: GetUnansweredSurveysByUserCodeInput;
  output?: GetUnansweredSurveysByUserCodeOutput;
}

export interface GetUnansweredSurveysByUserCodeInput {
  userCode?: string;
  surveyType?: string;
  languageCode?: string;
}

export interface GetUnansweredSurveysByUserCodeOutput {
  GetUnansweredSurveysByUserCodeResult?: GetUnansweredSurveysByUserCodeResult;
}

export interface GetUnansweredSurveysByUserCodeResult {
  Data?: GetUnansweredSurveysByUserCodeResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUnansweredSurveysByUserCodeResultData {
  Survey?: Survey[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Survey {
  SurveyCode?: string;
  SurveyName?: string;
  SurveyDescription?: string;
  SurveyStartDate?: string;
  SurveyEndDate?: string;
  CompulsoryStatus?: string;
  SurveyType?: string;
  AnswerUpdateStatus?: string;
  Version?: string;
  VersionSurveyCode?: string;
  AnswerGetType?: string;
  ActivityInfo?: ActivityInfoClass;
  CourseInfo?: CourseInfoClass;
  CreatedBy?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUnattendedParticipationStatistics {
  input?: GetUnattendedParticipationStatisticsInput;
  output?: GetUnattendedParticipationStatisticsOutput;
}

export interface GetUnattendedParticipationStatisticsInput {
  beginDate?: string;
  endDate?: string;
  activityEntegrationCodes?: UserList;
  getPassives?: string;
}

export interface GetUnattendedParticipationStatisticsOutput {
  GetUnattendedParticipationStatisticsResult?: GetUnattendedParticipationStatisticsResult;
}

export interface GetUnattendedParticipationStatisticsResult {
  resultType?: string;
  resultDesc?: string;
  Statistic?: Statistic;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Statistic {
  UnattendedParticipationStatistic?: UnattendedParticipationStatistic[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UnattendedParticipationStatistic {
  UserCode?: string;
  UserName?: string;
  UserSurname?: string;
  UserStatus?: string;
  TotalNumberOfNonAttendedUserCourses?: string;
  TotalNumberOfNonAttendedUserSessions?: string;
  TotalNumberOfNonAttendedUserCourses_Excused?: string;
  TotalNumberOfNonAttendedUserSessions_Excused?: string;
  TotalNumberOfNonAttendedUserCourses_Unexcused?: string;
  TotalNumberOfNonAttendedUserSessions_Unexcused?: string;
  TotalNumberOfAttendedUserCourses?: string;
  TotalNumberOfAttendedUserSessions?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUniqueObjectList {
  input?: GetUniqueObjectListInput;
  output?: GetUniqueObjectListOutput;
}

export interface GetUniqueObjectListInput {
  LastUpdateDate?: string;
}

export interface GetUniqueObjectListOutput {
  GetUniqueObjectListResult?: GetUniqueObjectListResult;
}

export interface GetUniqueObjectListResult {
  resultType?: string;
  resultDesc?: string;
  ObjectList?: UnitTypes;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUpdatedActivityUnits {
  input?: GetActivityCancellationRequestsInput;
  output?: GetUpdatedActivityUnitsOutput;
}

export interface GetUpdatedActivityUnitsOutput {
  GetUpdatedActivityUnitsResult?: GetSessionActivityListResultClass;
}

export interface GetUpdatedProgramsAndUnits {
  input?: GetUpdatedProgramsAndUnitsInput;
  output?: GetUpdatedProgramsAndUnitsOutput;
}

export interface GetUpdatedProgramsAndUnitsInput {
  startDate?: string;
  endDate?: string;
  unitIntCode?: string;
}

export interface GetUpdatedProgramsAndUnitsOutput {
  GetUpdatedProgramsAndUnitsResult?: GetUpdatedProgramsAndUnitsResult;
}

export interface GetUpdatedProgramsAndUnitsResult {
  ProgramInfo?: ProgramInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ProgramInfo {
  PROGRAM_NAME?: string;
  PROGRAM_INTEGRATION_CODE?: string;
  PROGRAM_CREATE_DATE?: string;
  PROGRAM_CREATOR?: string;
  PROGRAM_STATUS?: string;
  PROGRAM_UNITS?: ProgramUnits;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ProgramUnits {
  ProgramUnitInfo?: ProgramUnitInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ProgramUnitInfo {
  UNIT_ORDER?: string;
  UNIT_NAME?: string;
  UNIT_TYPE?: string;
  UNIT_INTEGRATION_CODE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUser {
  input?: DeleteTempActivityInput;
  output?: GetUserOutput;
}

export interface GetUserOutput {
  GetUserResult?: User;
}

export interface GetUserActivities {
  input?: GetUserActivitiesInput;
  output?: GetUserActivitiesOutput;
}

export interface GetUserActivitiesInput {
  userCode?: string;
  getEmptyIntegrationCode?: string;
  plainUserActivityCompleteStatus?: string;
  userActivityStatus?: string;
  userActivityCompleteStatus?: string;
}

export interface GetUserActivitiesOutput {
  GetUserActivitiesResult?: GetAllUserActivitiesBetweenDatesResult;
}

export interface GetUserActivityBriefResult {
  input?: GetUserActivityBriefResultInput;
  output?: GetUserActivityBriefResultOutput;
}

export interface GetUserActivityBriefResultInput {
  userCodes?: UserList;
  activityIntegrationCodes?: UserList;
  completionStatus?: string;
  successStatus?: string;
  minDate?: string;
  maxDate?: string;
  compulsory?: string;
  planType?: string;
  userStatus?: string;
  langID?: string;
}

export interface GetUserActivityBriefResultOutput {
  GetUserActivityBriefResultResult?: GetAllUserCompletedActivityInfoByCompleteDateResultClass;
}

export interface GetUserActivityDetails {
  input?: GetUserActivityDetailsInput;
  output?: GetUserActivityDetailsOutput;
}

export interface GetUserActivityDetailsInput {
  userCodes?: UserList;
  emptyIntegrationCodes?: boolean;
  activityCompletionStatus?: UnitTypes;
  activityIntegrationCodes?: UserList;
  compulsory?: string;
  userStatus?: string;
}

export interface GetUserActivityDetailsOutput {
  GetUserActivityDetailsResult?: GetUserActivityDetailsResult;
}

export interface GetUserActivityDetailsResult {
  UserActivityInfoDetail?: UserActivityInfoDetail[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserActivityInfoDetail {
  ACTIVITY_ENT_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  CATEGORY_INFO?: CategoryInfo;
  ACTIVITY_DESCRIPTION?: string;
  ACTIVITY_ADDITIONAL_INFO?: ActivityAdditionalInfo;
  ACTIVITY_LARGE_IMG_ADDRESS?: string;
  ACTIVITY_MEDIUM_IMG_ADDRESS?: string;
  ACTIVITY_SMALL_IMG_ADDRESS?: string;
  COMPULSORY?: string;
  LEARNING_PATH?: string;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  ASSIGNMENT_DATE?: string;
  COMPLETION_DATE?: string;
  EXPERIENCE_DURATION?: string;
  ACTIVITY_SUCCESS_STATUS?: string;
  ACTIVITY_COMPLETE_STATUS?: string;
  ACTIVITY_SCORE?: string;
  ACTIVITY_STATUS?: string;
  ACTIVITY_USER_STATUS?: string;
  COMPLETION_RATIO?: string;
  userActivityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserActivityInfo {
  input?: GetUserActivityInfoInput;
  output?: GetUserActivityInfoOutput;
}

export interface GetUserActivityInfoInput {
  activityCode?: string;
  userCode?: string;
}

export interface GetUserActivityInfoOutput {
  GetUserActivityInfoResult?: GetUserActivityInfoResult;
}

export interface GetUserActivityInfoAndTestStatistics {
  input?: GetUserActivityInfoInput;
  output?: GetUserActivityInfoAndTestStatisticsOutput;
}

export interface GetUserActivityInfoAndTestStatisticsOutput {
  GetUserActivityInfoAndTestStatisticsResult?: GetUserActivityInfoAndTestStatisticsResult;
}

export interface GetUserActivityInfoAndTestStatisticsResult {
  ACTIVITY_ENT_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  COURSE_UNIQUE_ID?: string;
  COURSE_CODE?: string;
  COURSE_INTERFACE_CODE?: string;
  COURSE_NAME?: string;
  USER_CODE?: string;
  ASSIGNMENT_DATE?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  COMPLETION_DATE?: string;
  COURSE_COMPLETION_DATE?: string;
  COURSE_FIRST_ENTRANCE_DATE?: string;
  COURSE_LAST_ENTRANCE_DATE?: string;
  EXPERIENCE_DURATION?: string;
  COURSE_EXPERIENCE_DURATION?: string;
  COMPLETION_PERCENTAGE?: string;
  ACTIVITY_SUCCESS_STATUS?: string;
  ACTIVITY_COMPLETE_STATUS?: string;
  ACTIVITY_SCORE?: string;
  ACTIVITY_STATUS?: string;
  ACTIVITY_USER_STATUS?: string;
  COURSE_SUCCESS_STATUS?: string;
  COURSE_COMPLETE_STATUS?: string;
  COURSE_SCORE?: string;
  PRETEST_SUCCESS_STATUS?: string;
  PRETEST_COMPLETE_STATUS?: string;
  PRETEST_SCORE?: string;
  POSTTEST_SUCCESS_STATUS?: string;
  POSTTEST_COMPLETE_STATUS?: string;
  POSTTEST_SCORE?: string;
  EKSINAV1_SUCCESS_STATUS?: string;
  EKSINAV1_COMPLETE_STATUS?: string;
  EKSINAV1_SCORE?: string;
  EKSINAV2_SUCCESS_STATUS?: string;
  EKSINAV2_COMPLETE_STATUS?: string;
  EKSINAV2_SCORE?: string;
  REGISTER_ID?: string;
  COURSE_TYPE?: string;
  CATEGORY_CODE?: string;
  CATEGORY_NAME?: string;
  COURSE_ENROLLMENT_REASON?: string;
  COURSE_ENTRY_COUNT?: string;
  PLAN_TYPE?: string;
  userActivityResult?: AddActivityResultClass;
  PROGRAM_DESCRIPTION?: string;
  LARGE_IMAGE?: string;
  MEDIUM_IMAGE?: string;
  SMALL_IMAGE?: string;
  COURSE_ENT_CODE?: string;
  TASK_TYPE?: string;
  TASK_KIND?: string;
  ASSIGNMENT_REASON?: string;
  ACTIVITY_ID?: string;
  COMPULSORY?: string;
  USER_UNIT_EXEMPTION_STATUS?: string;
  COURSE_FORMAT?: string;
  COURSE_ESTIMATED_HOURS?: string;
  COURSE_ESTIMATED_DAYS?: string;
  PROGRAM_INTEGRATION_CODE?: string;
  PROGRAM_NAME?: string;
  CATEGORY_ENT_CODE?: string;
  COUNT_OF_CORRECT_ANSWERS?: string;
  COUNT_OF_INCORRECT_ANSWERS?: string;
  COUNT_OF_EMPTY_ANSWERS?: string;
  POST_COMPLETION_DATE?: string;
  POST_START_DATE?: string;
  POST_EXPERIENCE_DURATION?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserActivityInfoAndTestStatisticsWithCompletionDates {
  input?: GetUserActivityInfoAndTestStatisticsWithCompletionDatesInput;
  output?: GetUserActivityInfoAndTestStatisticsWithCompletionDatesOutput;
}

export interface GetUserActivityInfoAndTestStatisticsWithCompletionDatesInput {
  sdate?: string;
  edate?: string;
  languageId?: string;
  activityCategoryId?: string;
  includeOnlyActiveUsers?: string;
  userExamStatus?: string;
  userActivityStatus?: string;
  includeArchivedActivities?: string;
}

export interface GetUserActivityInfoAndTestStatisticsWithCompletionDatesOutput {
  GetUserActivityInfoAndTestStatisticsWithCompletionDatesResult?: GetUserActivityInfoAndTestStatisticsWithDatesResult;
}

export interface GetUserActivityInfoAndTestStatisticsWithDatesResult {
  UserActivityInfoAndTestStatisticsBase?: UserActivityInfoAndTestStatisticsBase[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserActivityInfoAndTestStatisticsBase {
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  USER_CODE?: string;
  ACTIVITY_STATUS?: string;
  POSTTEST_SCORE?: string;
  COUNT_OF_CORRECT_ANSWERS?: string;
  COUNT_OF_INCORRECT_ANSWERS?: string;
  COUNT_OF_EMPTY_ANSWERS?: string;
  COUNT_OF_CANCELLED_ANSWERS?: string;
  COUNT_OF_OTHER_QUESTIONS?: string;
  TOTAL_QUESTION_COUNT?: string;
  POST_START_DATE?: string;
  POST_COMPLETION_DATE?: string;
  POST_EXPERIENCE_DURATION?: string;
  EXAM_INTEGRATION_CODE?: string;
  EXAM_UPPER_CATEGORY_NAME?: string;
  EXAM_SUB_CATEGORY_NAME?: string;
  EXAM_NAME?: string;
  EXAM_ID?: string;
  ACTIVITY_USER_STATUS?: string;
  USER_EXAM_STATUS?: string;
  USER_ACTIVITY_STATUS?: string;
  USER_STATUS?: string;
  ACTIVITY_CATEGORY_LIST?: ActivityCategoryList;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityCategoryList {
  CategoryLevel?: CategoryLevel[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CategoryLevel {
  LevelID?: string;
  LevelName?: string;
  CategoryName?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserActivityInfoAndTestStatisticsWithDates {
  input?: GetUserActivityInfoAndTestStatisticsWithCompletionDatesInput;
  output?: GetUserActivityInfoAndTestStatisticsWithDatesOutput;
}

export interface GetUserActivityInfoAndTestStatisticsWithDatesOutput {
  GetUserActivityInfoAndTestStatisticsWithDatesResult?: GetUserActivityInfoAndTestStatisticsWithDatesResult;
}

export interface GetUserActivityInfoByUpdateDate {
  input?: GetUserActivityInfoByUpdateDateInput;
  output?: GetUserActivityInfoByUpdateDateOutput;
}

export interface GetUserActivityInfoByUpdateDateInput {
  activityCode?: string;
  userCode?: string;
  updateDate?: string;
}

export interface GetUserActivityInfoByUpdateDateOutput {
  GetUserActivityInfoByUpdateDateResult?: GetUserActivityInfoResult;
}

export interface GetUserAssignedCourseList {
  input?: GetUserAssignedCourseListInput;
  output?: GetUserAssignedCourseListOutput;
}

export interface GetUserAssignedCourseListInput {
  request?: TentacledRequest;
}

export interface TentacledRequest {
  CourseType?: string;
  UserCode?: string;
  LeaveOfAbsenceDateInterval?: DateInterval;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface DateInterval {
  StartDate?: string;
  EndDate?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserAssignedCourseListOutput {
  GetUserAssignedCourseListResult?: GetUserAssignedCourseListResult;
}

export interface GetUserAssignedCourseListResult {
  resultType?: string;
  resultDesc?: string;
  UserCourses?: GetUserAssignedCourseListResultUserCourses;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserAssignedCourseListResultUserCourses {
  UserAssignedCourseSummary?: UserAssignedCourseSummary[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserAssignedCourseSummary {
  CourseType?: string;
  CourseName?: string;
  CourseStartDate?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserBadges {
  input?: DeleteTempActivityInput;
  output?: GetUserBadgesOutput;
}

export interface GetUserBadgesOutput {
  GetUserBadgesResult?: string;
}

export interface GetUserBasedActivityCostsResult {
  input?: GetUserBasedActivityCostsResultInput;
  output?: GetUserBasedActivityCostsResultOutput;
}

export interface GetUserBasedActivityCostsResultInput {
  integrationCodes?: UserList;
  includeInstructorsCost?: string;
}

export interface GetUserBasedActivityCostsResultOutput {
  GetUserBasedActivityCostsResultResult?: GetUserBasedActivityCostsResultResult;
}

export interface GetUserBasedActivityCostsResultResult {
  resultType?: string;
  resultDesc?: string;
  Budgets?: Budgets;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Budgets {
  ActivityUserListForBudgetResult?: ActivityUserListForBudgetResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityUserListForBudgetResult {
  ACTIVITY_ENT_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  TOTAL_ITEM_BASED_COST?: string;
  GENERAL_COST?: string;
  COST_ITEM_BASED_COST?: CostItemBasedCost;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CostItemBasedCost {
  CostItemBasedCost?: CostItemBasedCostClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CostItemBasedCostClass {
  COST_INTEGRATION_CODE?: string;
  COST?: string;
  COST_NAME?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserBasedCourseStats {
  input?: GetUserBasedCourseStatsInput;
  output?: GetUserBasedCourseStatsOutput;
}

export interface GetUserBasedCourseStatsInput {
  startDate?: string;
  endDate?: string;
  userCodes?: UserList;
  activityCodes?: UserList;
}

export interface GetUserBasedCourseStatsOutput {
  GetUserBasedCourseStatsResult?: GetUserBasedCourseStatsResult;
}

export interface GetUserBasedCourseStatsResult {
  resultType?: string;
  resultDesc?: string;
  UserBasedCourseStatsList?: UserBasedCourseStatsList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserBasedCourseStatsList {
  UserBasedCourseStats?: UserBasedCourseStats[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserBasedCourseStats {
  USER_ID?: string;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  USER_REGISTER_ID?: string;
  COURSE_TOTAL_ESTIMATE_TIME?: string;
  COURSE_TOTAL_EXPERIENCE_DURATION?: string;
  TOTAL_COURSE_COUNT?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserByBirthday {
  input?: GetUserByBirthdayInput;
  output?: GetUserByBirthdayOutput;
}

export interface GetUserByBirthdayInput {
  BirthDay?: string;
}

export interface GetUserByBirthdayOutput {
  GetUserByBirthdayResult?: string;
}

export interface GetUserByEMail {
  input?: GetUserByEMailInput;
  output?: GetUserByEMailOutput;
}

export interface GetUserByEMailInput {
  mailAddress?: string;
}

export interface GetUserByEMailOutput {
  GetUserByEMailResult?: GetAllUsersResult;
}

export interface GetUserByTCKNo {
  input?: GetUserByTCKNoInput;
  output?: GetUserByTCKNoOutput;
}

export interface GetUserByTCKNoInput {
  TCKNo?: string;
}

export interface GetUserByTCKNoOutput {
  GetUserByTCKNoResult?: User;
}

export interface GetUserCompletedCourseList {
  input?: GetUserCompletedCourseListInput;
  output?: GetUserCompletedCourseListOutput;
}

export interface GetUserCompletedCourseListInput {
  request?: StickyRequest;
}

export interface StickyRequest {
  UserCode?: string;
  CourseCompletionDateInterval?: DateInterval;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserCompletedCourseListOutput {
  GetUserCompletedCourseListResult?: GetUserCompletedCourseListResult;
}

export interface GetUserCompletedCourseListResult {
  resultType?: string;
  resultDesc?: string;
  UserCourses?: GetUserCompletedCourseListResultUserCourses;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserCompletedCourseListResultUserCourses {
  UserCourseSummary?: UserCourseSummary[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserCourseSummary {
  CourseType?: string;
  CourseName?: string;
  UserStartDate?: string;
  UserEndDate?: string;
  UserScore?: string;
  UserExpDuration?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserCustomRanking {
  input?: GetUserCustomRankingInput;
  output?: GetUserCustomRankingOutput;
}

export interface GetUserCustomRankingInput {
  UserId?: string;
}

export interface GetUserCustomRankingOutput {
  GetUserCustomRankingResult?: string;
}

export interface GetUserDailyExperienceDuration {
  input?: GetUserDailyExperienceDurationInput;
  output?: GetUserDailyExperienceDurationOutput;
}

export interface GetUserDailyExperienceDurationInput {
  startDate?: string;
  endDate?: string;
  activityIntegrationCodes?: UserList;
  unitIntegrationCodes?: UserList;
  userCodes?: UserList;
  emptyIntegration?: string;
}

export interface GetUserDailyExperienceDurationOutput {
  GetUserDailyExperienceDurationResult?: GetUserDailyExperienceDurationResult;
}

export interface GetUserDailyExperienceDurationResult {
  UserActivityInfoBrief?: UserActivityInfoBrief[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserActivityInfoBrief {
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_CODE?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_START_DATE?: string;
  ACTIVITY_END_DATE?: string;
  ACTIVITY_CREATE_DATE?: string;
  ACTIVITY_STATUS?: string;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_ASSIGNMENT_DATE?: string;
  USER_ACTIVITY_SCORE?: string;
  USER_COMPLETION_DATE?: string;
  USER_COMPLETION_STATUS?: string;
  USER_SUCCESS_STATUS?: string;
  USER_EXPERIENCE_DURATION?: string;
  USER_UNIT_DETAIL?: UserUnitDetail;
  userActivityResult?: AddActivityResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserUnitDetail {
  UserUnitInfoBrief?: UserUnitInfoBrief[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserUnitInfoBrief {
  UNIT_INTEGRATION_CODE?: string;
  UNIT_CODE?: string;
  UNIT_NAME?: string;
  UNIT_TYPE?: string;
  COURSE_FORMAT?: string;
  UNIT_STATUS?: string;
  UNIT_SCORE?: string;
  UNIT_COMPLETION_DATE?: string;
  UNIT_COMPLETION_STATUS?: string;
  UNIT_SUCCESS_STATUS?: string;
  UNIT_EXPERIENCE_DURATION?: string;
  UNIT_DAILY_EXPERIENCE_DURATION?: UnitDailyExperienceDuration;
  userUnitResult?: UpdateUnitInfoForUserResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UnitDailyExperienceDuration {
  UnitDailyExperience?: UnitDailyExperience[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UnitDailyExperience {
  ACTIVITY_CODE?: string;
  UNIT_CODE?: string;
  USER_CODE?: string;
  EXPERIENCE_DATE?: string;
  LAST_DATA_RETREIVAL_DATE?: string;
  ATTEMPT_COUNT?: string;
  TOTAL_EXPERIENCE_DURATION?: string;
  MOBILE_EXPERIENCE_DURATION?: string;
  userUnitResult?: UpdateUnitInfoForUserResultClass;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UpdateUnitInfoForUserResultClass {
  unitCode?: string;
  resultType?: string;
  resultDesc?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserExamResult {
  input?: GetUserExamResultInput;
  output?: GetUserExamResultOutput;
}

export interface GetUserExamResultInput {
  startDate?: string;
  endDate?: string;
  activityIntegrationCodes?: UserList;
  examIntegrationCodes?: UserList;
  userCodes?: UserList;
  emptyIntegration?: string;
}

export interface GetUserExamResultOutput {
  GetUserExamResultResult?: GetUserExamResultResult;
}

export interface GetUserExamResultResult {
  UserExamInfo?: UserExamInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserExamInfo {
  ACTIVITY_INTEGRATION_CODE?: string;
  ACTIVITY_NAME?: string;
  EXAM_INTEGRATION_CODE?: string;
  EXAM_NAME?: string;
  USER_CODE?: string;
  USER_NAME?: string;
  USER_REGISTRATION_NUMBER?: string;
  EXAM_SCORE?: string;
  EXAM_COMPLETION_DATE?: string;
  EXPERIENCE_DURATION?: string;
  EXAM_COMPLETION_STATUS?: string;
  EXAM_SUCCESS_STATUS?: string;
  PREVIOUS_ATTEMPT_COUNT?: string;
  PREVIOUS_ATTEMPT_DETAIL?: PreviousAttemptDetail;
  CORRECT_QUESTION_COUNT?: string;
  FALSE_QUESTION_COUNT?: string;
  EMPTY_QUESTION_COUNT?: string;
  OTHER_QUESTION_COUNT?: string;
  Result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface PreviousAttemptDetail {
  PreviousExamResult?: PreviousExamResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface PreviousExamResult {
  EXAM_SCORE?: string;
  EXAM_COMPLETION_DATE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserExamUnits {
  input?: GetUserExamUnitsInput;
  output?: GetUserExamUnitsOutput;
}

export interface GetUserExamUnitsInput {
  userCode?: string;
  examID?: string;
  activityID?: string;
}

export interface GetUserExamUnitsOutput {
  GetUserExamUnitsResult?: GetUserExamUnitsSResult;
}

export interface GetUserExamUnitsSResult {
  UserExamUnitInfo?: UserExamUnitInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserExamUnitInfo {
  EXAM_CRITERION_NAME?: string;
  QUESTION_NUMBER?: string;
  QUESTION_SCORE?: string;
  TRUE_NUMBER?: string;
  FALSE_NUMBER?: string;
  FREE_NUMBER?: string;
  OTHER_NUMBER?: string;
  CRITERION_SCORE?: string;
  USER_SCORE?: string;
  SUCCESS_PERCENTAGE?: string;
  EXAM_EXPERIENCE_DURATION?: string;
  CANCELLED_QUESTION_COUNT?: string;
  ACTIVITY_NAME?: string;
  ACTIVITY_CATEGORY_NAME?: string;
  ACTIVITY_STATUS?: string;
  EXAM_NAME?: string;
  EXAM_UPPER_CATEGORY_NAME?: string;
  EXAM_SUB_CATEGORY_NAME?: string;
  userExamUnitResult?: UserExamUnitResult;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserExamUnitResult {
  activityId?: string;
  examId?: string;
  resultType?: string;
  resultDesc?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserExamUnitsWithIntegrationCodes {
  input?: GetUserExamUnitsWithIntegrationCodesInput;
  output?: GetUserExamUnitsWithIntegrationCodesOutput;
}

export interface GetUserExamUnitsWithIntegrationCodesInput {
  userCode?: string;
  examIntegrationCode?: string;
  activityIntegrationCode?: string;
}

export interface GetUserExamUnitsWithIntegrationCodesOutput {
  GetUserExamUnitsWithIntegrationCodesResult?: GetUserExamUnitsSResult;
}

export interface GetUserGroups {
  input?: GetUserGroupsInput;
  output?: GetUserGroupsOutput;
}

export interface GetUserGroupsInput {
  dateUpdated?: string;
}

export interface GetUserGroupsOutput {
  GetUserGroupsResult?: GetUserGroupsResult;
}

export interface GetUserGroupsResult {
  Data?: GetUserGroupsResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserGroupsResultData {
  UserGroup?: UserGroup[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserGroup {
  Code?: string;
  Name?: string;
  Status?: string;
  DateAdded?: string;
  DateLastUpdated?: string;
  DateLastCalculated?: string;
  CalculationStatus?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserInfo {
  input?: GetUserInfoInput;
  output?: GetUserInfoOutput;
}

export interface GetUserInfoInput {
  userCode?: string;
  userPassword?: string;
  userAttributes?: UserList;
}

export interface GetUserInfoOutput {
  GetUserInfoResult?: string;
}

export interface GetUserInfoAfterUpdateDate {
  input?: GetUserInfoAfterUpdateDateInput;
  output?: GetUserInfoAfterUpdateDateOutput;
}

export interface GetUserInfoAfterUpdateDateInput {
  updateDate?: string;
  userAttributes?: UserList;
}

export interface GetUserInfoAfterUpdateDateOutput {
  GetUserInfoAfterUpdateDateResult?: string;
}

export interface GetUserKurumsalTubeContent {
  input?: GetUserKurumsalTubeContentInput;
  output?: GetUserKurumsalTubeContentOutput;
}

export interface GetUserKurumsalTubeContentInput {
  userCode?: string;
  lang?: string;
  search?: string;
}

export interface GetUserKurumsalTubeContentOutput {
  GetUserKurumsalTubeContentResult?: GetUserKurumsalTubeContentResult;
}

export interface GetUserKurumsalTubeContentResult {
  KurumsalTubeContent?: GetUserKurumsalTubeContentDetailsResult[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserKurumsalTubeContentDetailsResult {
  ID?: string;
  Title?: string;
  VideoAddress?: string;
  IconAddress?: string;
  Type?: string;
  TypeName?: string;
  Category?: string;
  CategoryName?: string;
  StartDate?: string;
  AvgScore?: string;
  UserScore?: string;
  ReviewCount?: string;
  WatchCount?: string;
  CommentList?: CommentList;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface CommentList {
  Comment?: Comment[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Comment {
  Title?: string;
  CommentText?: string;
  UserCode?: string;
  UserName?: string;
  UserSurname?: string;
  Date?: string;
  LikeCount?: string;
  DisLikeCount?: string;
  CommentID?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserKurumsalTubeContentDetails {
  input?: GetUserKurumsalTubeContentDetailsInput;
  output?: GetUserKurumsalTubeContentDetailsOutput;
}

export interface GetUserKurumsalTubeContentDetailsInput {
  userCode?: string;
  contentID?: string;
  lang?: string;
}

export interface GetUserKurumsalTubeContentDetailsOutput {
  GetUserKurumsalTubeContentDetailsResult?: GetUserKurumsalTubeContentDetailsResult;
}

export interface GetUserList {
  input?: GetUserListInput;
  output?: GetUserListOutput;
}

export interface GetUserListInput {
  userList?: UserList;
}

export interface GetUserListOutput {
  GetUserListResult?: GetAllUsersResult;
}

export interface GetUserListAccordingtoTotalScore {
  input?: GetUserListAccordingtoTotalScoreInput;
  output?: GetUserListAccordingtoTotalScoreOutput;
}

export interface GetUserListAccordingtoTotalScoreInput {
  top?: string;
  userCode?: string;
}

export interface GetUserListAccordingtoTotalScoreOutput {
  GetUserListAccordingtoTotalScoreResult?: GetUserListAccordingtoTotalScoreResult;
}

export interface GetUserListAccordingtoTotalScoreResult {
  Data?: GetUserListAccordingtoTotalScoreResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserListAccordingtoTotalScoreResultData {
  UserSort?: UserS;
  UserList?: DataUserList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface DataUserList {
  UserScoreInfo?: UserS[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserS {
  UserCode?: string;
  Name?: string;
  Surname?: string;
  Score?: string;
  Sort?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserMobileApplicationVersions {
  input?: GetUserMobileApplicationVersionsInput;
  output?: GetUserMobileApplicationVersionsOutput;
}

export interface GetUserMobileApplicationVersionsInput {
  appVersion?: string;
  mobileOS?: string;
}

export interface GetUserMobileApplicationVersionsOutput {
  GetUserMobileApplicationVersionsResult?: GetUserMobileApplicationVersionsResult;
}

export interface GetUserMobileApplicationVersionsResult {
  resultType?: string;
  resultDesc?: string;
  UserMobileApplicationVersions?: UserMobileApplicationVersions;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserMobileApplicationVersions {
  UserMobileApplicationVersion?: UserMobileApplicationVersion[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserMobileApplicationVersion {
  USER_CODE?: string;
  USER_NAME?: string;
  MOBILE_OS?: string;
  VERSION?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserPropertyInfos {
  input?: GetUserPropertyInfosInput;
  output?: GetUserPropertyInfosOutput;
}

export interface GetUserPropertyInfosInput {
  UserProperty?: string;
}

export interface GetUserPropertyInfosOutput {
  GetUserPropertyInfosResult?: string;
}

export interface GetUserQuestionsOfExamUnits {
  input?: GetUserQuestionsOfExamUnitsInput;
  output?: GetUserQuestionsOfExamUnitsOutput;
}

export interface GetUserQuestionsOfExamUnitsInput {
  userCode?: string;
  examID?: string;
  activityID?: string;
  disableControlForDetailedResult?: string;
}

export interface GetUserQuestionsOfExamUnitsOutput {
  GetUserQuestionsOfExamUnitsResult?: GetUserQuestionsOfExamUnitsSResult;
}

export interface GetUserQuestionsOfExamUnitsSResult {
  UserQuestionsOfExamUnitInfo?: UserQuestionsOfExamUnitInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserQuestionsOfExamUnitInfo {
  QUESTION_CODE?: string;
  QUESTION_TYPE?: string;
  QUESTION_TEXT?: string;
  QUESTION_SCORE?: string;
  USER_SCORE?: string;
  ANSWERS_CHOICES?: string;
  DEPARTMENT?: string;
  EDUCATION?: string;
  SUBJECT?: string;
  GOAL?: string;
  DIFFICULTY_LEVEL?: string;
  USER_S_ANSWER?: string;
  CORRECT_ANSWER?: string;
  CREATED_DATETIME?: string;
  QUESTION_STATUS?: string;
  ADVISOR_NAME?: string;
  FIRST_VERSION_CODE?: string;
  userQuestionsOfExamUnitResult?: UserExamUnitResult;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodes {
  input?: GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodesInput;
  output?: GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodesOutput;
}

export interface GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodesInput {
  userCode?: string;
  examIntegrationCode?: string;
  activityIntegrationCode?: string;
  disableControlForDetailedResult?: string;
}

export interface GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodesOutput {
  GetUserQuestionsOfExamUnitsByExamAndActivityIntegrationCodesResult?: GetUserQuestionsOfExamUnitsSResult;
}

export interface GetUserUnits {
  input?: GetUserUnitsInput;
  output?: GetUserUnitsOutput;
}

export interface GetUserUnitsInput {
  userCode?: string;
  languageID?: string;
  activityStatus?: string;
  search?: string;
  order?: string;
  courseKinds?: UnitTypes;
  rowsStart?: string;
  rowCount?: string;
  allowOpen?: string;
  fullAppPath?: string;
  activityId?: string;
  activityCompleteStatus?: string;
  unitCompleteStatus?: string;
}

export interface GetUserUnitsOutput {
  GetUserUnitsResult?: GetUserUnitsResult;
}

export interface GetUserUnitsResult {
  UserUnitInfo?: UserUnitInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserUnitInfo {
  ETKINLIK_ENTEGRASYON_KODU?: string;
  ETKINLIK_KODU?: string;
  ETKINLIK_ADI?: string;
  ETKINLIK_PUAN_GOSTER?: string;
  ETKINLIK_DURUM?: string;
  BIRIM_ENTEGRASYON_KODU?: string;
  BIRIM_KODU?: string;
  BIRIM_ARAYUZ_KODU?: string;
  BIRIM_ADI?: string;
  BIRIM_TURU?: string;
  BIRIM_TIPI?: string;
  BIRIM_REFERANS?: string;
  MOBIL_UYUMLU?: string;
  EGITIM_ENOCTA_KODU?: string;
  IKON_KODU?: string;
  BASLANGIC_TARIHI?: string;
  BITIS_TARIHI?: string;
  ETKINLIK_BASARI_DURUMU?: string;
  ETKINLIK_PUANI?: string;
  ETKINLIK_TAMAMLAMA_DURUMU?: string;
  ETKINLIK_ATANMA_TARIHI?: string;
  ETKINLIK_TAMAMLAMA_TARIHI?: string;
  EGITIM_BIRIMI_ERISIM_DURUMU?: string;
  EGITIM_BIRIMI_DERS_DURUMU?: string;
  EGITIM_BIRIMI_BASARI_DURUMU?: string;
  EGITIM_BIRIMI_PUAN?: string;
  EGITIM_TAMAMLAMA_YUZDESI?: string;
  CAN_SEE?: string;
  SKHV_TAMAMLAMA_DURUMU?: string;
  CAN_PLAY?: string;
  PLAY_ONCLICK?: string;
  PLAY_DETAILED_DESC?: string;
  STATUS_DESC?: string;
  STATUS_IMG?: string;
  SCORE_DESC?: string;
  SCORE_IMG?: string;
  FULL_COUNT?: string;
  ETKINLIK_KATEGORI_KODU?: string;
  ETKINLIK_KATEGORI_ADI?: string;
  ZORUNLU_ETKINLIK?: string;
  userUnitResult?: UpdateUnitInfoForUserResultClass;
  CAN_RETAKE_EXAM?: string;
  PARENT_FOLDER_NAME?: string;
  PROGRAM_QUEUE_NUMBER?: string;
  GOREV_TIPI?: string;
  GOREV_TURU?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUsersCancellationRequests {
  input?: GetActivityCancellationRequestsInput;
  output?: GetUsersCancellationRequestsOutput;
}

export interface GetUsersCancellationRequestsOutput {
  GetUsersCancellationRequestsResult?: GetUsersCancellationRequestsResult;
}

export interface GetUsersCancellationRequestsResult {
  UserCancellationRequest?: UserCancellationRequest[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserCancellationRequest {
  UserCode?: string;
  OnBehalfUserCode?: string;
  SenderUserCode?: string;
  ActivityIntegrationCode?: string;
  CancellationReasonIntegrationCode?: string;
  CancellationRequestDate?: string;
  CancellationRequestExp?: string;
  RequestApprovalDate?: string;
  RequestApprovalExp?: string;
  ManagerCode?: string;
  ManagerApprovalExp?: string;
  ManagerApprovalDate?: string;
  result?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUsersCERTOfPart {
  input?: GetUsersCERTOfPartInput;
  output?: GetUsersCERTOfPartOutput;
}

export interface GetUsersCERTOfPartInput {
  userCode?: string;
  langID?: string;
  listRestricted?: string;
}

export interface GetUsersCERTOfPartOutput {
  GetUsersCertOfPartResult?: GetUsersCERTOfPartResult;
}

export interface GetUsersCERTOfPartResult {
  CERT_OF_PART?: GetUsersCERTOfPartWithActivityResult;
  SOCIAL_RESULT?: SocialResult;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SocialResult {
  USER_SCORE?: string;
  USER_BADGES?: UserBadges;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserBadges {
  UserBadge?: UserBadge[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserBadge {
  BADGE_NAME?: string;
  BADGE_LEVEL?: string;
  BADGE_DATE?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUsersCERTOfPartWithActivity {
  input?: GetUsersCERTOfPartInput;
  output?: GetUsersCERTOfPartWithActivityOutput;
}

export interface GetUsersCERTOfPartWithActivityOutput {
  GetUsersCertOfPartWithActivityResult?: GetUsersCERTOfPartWithActivityResult;
}

export interface GetUsersOfUserGroups {
  input?: GetUsersOfUserGroupsInput;
  output?: GetUsersOfUserGroupsOutput;
}

export interface GetUsersOfUserGroupsInput {
  userGroupId?: string;
}

export interface GetUsersOfUserGroupsOutput {
  GetUsersOfUserGroupsResult?: GetUsersOfUserGroupsResult;
}

export interface GetUsersOfUserGroupsResult {
  Data?: UserList;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface GetUsersWithAddDate {
  input?: GetUsersWithAddDateInput;
  output?: GetUsersWithAddDateOutput;
}

export interface GetUsersWithAddDateInput {
  lastAddDate?: string;
}

export interface GetUsersWithAddDateOutput {
  GetUsersWithAddDateResult?: GetAllUsersResult;
}

export interface GetVersion {
  input?: AnyTypeClass;
  output?: GetVersionOutput;
}

export interface GetVersionOutput {
  GetVersionResult?: string;
}

export interface InsertExcuseRecord {
  input?: InsertExcuseRecordInput;
  output?: InsertExcuseRecordOutput;
}

export interface InsertExcuseRecordInput {
  userCode?: string;
  excuseTypeCode?: string;
  dtStart?: string;
  dtEnd?: string;
}

export interface InsertExcuseRecordOutput {
  InsertExcuseRecordResult?: ExcuseRecordResult;
}

export interface LikeKurumsalTubeContentComment {
  input?: DeleteKurumsalTubeContentCommentInput;
  output?: LikeKurumsalTubeContentCommentOutput;
}

export interface LikeKurumsalTubeContentCommentOutput {
  LikeKurumsalTubeContentCommentResult?: string;
}

export interface ManagerOneLevelLowerUserList {
  input?: DeleteTempActivityInput;
  output?: ManagerOneLevelLowerUserListOutput;
}

export interface ManagerOneLevelLowerUserListOutput {
  ManagerOneLevelLowerUserListResult?: GetAllUsersResult;
}

export interface RemoveActivityUser {
  input?: GetUserActivityInfoInput;
  output?: RemoveActivityUserOutput;
}

export interface RemoveActivityUserOutput {
  RemoveActivityUserResult?: AddActivityResultClass;
}

export interface RemoveActivityUsers {
  input?: RemoveActivityUsersInput;
  output?: RemoveActivityUsersOutput;
}

export interface RemoveActivityUsersInput {
  activityCode?: string;
  userList?: UserList;
}

export interface AddActivityUsersInput {
  activityCode?: string;
  userList?: UserList;
}

export interface RemoveActivityUsersOutput {
  RemoveActivityUsersResult?: AddActivityResultClass;
}

export interface AddActivityUsersOutput {
  AddActivityUsersResult?: AddActivityResultClass;
}

export interface RemoveQSCompany {
  input?: RemoveQSCompanyInput;
  output?: RemoveQSCompanyOutput;
}

export interface RemoveQSCompanyInput {
  companyID?: string;
}

export interface RemoveQSCompanyOutput {
  RemoveQSCompanyResult?: AddLiteQSCompanyResultClass;
}

export interface RemoveSurveyUsers {
  input?: AddSurveyUsersInput;
  output?: RemoveSurveyUsersOutput;
}

export interface RemoveSurveyUsersOutput {
  RemoveSurveyUsersResult?: Result;
}

export interface ResetUserExam {
  input?: ResetUserExamInput;
  output?: ResetUserExamOutput;
}

export interface ResetUserExamInput {
  userCode?: string;
  activityID?: string;
  unitID?: string;
}

export interface ResetUserExamOutput {
  ResetUserExamResult?: AddActivityResultClass;
}

export interface ResetUserPassword {
  input?: ResetUserPasswordInput;
  output?: ResetUserPasswordOutput;
}

export interface ResetUserPasswordInput {
  userCode?: string;
  password?: string;
  eepRules?: string;
  sendEmail?: string;
  forceToChange?: string;
}

export interface ResetUserPasswordOutput {
  ResetUserPasswordResult?: AddUserResultClass;
}

export interface STMEtkinlikMaliyetEkle {
  input?: STMEtkinlikMaliyetEkleInput;
  output?: STMEtkinlikMaliyetEkleOutput;
}

export interface STMEtkinlikMaliyetEkleInput {
  WS_UserName?: string;
  WS_Password?: string;
  SK?: string;
  belgeNo?: string;
  yil?: string;
  muhasebeHesabi?: string;
  siparis?: string;
  maliKalem?: string;
  maliMerkez?: string;
  projeKodu?: string;
  masrafYeri?: string;
  metin?: string;
  tutar?: string;
  tayinNo?: string;
}

export interface STMEtkinlikMaliyetEkleOutput {
  STMEtkinlikMaliyetEkleResult?: AddActivityResultClass;
}

export interface STMEtkinlikMaliyetSil {
  input?: STMEtkinlikMaliyetSilInput;
  output?: STMEtkinlikMaliyetSilOutput;
}

export interface STMEtkinlikMaliyetSilInput {
  WS_UserName?: string;
  WS_Password?: string;
  SK?: string;
  belgeNo?: string;
  yil?: string;
}

export interface STMEtkinlikMaliyetSilOutput {
  STMEtkinlikMaliyetSilResult?: AddActivityResultClass;
}

export interface SendMail {
  input?: SendMailInput;
  output?: SendMailOutput;
}

export interface SendMailInput {
  from?: string;
  to?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
}

export interface SendMailOutput {
  SendMailResult?: string;
}

export interface SendNotificationManual {
  input?: SendNotificationManualInput;
  output?: SendNotificationManualOutput;
}

export interface SendNotificationManualInput {
  manualNotification?: ManualNotification;
}

export interface ManualNotification {
  userList?: UnitTypes;
  notificationInner?: NotificationInner;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface NotificationInner {
  title?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SendNotificationManualOutput {
  SendNotificationManualResult?: Result;
}

export interface SetRemainUsersToInactive {
  input?: SetRemainUsersToInactiveInput;
  output?: SetRemainUsersToInactiveOutput;
}

export interface SetRemainUsersToInactiveInput {
  userCodes?: UserList;
}

export interface SetRemainUsersToInactiveOutput {
  SetRemainUsersToInactiveResult?: Result;
}

export interface SynchronizeActivityCategories {
  input?: SynchronizeActivityCategoriesInput;
  output?: SynchronizeActivityCategoriesOutput;
}

export interface SynchronizeActivityCategoriesInput {
  userInfoList?: UserInfoList;
}

export interface UserInfoList {
  ActivityCategory?: ActivityCategory[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface ActivityCategory {
  integrationCode?: string;
  upperCategoryIntegrationCode?: string;
  translatedTextWithDescription?: TranslatedTextWithDescription;
  level?: string;
  status?: string;
  isDefault?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface TranslatedTextWithDescription {
  TranslatedText?: TranslatedText[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface TranslatedText {
  languageCode?: string;
  name?: string;
  explanation?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SynchronizeActivityCategoriesOutput {
  SynchronizeActivityCategoriesResult?: SynchronizeActivityCategoriesResult;
}

export interface SynchronizeActivityCategoriesResult {
  Data?: SynchronizeActivityCategoriesResultData;
  ResultType?: string;
  ResultDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SynchronizeActivityCategoriesResultData {
  errors?: Errors;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Errors {
  KeyValuePairOfStringListOfError?: KeyValuePairOfStringListOfError[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface KeyValuePairOfStringListOfError {
  Value?: Value;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Value {
  Error?: Error[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface Error {
  errorCode?: string;
  errorDescription?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SynchronizeActivityUser {
  input?: SynchronizeActivityUserInput;
  output?: SynchronizeActivityUserOutput;
}

export interface SynchronizeActivityUserInput {
  activityCode?: string;
  userCode?: string;
  deletedListOp?: string;
  enforceCapacityControl?: string;
  selfRegistration?: string;
}

export interface SynchronizeActivityUserOutput {
  SynchronizeActivityUserResult?: AddActivityResultClass;
}

export interface SynchronizeActivityUsers {
  input?: SynchronizeActivityUsersInput;
  output?: SynchronizeActivityUsersOutput;
}

export interface SynchronizeActivityUsersInput {
  activityCode?: string;
  userList?: UserList;
  deletedListOp?: string;
  enforceCapacityControl?: string;
  selfRegistration?: string;
}

export interface SynchronizeActivityUsersOutput {
  SynchronizeActivityUsersResult?: AddActivityResultClass;
}

export interface SynchronizeAllUserInfo {
  input?: SynchronizeAllUserInfoInput;
  output?: SynchronizeAllUserInfoOutput;
}

export interface SynchronizeAllUserInfoInput {
  UserInfoList?: GetAllUsersResult;
  editManuelUsers?: boolean;
}

export interface SynchronizeAllUserInfoOutput {
  SynchronizeAllUserInfoResult?: DeleteUserListResultClass;
}

export interface SynchronizeAllUserInfoWithPassiveProperty {
  input?: SynchronizeAllUserInfoWithPassivePropertyInput;
  output?: SynchronizeAllUserInfoWithPassivePropertyOutput;
}

export interface SynchronizeAllUserInfoWithPassivePropertyInput {
  UserInfoList?: GetAllUsersResult;
}

export interface SynchronizeAllUserInfoWithPassivePropertyOutput {
  SynchronizeAllUserInfoWithPassivePropertyResult?: DeleteUserListResultClass;
}

export interface SynchronizeCourseInfo {
  input?: SynchronizeCourseInfoInput;
  output?: SynchronizeCourseInfoOutput;
}

export interface SynchronizeCourseInfoInput {
  CourseInfoList?: GetAllCourseListResult;
}

export interface SynchronizeCourseInfoOutput {
  SynchronizeCourseInfoResult?: SynchronizeCourseInfoResult;
}

export interface SynchronizeCourseInfoResult {
  CourseResult?: AddCourseResultClass[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SynchronizeTeacherInfo {
  input?: SynchronizeTeacherInfoInput;
  output?: SynchronizeTeacherInfoOutput;
}

export interface SynchronizeTeacherInfoInput {
  TeacherInfoList?: TeacherInfoList;
}

export interface TeacherInfoList {
  TeacherInfo?: TeacherInfo[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface TeacherInfo {
  USER_CODE?: string;
  ENOCTA_USER_ID?: string;
  USER_NAME?: string;
  USER_SURNAME?: string;
  PASSWORD?: string;
  LANGUAGE?: string;
  STATUS?: string;
  USER_TYPE?: string;
  FOTOGRAF?: string;
  ADDRESS?: string;
  CITY?: string;
  ENOCTA_CITY_ID?: string;
  DISTRICT?: string;
  ZIP_CODE?: string;
  EMAIL?: string;
  WEBADDRESS?: string;
  TEL1?: string;
  TEL2?: string;
  GSM1?: string;
  GSM2?: string;
  FAX?: string;
  GENDER?: string;
  ENOCTA_GENDER?: string;
  MANAGER?: string;
  ENOCTA_MANAGER_ID?: string;
  BIRTHDAY?: string;
  REGISTER_ID?: string;
  TCK_NO?: string;
  DATE_OF_ENTRY?: string;
  DATE_OF_LEAVE?: string;
  MARITAL_STATUS?: string;
  ENOCTA_MARITAL_STATUS?: string;
  MAIDEN_NAME?: string;
  PLACE_OF_BIRTH?: string;
  ENOCTA_PLACE_OF_BIRTH?: string;
  EDUCATIONAL_STATUS?: string;
  ENOCTA_EDUCATIONAL_STATUS?: string;
  REGISTER_DATE?: string;
  PILOT_SOSYAL?: string;
  GORSEL_YUZDE?: string;
  ISITSEL_YUZDE?: string;
  KINESTETIK_YUZDE?: string;
  PORTAL_PAGE?: string;
  ENOCTA_USER_FEATURES_LIST?: EnoctaUserFeaturesList;
  USER_FEATURES?: UserList;
  userResult?: AddUserResultClass;
  FIRM_CODE?: string;
  SPECIALISATIONS?: string;
  RESUME?: string;
  REFERENCES?: string;
  DESCRIPTION?: string;
  EXTERNAL_INSTRUCTOR?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface SynchronizeTeacherInfoOutput {
  SynchronizeTeacherInfoResult?: DeleteUserListResultClass;
}

export interface SynchronizeUserInfo {
  input?: SynchronizeAllUserInfoWithPassivePropertyInput;
  output?: SynchronizeUserInfoOutput;
}

export interface SynchronizeUserInfoOutput {
  SynchronizeUserInfoResult?: DeleteUserListResultClass;
}

export interface UpdateActivity {
  input?: CreateActivityInput;
  output?: UpdateActivityOutput;
}

export interface UpdateActivityOutput {
  UpdateActivityResult?: AddActivityResultClass;
}

export interface UpdateActivityCode {
  input?: UpdateActivityCodeInput;
  output?: UpdateActivityCodeOutput;
}

export interface UpdateActivityCodeInput {
  oldActivityCode?: string;
  newActivityCode?: string;
}

export interface UpdateActivityCodeOutput {
  UpdateActivityCodeResult?: AddActivityResultClass;
}

export interface UpdateActivityInfoForUser {
  input?: UpdateActivityInfoForUserInput;
  output?: UpdateActivityInfoForUserOutput;
}

export interface UpdateActivityInfoForUserInput {
  userCode?: string;
  activityIntCode?: string;
  score?: string;
  finishStatus?: string;
  successStatus?: string;
  dateCompleted?: string;
}

export interface UpdateActivityInfoForUserOutput {
  UpdateActivityInfoForUserResult?: AddActivityResultClass;
}

export interface UpdateCourse {
  input?: AddCourseInput;
  output?: UpdateCourseOutput;
}

export interface UpdateCourseOutput {
  UpdateCourseResult?: AddCourseResultClass;
}

export interface UpdateCourseComment {
  input?: UpdateCourseCommentInput;
  output?: UpdateCourseCommentOutput;
}

export interface UpdateCourseCommentInput {
  unitIntegrationCode?: string;
  commentCode?: string;
  commentText?: string;
  userCodeWhoMakesUpdate?: string;
}

export interface UpdateCourseCommentOutput {
  UpdateCourseCommentResult?: Result;
}

export interface UpdateCourseStatus {
  input?: UpdateCourseStatusInput;
  output?: UpdateCourseStatusOutput;
}

export interface UpdateCourseStatusInput {
  courseCode?: string;
  status?: string;
}

export interface UpdateCourseStatusOutput {
  UpdateCourseStatusResult?: AddCourseResultClass;
}

export interface UpdateExcuseRecord {
  input?: UpdateExcuseRecordInput;
  output?: UpdateExcuseRecordOutput;
}

export interface UpdateExcuseRecordInput {
  excuseID?: string;
  userCode?: string;
  excuseTypeCode?: string;
  dtStart?: string;
  dtEnd?: string;
}

export interface UpdateExcuseRecordOutput {
  UpdateExcuseRecordResult?: ExcuseRecordResult;
}

export interface UpdateFacility {
  input?: AddFacilityInput;
  output?: UpdateFacilityOutput;
}

export interface UpdateFacilityOutput {
  UpdateFacilityResult?: Result;
}

export interface UpdateFirm {
  input?: AddFirmInput;
  output?: UpdateFirmOutput;
}

export interface UpdateFirmOutput {
  UpdateFirmResult?: Result;
}

export interface UpdateHall {
  input?: AddHallInput;
  output?: UpdateHallOutput;
}

export interface UpdateHallOutput {
  UpdateHallResult?: Result;
}

export interface UpdateKurumsalTubeContent {
  input?: UpdateKurumsalTubeContentInput;
  output?: UpdateKurumsalTubeContentOutput;
}

export interface UpdateKurumsalTubeContentInput {
  content?: FluffyContent;
}

export interface FluffyContent {
  Title?: string;
  ShortDescription?: string;
  ContentTypeCode?: string;
  ContentCategoryCode?: string;
  IconFile?: string;
  IconFileName?: string;
  FileContentAsEmbededCode?: string;
  StartDate?: string;
  EndDate?: string;
  IsFeatured?: string;
  IsImportant?: string;
  CanUserComment?: string;
  CanUserGivePoint?: string;
  LoginViewStatus?: string;
  Status?: string;
  Code?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UpdateKurumsalTubeContentOutput {
  UpdateKurumsalTubeContentResult?: Result;
}

export interface UpdateKurumsalTubeContentCategory {
  input?: UpdateKurumsalTubeContentCategoryInput;
  output?: UpdateKurumsalTubeContentCategoryOutput;
}

export interface UpdateKurumsalTubeContentCategoryInput {
  contentCategoryID?: string;
  name?: Name;
}

export interface UpdateKurumsalTubeContentCategoryOutput {
  UpdateKurumsalTubeContentCategoryResult?: Result;
}

export interface UpdateKurumsalTubeContentComment {
  input?: UpdateKurumsalTubeContentCommentInput;
  output?: UpdateKurumsalTubeContentCommentOutput;
}

export interface UpdateKurumsalTubeContentCommentInput {
  userCode?: string;
  commentID?: string;
  title?: string;
  comment?: string;
}

export interface UpdateKurumsalTubeContentCommentOutput {
  UpdateKurumsalTubeContentCommentResult?: string;
}

export interface UpdateKurumsalTubeContentType {
  input?: UpdateKurumsalTubeContentTypeInput;
  output?: UpdateKurumsalTubeContentTypeOutput;
}

export interface UpdateKurumsalTubeContentTypeInput {
  contentTypeID?: string;
  name?: Name;
  loginViewStatus?: string;
}

export interface UpdateKurumsalTubeContentTypeOutput {
  UpdateKurumsalTubeContentTypeResult?: Result;
}

export interface UpdateQSCompanyLicence {
  input?: UpdateQSCompanyLicenceInput;
  output?: UpdateQSCompanyLicenceOutput;
}

export interface UpdateQSCompanyLicenceInput {
  CustomerID?: string;
  LicenceStartDate?: string;
  LicenceEndDate?: string;
  LicenceNumber?: string;
  LogoID?: string;
}

export interface UpdateQSCompanyLicenceOutput {
  UpdateQSCompanyLicenceResult?: AddLiteQSCompanyResultClass;
}

export interface UpdateSessionInActivity {
  input?: UpdateSessionInActivityInput;
  output?: UpdateSessionInActivityOutput;
}

export interface UpdateSessionInActivityInput {
  activityCode?: string;
  courseCode?: string;
  sessionCode?: string;
  baslangicTarihi?: string;
  bitisTarihi?: string;
  instructorList?: string;
  monitorList?: string;
  hallCode?: string;
  minAttendanceDuration?: string;
}

export interface UpdateSessionInActivityOutput {
  UpdateSessionInActivityResult?: AddActivityResultClass;
}

export interface UpdateSysAdminPassword {
  input?: UpdateSysAdminPasswordInput;
  output?: UpdateSysAdminPasswordOutput;
}

export interface UpdateSysAdminPasswordInput {
  sysAdminCode?: string;
  password?: string;
}

export interface UpdateSysAdminPasswordOutput {
  UpdateSysAdminPasswordResult?: Result;
}

export interface UpdateUnitInfoForUser {
  input?: UpdateUnitInfoForUserInput;
  output?: UpdateUnitInfoForUserOutput;
}

export interface UpdateUnitInfoForUserInput {
  userCode?: string;
  activityIntCode?: string;
  unitIntCode?: string;
  isExam?: string;
  score?: string;
  finishStatus?: string;
  successStatus?: string;
  totalUserAttempts?: string;
  activateRules?: string;
  dateCompleted?: string;
  experienceDuration?: string;
  dateOfActivityCompleted?: string;
}

export interface UpdateUnitInfoForUserOutput {
  UpdateUnitInfoForUserResult?: UpdateUnitInfoForUserResultClass;
}

export interface UpdateUser {
  input?: AddUserInput;
  output?: UpdateUserOutput;
}

export interface UpdateUserOutput {
  UpdateUserResult?: AddUserResultClass;
}

export interface UpdateUserActivitySessionAttendance {
  input?: UpdateUserActivitySessionAttendanceInput;
  output?: UpdateUserActivitySessionAttendanceOutput;
}

export interface UpdateUserActivitySessionAttendanceInput {
  userCode?: string;
  activityIntegrationCode?: string;
  courseIntegrationCode?: string;
  sessionNo?: string;
  attendanceStatus?: string;
}

export interface UpdateUserActivitySessionAttendanceOutput {
  UpdateUserActivitySessionAttendanceResult?: Result;
}

export interface UpdateUserCode {
  input?: UpdateUserCodeInput;
  output?: UpdateUserCodeOutput;
}

export interface UpdateUserCodeInput {
  oldUserCode?: string;
  newUserCode?: string;
}

export interface UpdateUserCodeOutput {
  UpdateUserCodeResult?: AddUserResultClass;
}

export interface UpdateUserInformationSurveyBasicInfo {
  input?: UpdateUserInformationSurveyBasicInfoInput;
  output?: UpdateUserInformationSurveyBasicInfoOutput;
}

export interface UpdateUserInformationSurveyBasicInfoInput {
  surveyID?: string;
  langID?: string;
  name?: string;
  explanation?: string;
  coverLetter?: string;
  lastWord?: string;
  startDate?: string;
  endDate?: string;
}

export interface UpdateUserInformationSurveyBasicInfoOutput {
  UpdateUserInformationSurveyBasicInfoResult?: Result;
}

export interface UpdateUserPassword {
  input?: UpdateUserPasswordInput;
  output?: UpdateUserPasswordOutput;
}

export interface UpdateUserPasswordInput {
  userCode?: string;
  password?: string;
  eepRules?: string;
  sendEmail?: string;
}

export interface UpdateUserPasswordOutput {
  UpdateUserPasswordResult?: AddUserResultClass;
}

export interface UpdateUserPhoto {
  input?: UpdateUserPhotoInput;
  output?: UpdateUserPhotoOutput;
}

export interface UpdateUserPhotoInput {
  userCode?: string;
  file?: string;
}

export interface UpdateUserPhotoOutput {
  UpdateUserPhotoResult?: AddUserResultClass;
}

export interface UpdateUserStatus {
  input?: UpdateUserStatusInput;
  output?: UpdateUserStatusOutput;
}

export interface UpdateUserStatusInput {
  userCode?: string;
  status?: string;
}

export interface UpdateUserStatusOutput {
  UpdateUserStatusResult?: AddUserResultClass;
}

export interface UploadVideoList {
  input?: UploadVideoListInput;
  output?: UploadVideoListOutput;
}

export interface UploadVideoListInput {
  videoList?: VideoList;
}

export interface VideoList {
  VideoItemForCDN?: VideoItemForCDN[];
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface VideoItemForCDN {
  Code?: string;
  Name?: string;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UploadVideoListOutput {
  UploadVideoListResult?: UploadVideoListResult;
}

export interface UploadVideoListResult {
  resultType?: string;
  resultDesc?: string;
  UnUploadVideoCodes?: UserList;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface UserPasswordRemindMail {
  input?: UserPasswordRemindMailInput;
  output?: UserPasswordRemindMailOutput;
}

export interface UserPasswordRemindMailInput {
  email?: string;
}

export interface UserPasswordRemindMailOutput {
  UserPasswordRemindMailResult?: Result;
}

export interface UserScoreKurumsalTubeContent {
  input?: UserScoreKurumsalTubeContentInput;
  output?: UserScoreKurumsalTubeContentOutput;
}

export interface UserScoreKurumsalTubeContentInput {
  userCode?: string;
  contentID?: string;
  contentScore?: string;
}

export interface UserScoreKurumsalTubeContentOutput {
  UserScoreKurumsalTubeContentResult?: string;
}

export interface UserWatchKurumsalTubeContent {
  input?: UserWatchKurumsalTubeContentInput;
  output?: UserWatchKurumsalTubeContentOutput;
}

export interface UserWatchKurumsalTubeContentInput {
  userCode?: string;
  contentID?: string;
}

export interface UserWatchKurumsalTubeContentOutput {
  UserWatchKurumsalTubeContentResult?: string;
}

export interface VerifyCertificate {
  input?: VerifyCertificateInput;
  output?: VerifyCertificateOutput;
}

export interface VerifyCertificateInput {
  uniqueCertificateCode?: string;
}

export interface VerifyCertificateOutput {
  VerifyCertificateResult?: VerifyCertificateResult;
}

export interface VerifyCertificateResult {
  CERTID?: string;
  ISCERTIFICATE?: string;
  USER_RESULT?: string;
  USERID?: string;
  COM_URL?: string;
  USER_NAME_SURNAME?: string;
  CERTIFICATE_NAME?: string;
  CERTIFICATE_DATE?: string;
  ACTIVITY_NAME?: string;
  VALIDATE_DATE?: string;
  verifyCertificateResult?: Result;
  targetNSAlias?: string;
  targetNamespace?: string;
}

export interface IsActivityExists {
  input?: IsActivityExistsInput;
  output?: IsActivityExistsOutput;
}

export interface IsActivityExistsInput {
  activityEntCode?: string;
}

export interface IsActivityExistsOutput {
  isActivityExistsResult?: string;
}
