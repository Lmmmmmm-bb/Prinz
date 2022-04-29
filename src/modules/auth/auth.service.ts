import axios from 'axios';
import { Injectable } from '@nestjs/common';
import * as qs from 'qs';
import { GitHubOAuthConfig } from '../../configs/auth.config';
import { GitHubOAuthUrl, GitHubUserInfoUrl } from './auth.config';

@Injectable()
export class AuthService {
  async getGitHubAccessToken(code: string) {
    const { data: oAuthData } = await axios.post(
      GitHubOAuthUrl,
      {},
      {
        params: {
          client_id: GitHubOAuthConfig.clientID,
          client_secret: GitHubOAuthConfig.clientSecret,
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
}
