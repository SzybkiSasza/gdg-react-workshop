import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Link } from 'react-router';

// Type we'll use for passing arbitrary classes to our Header
type HeaderProps = {
  classes?: { [key: string]: string };
}

// We pass proper information about interface in "extends" to allow for strongly-typed props
export default class Header extends React.Component<HeaderProps> {
  public render(): JSX.Element {
    // Get optional classes to enrich the element
    const { classes = {} } = this.props;

    return (
      <AppBar className={ classes.appBar } position='static'>
        <Toolbar>
          <Typography variant='h5' color='inherit'>
            GDG React Workshop
          </Typography>
          <Link to='/'>Home</Link>
          <Link to='/browser'>Browser</Link>
        </Toolbar>
      </AppBar>
    )
  }
}
