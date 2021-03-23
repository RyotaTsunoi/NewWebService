import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../modules/userModule';
import { RootState } from '../src/redux/rootReducer';

import Header from './header';
import { UserProvider } from '../lib/user';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const { userSession, loading, error } = useSelector((state: RootState) => state.user);
  console.error(error);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserProvider value={{ user: userSession?.user, loading }}>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header />

      <main>
        <div className="container">{children}</div>
      </main>

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
    </UserProvider>
  );
};

export default Layout;
