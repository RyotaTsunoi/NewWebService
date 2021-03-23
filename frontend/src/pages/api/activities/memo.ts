import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '../../../../lib/auth0';

export default async function memo(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { accessToken } = await auth0.getSession(req);
    console.log(accessToken);
    // const r = await fetch(getServerSetting('BACKEND_API_HOST', 'http://localhost:3000'), {
    //   method: 'GET',
    //   headers: { Authorization: `Bearer:${accessToken}` },
    //   mode: 'cors'
    // });
    res.statusMessage = accessToken;
    res.send({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
