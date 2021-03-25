import React from 'react';

import { Button } from '../../components/atoms/Button';

export default {
  title: 'Button',
};

const Template = (args) => <Button {...args} />;
export const PrimaryTextButton = Template.bind({});
PrimaryTextButton.args = {
  props: {
    color: 'primary',
  },
  children: 'TextButton',
};
export const PrimaryContainedButton = Template.bind({});
PrimaryContainedButton.args = {
  props: {
    color: 'primary',
    variant: 'contained',
  },
  children: 'ContainedButton',
};
export const PrimaryOutlinedButton = Template.bind({});
PrimaryOutlinedButton.args = {
  props: {
    color: 'primary',
    variant: 'outlined',
  },
  children: 'OutlinedButon',
};
