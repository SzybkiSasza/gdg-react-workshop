import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';

import App from './layouts/App';
import Browser from './layouts/Browser/Browser';
import Home from './layouts/Home/Home';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='browser' component={Browser} />
    </Route>
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
