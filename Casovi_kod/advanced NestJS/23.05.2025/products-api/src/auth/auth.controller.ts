import {
  Body,
  Controller,
  Head,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credentials.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userData: CreateUserDto) {
    return this.authService.registerUser(userData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginUser(@Body() credentials: CredentialsDto, @Res() res: Response) {
    const { user, token } = await this.authService.loginUser(credentials);

    res.set('access-token', token);
    res.set('refresh-token', token);

    res.json(user);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("refresh-token")
  async refreshAccessToken(@Res() res: Response, @Headers("refresh-token") refreshToken: string){
    const {token} = await this.authService.refreshAccessToken(refreshToken);
    res.set("access-token", token);
    res.sendStatus(HttpStatus.NO_CONTENT);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("logout")
  logoutUser(@Headers("refresh-token") refreshToken: string){
    return this.authService.logoutUser(refreshToken);
  }
}
