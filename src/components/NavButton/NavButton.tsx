import { History } from 'history';
import * as React from 'react';
import { Route } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './NavButton.css';

type NavButtonProps = {
  icon?: string;
  to: string;
};

export class NavButton extends React.Component<NavButtonProps> {
  public render() {
    return (
      <Route render={({ history }) => (
        <Button onClick={() => this.navigateTo(history)} className='NavButton' color='secondary' variant='contained'>
          {this.props.children}
          {
            this.props.icon &&
            <Icon className='NavButton__icon'>{this.props.icon}</Icon>
          }

        </Button>
      )}/>
    )
  }

  private navigateTo = (history: History) => {
    history.push(this.props.to);
  };
}
