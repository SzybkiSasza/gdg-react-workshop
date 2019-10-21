import * as React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';

import { StoredImage } from '../../models/image.model';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement> {
  images: StoredImage[];
}

export const ImageBrowser: FunctionComponent<ImageBrowserProps> = ({ className }) => {
  return <div className={ className }>
    HELLO!!!
  </div>
};
