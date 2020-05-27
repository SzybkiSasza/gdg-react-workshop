import * as React from 'react';
import { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Tab, { TabProps } from '@material-ui/core/Tab';

import './LinkTab.css';

interface LinkTabProps extends RouteComponentProps, TabProps {}

export const LinkTabComponent: FunctionComponent<LinkTabProps> = ({ history, ...props }) => {
  const navigate = () => {
    history.push(props.value);
  };

  return (
    <Tab
      className="NavTab"
      color="secondary"
      onClick={ navigate }
      { ...props }/>
  );
};

export const LinkTab = withRouter(LinkTabComponent);
