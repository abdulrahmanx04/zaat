import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Length,
  IsNotEmpty,
} from 'class-validator';
 
export class RegisterDto {

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  fullName: string;
 
  @IsEmail()
  @MaxLength(150)
  email: string;
 
  @IsString()
  @MaxLength(13)
  phone: string;
 
  @MinLength(8)
  @MaxLength(50)
  password: string;
  
}


export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}
export class EmailDto {
    @IsEmail()
    email: string
}

export class PasswordDto {
    @IsString()
    @Length(8,72)
    password: string
}

export class ChangePasswordDto {
    @IsString()
    @Length(8,72)
    currentPassword: string

    @IsString()
    @Length(8,72)
    newPassword: string
}

