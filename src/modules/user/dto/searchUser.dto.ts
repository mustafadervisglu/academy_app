import { IsOptional, IsString, IsBoolean, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class SearchUsersDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'johndoe@example.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @ApiProperty({
    description: 'The status of the user account (active or not)',
    example: true,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  @IsBoolean()
  readonly status?: boolean;

  @ApiProperty({
    description: 'The city where the user is located',
    example: 'Istanbul',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly city?: string;

  @ApiProperty({
    description: 'The name of the job title the user holds',
    example: 'Software Engineer',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly jobTitleName?: string;

  @ApiProperty({
    description: 'The name of the branch the user belongs to',
    example: 'Headquarters',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly branchName?: string;
}
