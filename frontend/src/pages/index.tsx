import React from 'react';

import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import TextMobileStepper from '../../components/home/carouselImages';
import { RootState } from '../redux/rootReducer';

export default function Home(): React.ReactElement {
  const { userSession, loading } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <h1>ここがランディングページになるはず。</h1>
      <TextMobileStepper />
      {!loading && !userSession && (
        <>
          <p>This page is landing page.</p>
        </>
      )}
    </Layout>
  );
}
