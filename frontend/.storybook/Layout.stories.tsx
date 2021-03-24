import React from 'react';
import Layout from '../components/Layout';

export default {
  title: 'Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const DisplayLayout = Template.bind({});
DisplayLayout.args = {
  children: <div>This content is render.</div>,
};
