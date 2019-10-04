import { Button, Input } from '@material-ui/core';
import classnames from 'classnames';
import * as React from 'react';

import './ImageUpload.css';

class ImageUpload extends React.Component<any> {
  public render(): JSX.Element {
    return (
      <div className={classnames(this.props.className, { 'ImageUpload': true })}>
        <Input
          className='ImageUpload__path'
          id='upload-path'
          placeholder='PATH HERE'
          readOnly={true}
          value=''/>

        <div className='ImageUpload__buttons'>
          <Button className='ImageUpload__button'
                  color='secondary'
                  onClick={this.selectFile}
                  variant='contained'>
            Browse
          </Button>

          <Button className='ImageUpload__button'
                  color='secondary'
                  onClick={this.uploadFile}
                  variant='contained'>
            Upload selected file
          </Button>
        </div>
      </div>
    );
  }

  private selectFile = (event: React.MouseEvent) => {
    console.log('Selecting!');
    console.log(event);
  };

  private uploadFile = (event: React.MouseEvent) => {
    console.log('Uploading!');
    console.log(event);
  };
}

export default ImageUpload;
