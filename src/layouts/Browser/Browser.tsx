import * as React from 'react';

import ImageBrowser from '../../components/ImageBrowser/ImageBrowser';
import ImageUpload from '../../components/ImageUpload/ImageUpload';

import './Browser.css';

export default class Browser extends React.Component {
  public render(): JSX.Element {
    return (
      <div className='Browser'>
        <ImageBrowser className='Browser__images'/>
        <ImageUpload className='Browser__upload'/>
      </div>
    );
  }
}
