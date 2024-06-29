export class LmsCreateUserDto {
  user_code: string;
  first_name?: string;
  last_name?: string;
  email: string;
  lang_code?: string;
  is_active?: number;
}
