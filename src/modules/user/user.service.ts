import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as soap from 'soap';
import * as crypto from 'crypto';
import { EmailDto } from 'src/modules/auth/dto/email.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';
import { UserRole } from 'src/modules/user/entities/user-role.entity';
import { UpdatePasswordResetTokenDto } from 'src/modules/auth/dto/updatePasswordResetToken.dto';
import { PaginationDto } from 'src/modules/user/dto/pagination.dto';
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { JobTitle } from 'src/modules/user/entities/job-title.entity';
import { ContactInfo } from 'src/modules/user/entities/contact.entity';
import { Role } from 'src/modules/auth/entities/role.entity';
import { SearchUsersDto } from 'src/modules/user/dto/searchUser.dto';
import { MailService } from 'src/modules/mail/mail.service';
import { UserBranch } from 'src/modules/user/entities/user-branch.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Branch) private branchRepository: Repository<Branch>,
    @InjectRepository(JobTitle)
    private jobTitleRepository: Repository<JobTitle>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(ContactInfo)
    private contactInfoRepository: Repository<ContactInfo>,
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
    @InjectRepository(UserBranch)
    private userBranchRepository: Repository<UserBranch>,
    private readonly mailService: MailService,
  ) {}

  private readonly url =
    'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL';

  async findOneByEmail(emailDto: EmailDto): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email: emailDto.email },
      });
      if (!user) throw new NotFoundException('Email not found');
      return user;
    } catch (e) {
      throw new NotFoundException('Email not found');
    }
  }

  async findByUsername(username: string): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: { username: username },
        relations: [
          'sessionTokens',
          'contactInfo',
          'branch',
          'userRoles.role',
          'jobTitle',
        ],
      });
      if (!user) throw new NotFoundException('Username not found');
      return user;
    } catch (e) {
      throw new NotFoundException('Username not found');
    }
  }

  async checkAuth(loginInfos: LoginDto): Promise<User> {
    const user: User = await this.usersRepository
      .createQueryBuilder()
      .where('username = :username OR email = :username', {
        username: loginInfos.username,
      })
      .getOne();

    if (user && (await bcrypt.compare(loginInfos.password, user.password))) {
      return user;
    }
    return null;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { email, jobTitleId, branchIds, roleIds, ...contactDetails } =
        createUserDto;

      const userExists: User = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (userExists) {
        throw new UnauthorizedException('User already exists');
      }

      const newUser = this.usersRepository.create(createUserDto);

      const randomPassword = this.generateRandomPassword();
      const salt = await bcrypt.genSalt();
      newUser.salt = salt;
      newUser.password = await bcrypt.hash(randomPassword, salt);

      newUser.username = createUserDto.email;

      const contactInfo = this.contactInfoRepository.create(createUserDto);

      newUser.contactInfo = await this.contactInfoRepository.save(contactInfo);

      if (createUserDto.jobTitleId) {
        newUser.jobTitle = await this.jobTitleRepository.findOne({
          where: { id: createUserDto.jobTitleId },
        });
      }
      const savedUser: User = await this.usersRepository.save(newUser);

      if (createUserDto.branchIds && createUserDto.branchIds.length > 0) {
        const userBranches = [];
        for (const branchId of createUserDto.branchIds) {
          const branch: Branch = await this.branchRepository.findOne({
            where: { id: branchId },
          });
          if (branch) {
            const userBranch = new UserBranch();
            userBranch.user = savedUser;
            userBranch.branch = branch;
            userBranches.push(userBranch);
          }
        }
        await this.userBranchRepository.save(userBranches);
      }

      if (createUserDto.roleIds && createUserDto.roleIds.length > 0) {
        const userRoles = [];
        for (const roleId of createUserDto.roleIds) {
          const role: Role = await this.roleRepository.findOne({
            where: { id: roleId },
          });
          if (role) {
            const userRole = new UserRole();
            userRole.user = savedUser;
            userRole.role = role;
            userRoles.push(userRole);
          }
        }
        await this.userRoleRepository.save(userRoles);
      }

      await this.mailService.sendWelcomeEmail(newUser, randomPassword);

      return savedUser;
    } catch (e) {
      console.log(e);

      throw e;
    }
  }

  async updatePasswordResetToken(
    userId: string,
    updateData: UpdatePasswordResetTokenDto,
  ): Promise<void> {
    try {
      const user: User = await this.usersRepository.findOne({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      await this.usersRepository.update(userId, updateData);
    } catch (e) {
      throw new NotFoundException('User not founnd');
    }
  }

  async findOneByResetTokenHash(resetTokenHash: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { resetTokenHash: resetTokenHash },
    });
  }

  async deleteUser(userId: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: { id: userId },
      relations: [
        'sessionTokens',
        'contactInfo',
        'branch',
        'userRoles.role',
        'jobTitle',
      ],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return await this.usersRepository.softRemove(user);
  }

  async findOneWithRelations(
    userId: string,
    relations: string[],
  ): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: relations,
    });
  }

  async validateTckn(
    tckn: string,
    name: string,
    lastName: string,
    birthYear: number,
  ): Promise<boolean> {
    const client: soap.Client = await soap.createClientAsync(this.url);
    const result = await client.TCKimlikNoDogrulaAsync({
      TCKimlikNo: tckn,
      Ad: name,
      Soyad: lastName,
      DogumYili: birthYear,
    });
    return result[0].TCKimlikNoDogrulaResult;
  }

  generateRandomPassword() {
    return crypto.randomBytes(16).toString('hex');
  }

  async getAllUser(paginationDto: PaginationDto): Promise<User[]> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    return await this.usersRepository.find({
      relations: [
        'sessionTokens',
        'contactInfo',
        'branch',
        'userRoles.role',
        'jobTitle',
        'events',
      ],
      skip: offset,
      take: limit,
    });
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({
        where: { id: userId },
        relations: [
          'sessionTokens',
          'contactInfo',
          'branch',
          'userRoles.role',
          'jobTitle',
          'events',
        ],
      });

      let { contactInfo, ...rest } = updateUserDto;
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }

      if (updateUserDto.jobTitle.id) {
        user.jobTitle = await this.jobTitleRepository.findOne({
          where: { id: updateUserDto.jobTitle.id },
        });
      }

      if (contactInfo && Object.keys(contactInfo).length > 0) {
        await this.contactInfoRepository.update(
          {
            id: user.contactInfo.id,
          },
          {
            ...contactInfo,
          },
        );
      }
      await this.usersRepository.update(
        {
          id: userId,
        },
        {
          ...rest,
        },
      );
      return await this.usersRepository.findOne({
        where: { id: userId },
        relations: [
          'sessionTokens',
          'contactInfo',
          'branch',
          'userRoles.role',
          'jobTitle',
          'events',
        ],
      });
    } catch (e) {
      throw e;
    }
  }

  async searchUser(
    search: SearchUsersDto,
    paginationDto: PaginationDto,
  ): Promise<User[]> {
    const { limit, page } = paginationDto;
    const offset = (page - 1) * limit;
    const { email, firstName, lastName, status, city, jobTitleName } = search;

    const queryBuilder = this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.contactInfo', 'contactInfo')
      .leftJoinAndSelect('user.userBranches', 'userBranch') // User ile UserBranch arasındaki ilişkiyi kullan
      .leftJoinAndSelect('userBranch.branch', 'branch')
      .leftJoinAndSelect('user.userRoles', 'userRoles')
      .leftJoinAndSelect('userRoles.role', 'role')
      .leftJoinAndSelect('user.jobTitle', 'jobTitle')
      .select([
        'user.id',
        'user.email',
        'user.firstName',
        'user.lastName',
        'user.status',
        'contactInfo.city',
        'jobTitle.titleName',
      ])
      .skip(offset)
      .take(limit);

    if (email)
      queryBuilder.andWhere('user.email LIKE :email', { email: `%${email}%` });
    if (firstName)
      queryBuilder.andWhere('user.firstName LIKE :firstName', {
        firstName: `%${firstName}%`,
      });
    if (lastName)
      queryBuilder.andWhere('user.lastName LIKE :lastName', {
        lastName: `%${lastName}%`,
      });
    if (status !== undefined)
      queryBuilder.andWhere('user.status = :status', { status });
    if (city)
      queryBuilder.andWhere('contactInfo.city LIKE :city', {
        city: `%${city}%`,
      });
    if (jobTitleName)
      queryBuilder.andWhere('jobTitle.titleName LIKE :jobTitleName', {
        jobTitleName: `%${jobTitleName}%`,
      });

    return await queryBuilder.getMany();
  }
}
