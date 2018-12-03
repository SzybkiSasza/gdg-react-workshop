import { History } from 'history';
import * as React from 'react';
import { Route } from 'react-router-dom';

type NavButtonProps = {
  to: string;
};

export class NavButton extends React.Component<NavButtonProps> {
  public render() {
    return (
      <Route render={({ history }) => (
        <button
          type='button'
          onClick={() => this.navigateTo(history)}>
          {this.props.children}
        </button>
      )}/>
    )
  }

  private navigateTo = (history: History) => {
    history.push(this.props.to);
  };
}
