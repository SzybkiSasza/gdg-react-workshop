import { WithWidth, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes, SyntheticEvent, useCallback, useMemo, useState } from 'react';
import StackGrid from 'react-stack-grid';

import { StoredImage } from '../../models/image.model';
import './ImageBrowser.css';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement>, WithWidth {
  images: StoredImage[];
}

interface TileInfo {
  cols: number;
  rows: number;
  width?: number;
  height?: number;
}

// Maps columns to proper grid size
const colsMap: { [key in Breakpoint]: string } = {
  'xs': '100%',
  'sm': '50%',
  'md': '25%',
  'lg': '16.6%',
  'xl': '12.5%'
};

export const ImageBrowserComponent: FunctionComponent<ImageBrowserProps> = ({ width, className, images }: ImageBrowserProps) => {
  const [
      imageTiles,
      setImageTiles
    ] = useState<{ [key: string]: TileInfo }>({
      'default': {
        'cols': 1,
        'rows': 1
      }
    }),

    // Calculates columns and rows for the image
    updateImageBounds = useCallback(
      (imageData: Partial<File>) => (event: SyntheticEvent<HTMLImageElement>) => {

        const imagePropName = imageData.name || 'default',
          imageElt = event.target as HTMLImageElement,

          imageWidth = imageElt.naturalWidth,
          imageHeight = imageElt.naturalHeight,

          // Get image ratio
          ratio = imageWidth / imageHeight;

        let newImageProp: TileInfo = {
          'rows': 1,
          'cols': 1,
          'width': imageWidth,
          'height': imageHeight
        };

        if (ratio >= 1) {

          newImageProp = {
            ...newImageProp,
            'cols': 1,
            'rows': Math.round(ratio)
          };

        } else {
          newImageProp = {
            ...newImageProp,
            'cols': Math.round(1 / ratio),
            'rows': 1
          };

        }

        setImageTiles({
          ...imageTiles,
          [imagePropName]: newImageProp
        });
      },
      [imageTiles]
    ),

    // Get total cols based on width - 8 / 6 / 4 / 2
    currentColSize = useMemo(
      () => colsMap[width],
      [width]
    );

  return (
    <StackGrid
      className={ 'ImageBrowser__container' }
      monitorImagesLoaded={ true }
      columnWidth={ currentColSize }
      gutterWidth={ 10 }
      gutterHeight={ 10 }
      duration={ 300 }>
      {
        images && images.map((image, index) => <div key={ index }>
          <img
            className={ 'ImageBrowser__image' }
            key={ index }
            src={ image.image }
            alt={ image.data.name }
            onLoad={ updateImageBounds(image.data) }/>
        </div>)
      }
    </StackGrid>
  );

};

export const ImageBrowser =
  withWidth({})(ImageBrowserComponent);
