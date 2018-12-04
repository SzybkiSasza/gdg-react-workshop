import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { createMuiTheme, CssBaseline, Paper } from '@material-ui/core';
import { blue, deepOrange } from '@material-ui/core/colors';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header/Header';
import Browser from './Browser/Browser';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

import './App.css';

const gdgTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <MuiThemeProvider theme={gdgTheme}>
          <CssBaseline/>
          <div className='App'>
            <Header className='App__header'/>
            <section className='App__section'>
              <Paper className='App__paper'>
                <Switch>
                  <Route path='/' exact={true} component={Home}/>
                  <Route path='/browser' component={Browser}/>
                  <Route component={NotFound}/>
                </Switch>
              </Paper>
            </section>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
