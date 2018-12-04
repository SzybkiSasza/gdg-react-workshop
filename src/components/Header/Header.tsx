import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppBar, Tabs, Toolbar, Typography } from '@material-ui/core';
import { Home, PhotoLibrary } from '@material-ui/icons';

import LinkTab from '../LinkTab/LinkTab';

import { ComponentProps } from 'react';
import './Header.css';

interface HeaderProps extends RouteComponentProps, ComponentProps<any> {}

class Header extends React.Component<HeaderProps> {
  public render(): JSX.Element {
    return (
      <AppBar position='static'>
        <Toolbar className='Header'>
          <Typography className='Header__title' variant='h5' color='inherit'>
            GDG React Workshop
          </Typography>

          <nav className='Header__tabs'>
            <Tabs className='Header__tabs-wrapper'
                  fullWidth={true}
                  value={this.props.history.location.pathname}>
              <LinkTab icon={<Home/>} value='/'/>
              <LinkTab icon={<PhotoLibrary/>} value='/browser'/>
            </Tabs>
          </nav>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header);
