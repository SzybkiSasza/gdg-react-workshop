import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { NavButton } from '../NavButton/NavButton';

import './Header.css';

// We pass proper information about interface in "extends" to allow for strongly-typed props
export default class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <AppBar position='static'>
        <Toolbar className='Header'>
          <Typography className='Header__title' variant='h5' color='inherit'>
            GDG React Workshop
          </Typography>

          <nav className='Header__buttons'>
            <NavButton to={'/'}>
              Home
            </NavButton>
            <NavButton to={'/browser'}>
              Image Browser
            </NavButton>
          </nav>

          <div className='Header__spacer'/>
        </Toolbar>
      </AppBar>
    )
  }
}
