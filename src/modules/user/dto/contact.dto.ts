import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class ContactInfoDto {
  @ApiProperty({
    example: 'alternate@example.com',
    description: 'Alternative email address',
  })
  @IsEmail()
  @IsOptional()
  alternativeEmail: string;

  @ApiProperty({
    example: '123 Main St, Anytown',
    description: 'Physical address',
  })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({
    example: '+123456789',
    description: 'Phone number',
  })
  @IsPhoneNumber()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty({
    example: '+987654321',
    description: 'Landline number',
  })
  @IsString()
  @IsOptional()
  landline: string;

  @ApiProperty({
    example: '@twitter_handle',
    description: 'Twitter handle',
  })
  @IsString()
  @IsOptional()
  twitterHandle: string;

  @ApiProperty({
    example: 'facebook.com/your_profile',
    description: 'Facebook profile URL',
  })
  @IsString()
  @IsOptional()
  facebookProfile: string;

  @ApiProperty({
    example: 'linkedin.com/in/your_profile',
    description: 'LinkedIn profile URL',
  })
  @IsString()
  @IsOptional()
  linkedinProfile: string;

  @ApiProperty({
    example: '12345',
    description: 'Postal code',
  })
  @IsString()
  @IsOptional()
  postalCode: string;

  @ApiProperty({
    example: 'Anytown',
    description: 'City name',
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    example: 'Any District',
    description: 'District name',
  })
  @IsString()
  @IsOptional()
  district: string;
}
