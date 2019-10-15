import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';

import './ImageUpload.css';

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
  topPos?: number;
  leftPos?: number;
}

export const ImageUpload: FunctionComponent<ImageUploadProps> = () => {
  let fileInput: HTMLInputElement | null;

  const handleOpen = () => fileInput && fileInput.click();

  return (
    <>
      <Fab className='ImageUpload' color='primary' onClick={ handleOpen }>
        <Add/>
      </Fab>
      <input accept='image/*' multiple={true} ref={ ref => fileInput = ref } style={ {display: 'none'} } type='file'/>
    </>
  );
};
