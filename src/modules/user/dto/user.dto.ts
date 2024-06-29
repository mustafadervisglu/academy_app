import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  MinLength,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ example: '12345678911', description: 'Tckn' })
  @IsString()
  @IsNotEmpty()
  tckn: string;

  @ApiProperty({ example: 'user@example.com', description: 'E-posta adresi' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'John', description: 'Kullanıcının adı' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Kullanıcının soyadı' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: true, description: 'Hesabın aktif/pasif durumu' })
  @IsBoolean()
  status: boolean;

  @ApiProperty({ example: '1', description: 'Görev ID' })
  @IsOptional()
  jobTitleId: string;

  @ApiProperty({ example: ['1'], description: 'Branş IDleri' })
  @IsOptional()
  @IsArray()
  branchIds: string[];

  @ApiProperty({ example: ['1'], description: 'Rol IDleri' })
  @IsOptional()
  @IsArray()
  roleIds: string[];

  @ApiProperty({
    example: 'alternate@example.com',
    description: 'Alternatif e-posta adresi',
  })
  @IsEmail()
  @IsOptional()
  alternativeEmail: string;

  @ApiProperty({ example: '123 Main St', description: 'Adres' })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    example: '+905551234567',
    description: 'Cep telefonu numarası',
  })
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty({
    example: '+902123456789',
    description: 'Sabit telefon numarası',
  })
  @IsString()
  @IsOptional()
  landline: string;

  @ApiProperty({
    example: '@twitter_handle',
    description: 'Twitter kullanıcı adı',
  })
  @IsString()
  @IsOptional()
  twitterHandle: string;

  @ApiProperty({
    example: 'facebook.com/your_profile',
    description: 'Facebook profil URL',
  })
  @IsString()
  @IsOptional()
  facebookProfile: string;

  @ApiProperty({
    example: 'linkedin.com/in/your_profile',
    description: 'LinkedIn profil URL',
  })
  @IsString()
  @IsOptional()
  linkedinProfile: string;

  @ApiProperty({ example: '12345', description: 'Posta kodu' })
  @IsString()
  @IsOptional()
  postalCode: string;

  @ApiProperty({ example: 'İstanbul', description: 'Şehir' })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({ example: 'Beşiktaş', description: 'İlçe' })
  @IsString()
  @IsOptional()
  district: string;
}
