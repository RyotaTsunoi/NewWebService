import React from 'react';
import Header from '../components/header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LogonHeader = Template.bind({});
LogonHeader.args = {
  userSession: {
    user: 'User',
  },
};

export const LogoutHeader = Template.bind({});
LogoutHeader.args = {
  userSession: null,
};
