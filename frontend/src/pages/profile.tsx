import React from 'react';

import Layout from '../../components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

export default function Profile(): React.ReactElement {
  const { userSession, loading, error } = useSelector((state: RootState) => state.user);

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
      {error && (
        <>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
