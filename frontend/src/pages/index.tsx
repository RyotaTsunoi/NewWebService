import React from 'react';

import Layout from '../../components/Layout';
import TextMobileStepper from '../../components/home/carouselImages';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

export default function Home(): React.ReactElement {
  const { userSession, loading, error } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <h1>ここがランディングページになるはず。</h1>
      <TextMobileStepper />
      {!loading && !userSession && (
        <>
          <p>This page is landing page.</p>
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
