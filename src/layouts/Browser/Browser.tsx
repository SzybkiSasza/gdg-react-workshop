import * as React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';

import ImageBrowser from '../../components/ImageBrowser/ImageBrowser';
import { ImageUpload } from '../../components/ImageUpload/ImageUpload';
import { StoredImage } from '../../models/image.model';
import './Browser.css';

interface BrowserProps extends HTMLAttributes<HTMLDivElement> {};

export const Browser: FunctionComponent<BrowserProps> = () => {
  const onImagesSaved = (images: StoredImage[]) => {
    console.log('Uploaded!', images);
  };

  return (
    <div className='Browser'>
      <ImageUpload className='Browser__upload' onImagesSaved={onImagesSaved}/>
      <ImageBrowser/>
    </div>
  );
}
