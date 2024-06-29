import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: "User's email address",
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'Password123',
    description: "User's password",
  })
  @IsString()
  password: string;
}
