import * as React from 'react';

import { Button, Input } from '@material-ui/core';

class ImageUpload extends React.Component<any> {
  public render(): JSX.Element {
    return <div className={this.props.className}>
      <Input
        className='ImageUpload__path'
        id='upload-path'
        placeholder='PATH HERE'
        readOnly={true}
        value=''/>
      <Button className='Home__button'
              color='secondary'
              onClick={this.selectFile}
              variant='contained'>
        Browse
      </Button>
      <Button className='Home__button'
              color='secondary'
              onClick={this.uploadFile}
              variant='contained'>
        Upload selected file
      </Button>
    </div>
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
