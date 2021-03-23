import React from 'react';
import Head from 'next/head';

import Header from '../header';
import { MemoProvider } from '../../lib/activity/memo';

type LayoutProps = {
  memo?: any;
  loading: boolean;
  children: React.ReactNode;
};

const ActivitiesLayout: React.FunctionComponent<LayoutProps> = ({ memo, loading = false, children }: LayoutProps) => (
  <MemoProvider value={{ memo, loading }}>
    <div className="container">{children}</div>

    <style jsx>{`
      .container {
        max-width: 60rem;
        margin: 1.5rem auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, 'Segoe UI';
        height: 100%;
      }
    `}</style>
  </MemoProvider>
);

export default ActivitiesLayout;
