import * as React from 'react';
import { ComponentProps } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppBar, Tabs, Toolbar, Typography } from '@material-ui/core';
import { Home, PhotoLibrary } from '@material-ui/icons';

import LinkTab from '../LinkTab/LinkTab';
import './Header.css';

interface HeaderProps extends RouteComponentProps, ComponentProps<any> {
}

const tabLinks = ['/', '/browser'];

class Header extends React.Component<HeaderProps> {
  get linkValue() {
    const pathName = this.props.history.location.pathname;

    if (tabLinks.indexOf(pathName) !== -1) {
      return pathName;
    }

    return tabLinks[0];
  }

  public render(): JSX.Element {
    return (
      <AppBar position='static'>
        <Toolbar className='Header'>
          <Typography className='Header__title' variant='h5' color='inherit'>
            React Workshop
          </Typography>

          <nav className='Header__tabs'>
            <Tabs className='Header__tabs-wrapper'
                  fullWidth={true}
                  value={this.linkValue}>
              <LinkTab icon={<Home/>} value={tabLinks[0]}/>
              <LinkTab icon={<PhotoLibrary/>} value={tabLinks[1]}/>
            </Tabs>
          </nav>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header);
