import React from 'react';
import classNames from 'classnames';

import './Title.css';

export const Title = ({children, className}) => (
  <h2 className={classNames('title', className)}>{children}</h2>
);