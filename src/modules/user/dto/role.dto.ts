import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RoleDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the role',
  })
  @IsNumber()
  id: string;

  @ApiProperty({
    example: 'Administrator',
    description: 'The name of the role',
  })
  @IsString()
  roleName: string;
}
