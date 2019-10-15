import { Dialog, DialogTitle, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes, useState } from 'react';

import './ImageUpload.css';

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
  topPos?: number;
  leftPos?: number;
}

export const ImageUpload: FunctionComponent<ImageUploadProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () =>setOpen(true);

  return (
    <>
      <Fab className='ImageUpload' color='primary' onClick={ handleOpen }>
        <Add/>
      </Fab>
      <Dialog open={ open }
              onClose={ handleClose }>
        <DialogTitle>Choose image to upload</DialogTitle>
      </Dialog>
    </>
  );
};
