import * as React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';
import { GridList, GridListTile } from '@material-ui/core';

import { StoredImage } from '../../models/image.model';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement> {
  images: StoredImage[];
}

export const ImageBrowser: FunctionComponent<ImageBrowserProps> = ({className, images}) => {
  return <div className={ className }>
    <GridList cellHeight={160}  cols={3}>
      {images && images.map(image => (
        <GridListTile key={image.data.name}>
          <img src={image.image} alt={image.data.name} />
        </GridListTile>
      ))}
    </GridList>
  </div>
};
