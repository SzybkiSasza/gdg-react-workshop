import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Browser from './Browser/Browser';
import Home from './Home/Home';

import './App.css';
import NotFound from './NotFound/NotFound';

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <React.Fragment>
          <CssBaseline/>
          <Header/>
          <section>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/browser' component={Browser}/>
              <Route component={NotFound}/>
            </Switch>
          </section>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
