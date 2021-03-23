import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '../../../../lib/auth0';

export default async function memo(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const userSession = await auth0.getSession(req);
    res.json(userSession);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
