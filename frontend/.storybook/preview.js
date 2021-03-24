import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from '../src/redux/store';
import theme from '../src/styles/theme';
import { muiTheme } from 'storybook-addon-material-ui';

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </Provider>
  ),
  muiTheme(),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
