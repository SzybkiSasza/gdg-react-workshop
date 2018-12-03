import * as React from 'react';
import './App.css';

import Header from '../components/Header/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header/>
        <section>{this.props.children}</section>
      </div>
    );
  }
}

export default App;
