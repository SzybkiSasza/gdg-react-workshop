import { Typography } from '@material-ui/core';
import * as React from 'react';

import droids from './droids.gif';
import './NotFound.css';

export default class NotFound extends React.Component {
  public render(): JSX.Element {
    return (
        <div className='NotFound'>
          <Typography className='NotFound__title' paragraph={true} variant='h1'>
            404
          </Typography>
          <Typography className='NotFound__title' paragraph={true} variant='h2'>
            These are not the droids
          </Typography>
          <div className='NotFound__image-wrapper'>
            <img src={droids} alt='Obi Wan'/>
          </div>
          <Typography className='NotFound__title' paragraph={true} variant='h2'>
            You're looking for
          </Typography>
        </div>
    );
  }
}
