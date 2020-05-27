import { AppBar, Tabs, Toolbar, Typography } from '@material-ui/core';
import { Home, PhotoLibrary } from '@material-ui/icons';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { LinkTab } from '../LinkTab/LinkTab';
import './Header.css';

const tabLinks = [
  '/',
  '/browser'
];

interface HeaderProps extends RouteComponentProps, HTMLAttributes<HTMLDivElement> {
}

const HeaderComponent: FunctionComponent<HeaderProps> = ({ location }) => {
  const linkValue = useMemo(
    () => {
      const pathName = location.pathname;

      if (tabLinks.indexOf(pathName) !== -1) {
        return pathName;
      }

      return tabLinks[0];
    },
    [location]
  );

  return (
    <AppBar position="static">
      <Toolbar className="Header">
        <Typography className="Header__title" variant="h5" color="inherit">
          React Workshop
        </Typography>

        <nav className="Header__tabs">
          <Tabs className="Header__tabs-wrapper"
                value={ linkValue }
                variant="fullWidth">
            <LinkTab icon={ <Home/> } value={ tabLinks[0] }/>
            <LinkTab icon={ <PhotoLibrary/> } value={ tabLinks[1] }/>
          </Tabs>
        </nav>
      </Toolbar>
    </AppBar>
  );

};

export const Header = withRouter(HeaderComponent);
