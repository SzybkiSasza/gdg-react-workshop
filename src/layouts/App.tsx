import classNames from 'classnames';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { createMuiTheme, CssBaseline, Paper, withWidth } from '@material-ui/core';
import { blue, deepOrange } from '@material-ui/core/colors';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { Header } from '../components/Header/Header';
import { Browser } from './Browser/Browser';
import { Home } from './Home/Home';
import { NotFound } from './NotFound/NotFound';

import './App.css';

const currentHours = new Date().getHours();
const gdgTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
    type: (currentHours > 8 && currentHours < 22) ? 'light' : 'dark',
  },
});

interface AppProps {
  width?: string;
}

class App extends React.Component<AppProps> {
  public render() {
    const isSmallScreen = this.props.width === 'xs';
    return (
      <HashRouter>
        <MuiThemeProvider theme={ gdgTheme }>
          <CssBaseline/>
          <div className='App'>
            <Header className='App__header'/>
            <section className={ classNames({'App__section': true, 'App__section--small': isSmallScreen}) }>
              <Paper className={ classNames({'App__paper': true, 'App__paper--small': isSmallScreen}) }>
                <Switch>
                  <Route path='/' exact={ true } component={ Home }/>
                  <Route path='/browser' component={ Browser }/>
                  <Route component={ NotFound }/>
                </Switch>
              </Paper>
            </section>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default withWidth()(App);
