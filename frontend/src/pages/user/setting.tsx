import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import Layout from '../../../components/Layout';
import { RootState } from '../../redux/rootReducer';

export const Setting: FC = () => {
  const { userSession, loading } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <h1>Setting</h1>

      {loading && <p>Loading Setting...</p>}

      {!loading && userSession && (
        <>
          <p>Setting:</p>
          <pre>{JSON.stringify(userSession.user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
};

export default Setting;
