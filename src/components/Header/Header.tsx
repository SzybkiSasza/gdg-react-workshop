import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            GDG React Workshop
          </Typography>
          <Link to='/'>Home</Link>
          <Link to='/browser'>Browser</Link>
        </Toolbar>
      </AppBar>
    )
  }
}
