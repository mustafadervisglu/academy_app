import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class UpdatePasswordResetTokenDto {
  @IsNotEmpty({ message: 'Reset token hash is required' })
  @IsString({ message: 'Reset token hash must be a string' })
  resetTokenHash: string;

  @IsNotEmpty({ message: 'Reset token expiration date is required' })
  @IsDate({ message: 'Reset token expiration date must be a valid date' })
  resetTokenExpires: Date;

  @IsOptional()
  @IsString({ message: 'New password must be a string' })
  newPassword?: string;
}
