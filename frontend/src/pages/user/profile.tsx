import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import Layout from '../../../components/Layout';
import { RootState } from '../../redux/rootReducer';

export const Profile: FC = () => {
  const { userSession, loading } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <h1>Profile</h1>

      {loading && <p>Loading profile...</p>}

      {!loading && userSession && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(userSession.user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
};

export default Profile;
