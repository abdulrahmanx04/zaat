import { ChangePasswordDto, EmailDto, LoginDto, PasswordDto, RegisterDto } from './dto/create-auth.dto';
import { UserData } from 'src/common/interfaces/all.interfaces';
import { AuthHelperService } from './auth.service.helper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private authServiceHelper: AuthHelperService
  ) { }
  async register(dto: RegisterDto): Promise<{token: string}> {
    const token= await this.authServiceHelper.register(dto)
    return{ token }
  }

  async verifyEmail(token: string): Promise<{message: string}> {
    await this.authServiceHelper.verifyEmail(token)

    return { message: 'Email verified successfully' }

  }

  async resendVerification(dto: EmailDto): Promise<{message: string}> {
    await this.authServiceHelper.resendVerification(dto)
    return { message: 'Email verification sent successfully' }
  }

  async login(dto: LoginDto): Promise<{token: string}> {
    const token= await this.authServiceHelper.login(dto)
    return { token }
  }

  async changePassword(dto: ChangePasswordDto, userData: UserData): Promise<{message: string}> {
    await this.authServiceHelper.changePassword(dto,userData)
    return {message: 'Password changed successfully'}
  }

  async forgotPassword(dto: EmailDto): Promise<{message: string}> {
    await this.authServiceHelper.forgotPassword(dto)
    return { message: 'If the email exists, a reset password link has been sent.' }
  }

  async resetPassword(token: string, dto: PasswordDto): Promise<{message: string}> {
    await this.authServiceHelper.resetPassword(token,dto)
    return { message: 'Password reset successfully, please login with your new password' }
  }

}