import React from 'react';

import ActivitiesLayout from '../../../components/activities/ActivitiesLayout';
import Layout from '../../../components/Layout';
import { useFetchMemo } from '../../../lib/activity/memo';
import { useFetchUser } from '../../../lib/user';

export default function Home(): React.ReactElement {
  const { memo, loading } = useFetchMemo();
  const { user, loadingUser } = useFetchUser();
  console.log(user, 'in activity');

  return (
    <Layout user={user} loading={loadingUser}>
      <ActivitiesLayout memo={memo} loading={loading}>
        <h1>ここがアクティビティ一覧になるはず。</h1>
        {!loading && !memo?.Error ? (
          <>
            <p>HelloActivities</p>
            <pre>{JSON.stringify(memo, null, 2)}</pre>
          </>
        ) : (
          <>
            <p>AuthError</p>
            <pre>{JSON.stringify(memo, null, 2)}</pre>
          </>
        )}
      </ActivitiesLayout>
    </Layout>
  );
}
