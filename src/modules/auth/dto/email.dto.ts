import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({
    example: 'user@example.com',
    description: "User's email address",
  })
  @IsString()
  @IsNotEmpty({ message: 'Email address is required' })
  email: string;
}
