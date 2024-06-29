import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsArray,
} from 'class-validator';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Role } from 'src/modules/auth/entities/role.entity';
import { ContactInfoDto } from 'src/modules/user/dto/contact.dto';
import { JobTitle } from 'src/modules/user/entities/job-title.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    example: 'example@example.com',
    description: 'Email address',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'John', description: 'First name' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe', description: 'Last name' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({ example: true, description: 'status' })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiPropertyOptional({
    example: {
      id: '179891ce-fcd6-456f-88a8-ae4ad2f6fd91',
      titleName: 'Bölge Koordinatörü',
    },
    description: 'Job title',
  })
  @IsOptional()
  jobTitle?: JobTitle;

  @ApiPropertyOptional({
    example: ['088c5d22-eaf6-425c-9dda-9fdaf09e454f'],
    description: 'Branch ID',
  })
  @IsOptional()
  @IsArray()
  branch?: Branch[];

  @ApiPropertyOptional({
    example: ['088c5d22-eaf6-425c-9dda-9fdaf09e454f'],
    description: 'Role ID',
  })
  @IsOptional()
  @IsArray()
  userRoles?: Role[];

  @ApiPropertyOptional({ description: 'Contact information' })
  @IsOptional()
  contactInfo?: ContactInfoDto;
}
