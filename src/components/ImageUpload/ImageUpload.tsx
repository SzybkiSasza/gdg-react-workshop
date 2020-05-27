import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import classNames from 'classnames';
import * as React from 'react';
import { ChangeEvent, FunctionComponent, HTMLAttributes } from 'react';

import { StoredImage } from '../../models/image.model';
import { ImagesService } from '../../services/images.service';
import './ImageUpload.css';

interface ImageUploadProps extends HTMLAttributes<HTMLDivElement> {
  topPos?: number;
  leftPos?: number;
  onImagesSaved: (files: StoredImage[]) => void;
}

export const ImageUpload: FunctionComponent<ImageUploadProps> = ({ className, onImagesSaved }) => {
  let fileInput: HTMLInputElement | null;

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
      const files = await ImagesService.instance.saveImages(event.target.files);
      onImagesSaved(files);
    },
    handleOpen = () => fileInput && fileInput.click();

  return (
    <>
      <Fab className={ classNames([
        className,
        'ImageUpload'
      ]) } color="primary" onClick={ handleOpen }>
        <Add/>
      </Fab>

      <input
        accept="image/*"
        multiple={ true }
        ref={ (ref) => fileInput = ref }
        onChange={ handleFiles } style={ { 'display': 'none' } }
        type="file"/>
    </>
  );

};
