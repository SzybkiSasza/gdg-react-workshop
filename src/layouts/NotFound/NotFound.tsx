import * as React from 'react';

import droids from './droids.gif';

export default class NotFound extends React.Component {
  public render(): JSX.Element {
    return (
        <div>
            NOT FOUND
          <img src={droids} alt='Owi Wan'/>
        </div>
    );
  }
}
