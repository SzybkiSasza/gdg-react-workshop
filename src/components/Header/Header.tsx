import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibIcon from '@material-ui/icons/PhotoLibrary';

import LinkTab from '../LinkTab/LinkTab';

import './Header.css';

class Header extends React.Component<RouteComponentProps> {
  public render(): JSX.Element {
    return (
      <AppBar position='static'>
        <Toolbar className='Header'>
          <Typography className='Header__title' variant='h5' color='inherit'>
            GDG React Workshop
          </Typography>

          <nav className='Header__tabs'>
            <Tabs value={this.props.history.location.pathname}>
              <LinkTab icon={ <HomeIcon/> } label='Home' value='/'/>
              <LinkTab icon={ <PhotoLibIcon/> } label='Image browser' value='/browser'/>
            </Tabs>
          </nav>

          <div className='Header__spacer'/>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header);
