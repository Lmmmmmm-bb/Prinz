import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as qs from 'qs';
import { Repository } from 'typeorm';
import { getGitHubOAuthConfig } from '../../configs/auth.config';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { GitHubOAuthUrl, GitHubUserInfoUrl } from './auth.config';
import { UserAuth } from './entities/user-auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserAuth)
    private readonly userAuthRepository: Repository<UserAuth>,
    private readonly userService: UserService,
  ) {}

  // GitHub OAuth
  private async getGithubAccessToken(code: string) {
    const { clientID, clientSecret } = getGitHubOAuthConfig();
    const { data: oAuthData } = await axios.post(
      GitHubOAuthUrl,
      {},
      {
        params: {
          client_id: clientID,
          client_secret: clientSecret,
          code,
        },
      },
    );
    const { access_token: accessToken, token_type: tokenType } =
      qs.parse(oAuthData);

    const { data: userInfo } = await axios.get(GitHubUserInfoUrl, {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    });

    return userInfo;
  }

  async signGithubJwt(code: string) {
    const {
      id,
      name: nickname,
      avatar_url: avatar,
      location: area,
      bio: signature,
    } = await this.getGithubAccessToken(code);

    let user;
    const userRelate = await this.userAuthRepository.findOne(id);
    if (!userRelate) {
      user = await this.userService.create({
        nickname,
        avatar,
        area,
        signature,
      });
    } else {
      user = await this.userService.findUserById(userRelate.userId);
    }

    return this.jwtService.sign(user);
  }

  transform(token: string): User {
    try {
      return this.jwtService.verify(token);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
