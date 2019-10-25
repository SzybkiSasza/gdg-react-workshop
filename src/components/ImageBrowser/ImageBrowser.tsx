import { GridList, GridListTile, GridListTileBar, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { WithWidth } from '@material-ui/core/withWidth';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes, SyntheticEvent, useCallback, useMemo, useRef, useState } from 'react';

import { StoredImage } from '../../models/image.model';

import './ImageBrowser.css';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement>, WithWidth {
  images: StoredImage[];
}

interface TileInfo {
  cols: number;
  rows: number;
}

// Maps columns to proper grid size
const colsMap: { [key in Breakpoint]: number } = {
  'xs': 1,
  'sm': 2,
  'md': 4,
  'lg': 6,
  'xl': 8,
};

export const ImageBrowserComponent: FunctionComponent<ImageBrowserProps> = (({className, images, width}: ImageBrowserProps) => {
  const [imageTiles, setImageTiles] = useState<{ [key: string]: TileInfo }>({
    default: {
      cols: 1,
      rows: 1,
    }
  });

  // Get total cols based on width - 8 / 6 / 4 / 2
  const currentCols = useMemo(() => colsMap[width], [width]);

  // Get column height proportional to columns number
  const componentRef = useRef<HTMLUListElement>(null);
  const cellHeight = useMemo(() => {
    if (componentRef.current) {
      const listRef = componentRef.current;
      const listWidth = listRef.offsetWidth;

      return Math.floor(listWidth / currentCols);
    }

    return 200;
  }, [currentCols]);

  // Calculates columns and rows for the image
  const updateImageBounds = useCallback((imageData: Partial<File>) => (event: SyntheticEvent<HTMLImageElement>) => {
    const imagePropName = imageData.name || 'default';
    // if (!imageTiles[imagePropName]) {
    const imageElt = (event.target as HTMLImageElement);

    const imageWidth = imageElt.naturalWidth;
    const imageHeight = imageElt.naturalHeight;
    const ratio = imageWidth / imageHeight;

    // Stretch images that are wide
    if (ratio >= 1.5) {
      setImageTiles({
        ...imageTiles,
        [imagePropName]: {
          cols: Math.ceil(ratio),
          rows: 1,
        }
      });
    }
  }, [imageTiles]);

  const getImageTileInfo = useCallback((image: StoredImage) => {
    const imagePropName = image.data.name || 'default';
    return imageTiles[imagePropName] || imageTiles.default;
  }, [imageTiles]);

  return (
    <GridList className={ 'ImageBrowser' }
              cols={ currentCols }
              cellHeight={ cellHeight } spacing={ 5 }
              ref={ componentRef }>
      { images && images.map(image =>
        <GridListTile key={ image.data.name } cols={getImageTileInfo(image).cols} rows={getImageTileInfo(image).rows}>
          <img src={ image.image } alt={ image.data.name } onLoad={ updateImageBounds(image.data) }/>
          <GridListTileBar
            title={ image.data.name }
          />
        </GridListTile>
      ) }
    </GridList>
  );
});

export const ImageBrowser =
  withWidth({})(ImageBrowserComponent);
