import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Tab, { TabProps } from '@material-ui/core/Tab';

import './LinkTab.css';

interface LinkTabProps extends RouteComponentProps, TabProps {}

class LinkTab extends React.Component<LinkTabProps> {
  public render() {
    const { staticContext, ...props } = this.props;

    return (
      <Tab
        className='NavTab'
        color='secondary'
        onClick={this.navigate}
        {...props}/>
    )
  }

  private navigate = () => {
    const history = this.props.history;
    history.push(this.props.value)
  };
}

export default withRouter(LinkTab);
