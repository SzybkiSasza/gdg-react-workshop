import { Typography, withWidth } from '@material-ui/core';
import { WithWidthProps } from '@material-ui/core/withWidth';
import * as React from 'react';
import { FunctionComponent } from 'react';

import droids from './droids.gif';
import './NotFound.css';

const NotFoundLayout: FunctionComponent<WithWidthProps> = ({ width }) => {
  const isSmallScreen = width === 'xs';

  return (
    <div className="NotFound">
      <Typography className="NotFound__title" paragraph={ true } variant={ isSmallScreen ? 'h3' : 'h1' }>
        404
      </Typography>
      <Typography className="NotFound__title" paragraph={ true } variant={ isSmallScreen ? 'h4' : 'h2' }>
        These are not the droids
      </Typography>
      <div className="NotFound__image-wrapper">
        <img src={ droids } alt="Obi Wan"/>
      </div>
      <Typography className="NotFound__title" paragraph={ true } variant={ isSmallScreen ? 'h4' : 'h2' }>
        You&apos;re looking for
      </Typography>
    </div>
  );

};

export const NotFound = withWidth()(NotFoundLayout);
