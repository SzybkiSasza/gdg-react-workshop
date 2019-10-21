import * as React from 'react';
import { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react';

import { ImageBrowser } from '../../components/ImageBrowser/ImageBrowser';
import { ImageUpload } from '../../components/ImageUpload/ImageUpload';
import { StoredImage } from '../../models/image.model';
import { ImagesService } from '../../services/images.service';

import './Browser.css';

interface BrowserProps extends HTMLAttributes<HTMLDivElement> {
};

export const Browser: FunctionComponent<BrowserProps> = () => {
  const [images, setImages] = useState<StoredImage[]>([]);
  const fetchImages = async () => {
    const storedImages = await ImagesService.instance.loadImages();
    setImages(storedImages);
  };

  // Get initial set of images
  useEffect(() => {
    fetchImages()
  });

  const onImagesSaved = (storedImages: StoredImage[]) => setImages(storedImages);

  return (
    <div className='Browser'>
      <ImageUpload className='Browser__upload' onImagesSaved={ onImagesSaved }/>
      <ImageBrowser images={ images }/>
    </div>
  );
}
