import React from 'react';

import Layout from '../../components/Layout';
import TextMobileStepper from '../../components/home/carouselImages';
import { useFetchUser } from '../../lib/user';

export default function Home(): React.ReactElement {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>ここがランディングページになるはず。</h1>
      <TextMobileStepper />
      {!loading && !user && (
        <>
          <p>This page is landing page.</p>
        </>
      )}
    </Layout>
  );
}
