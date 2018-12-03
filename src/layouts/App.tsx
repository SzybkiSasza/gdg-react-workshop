import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Header from '../components/Header/Header';
import Browser from './Browser/Browser';
import Home from './Home/Home';

import './App.css';
import NotFound from './NotFound/NotFound';

const gdgTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
});

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <MuiThemeProvider theme={gdgTheme}>
          <CssBaseline/>
          <Header/>
          <section>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/browser' component={Browser}/>
              <Route component={NotFound}/>
            </Switch>
          </section>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
