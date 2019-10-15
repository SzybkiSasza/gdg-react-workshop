import * as React from 'react';

import { ImageUpload } from '../../components/ImageUpload/ImageUpload';

import './Browser.css';

export default class Browser extends React.Component {
  public render(): JSX.Element {
    return (
      <div className='Browser'>
        <ImageUpload className='Browser__upload'/>
      </div>
    );
  }
}
