import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../../src/pages/index';
import App from '../../src/pages/_app';
import store from '../../src/redux/store';

// テスト実行後にDOMをunmount, cleanupします
afterEach(cleanup);

describe('Landing page test', () => {
  it('SampleTest', () => {
    render(<App Component={Home} pageProps={''} />);
    screen.debug();
  });
});
