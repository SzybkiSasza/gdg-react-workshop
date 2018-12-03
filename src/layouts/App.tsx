import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';

import Header from '../components/Header/Header';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
          <CssBaseline />
          <Header/>
          <section>{this.props.children}</section>
      </React.Fragment>
    );
  }
}

export default App;
