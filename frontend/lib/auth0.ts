import { initAuth0 } from '@auth0/nextjs-auth0';
import { getServerSetting } from './utils/getServerSetting';

export default initAuth0({
  clientId: getServerSetting('AUTH0_CLIENT_ID'),
  clientSecret: getServerSetting('AUTH0_CLIENT_SECRET'),
  scope: 'openid profile email',
  domain: getServerSetting('AUTH0_DOMAIN'),
  redirectUri: getServerSetting('REDIRECT_URI', 'http://localhost:4200/api/callback'),
  postLogoutRedirectUri: getServerSetting('POST_LOGOUT_REDIRECT_URI', 'http://localhost:4200/'),
  audience: getServerSetting('AUTH0_AUDIENCE_URL', 'http://localhost:3000'),
  session: {
    cookieSecret: getServerSetting('SESSION_COOKIE_SECRET'),
    cookieLifetime: 7200,
    storeIdToken: true,
    storeRefreshToken: true,
    storeAccessToken: true
  }
});
