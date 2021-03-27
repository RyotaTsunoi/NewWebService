import React, { FC } from 'react';
import { Button as MButton } from '@material-ui/core';

type Props = {
  props: Record<string, unknown>;
  children: React.ReactNode;
};

export const Button: FC<Props> = ({ props, children }) => <MButton {...props}>{children}</MButton>;

