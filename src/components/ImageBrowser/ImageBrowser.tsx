import * as React from 'react';
import { FunctionComponent, HTMLAttributes, SyntheticEvent, useCallback, useMemo, useRef, useState } from 'react';
import { GridList, GridListTile, GridListTileBar, withWidth } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { WithWidth } from '@material-ui/core/withWidth';

import { StoredImage } from '../../models/image.model';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement>, WithWidth {
  images: StoredImage[];
}

interface TileInfo {
  cols: number;
  rows: number;
}

// Maps columns to proper grid size
const colsMap: { [key in Breakpoint]: number } = {
  'xs': 2,
  'sm': 4,
  'md': 6,
  'lg': 8,
  'xl': 10,
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
  }, [componentRef.current, currentCols]);

  // Calculates columns and rows for the image
  const updateImageBounds = useCallback((imageData: Partial<File>) => (event: SyntheticEvent<HTMLImageElement>) => {
    const imagePropName = imageData.name || 'default';
    // if (!imageTiles[imagePropName]) {
    const imageElt = (event.target as HTMLImageElement);

    const imageWidth = imageElt.naturalWidth;
    const imageHeight = imageElt.naturalHeight;
    const ratio = imageWidth / imageHeight;

    console.log(imageData.name, imageWidth, imageHeight, ratio);
    if (ratio >= 1.2) {
      setImageTiles({
        ...imageTiles,
        [imagePropName]: {
          cols: Math.ceil(ratio),
          rows: 1,
        }
      });
    } else if (ratio <= 0.8) {
      setImageTiles({
        ...imageTiles,
        [imagePropName]: {
          cols: 1,
          rows: Math.ceil(1 / ratio),
        }
      });
    } else {
      setImageTiles({
        ...imageTiles,
        [imagePropName]: {
          cols: 1,
          rows: 1,
        }
      });
    }
    // }
  }, [imageTiles]);

  const getImageTileInfo = useCallback((image: StoredImage) => {
    const imagePropName = image.data.name || 'default';
    return imageTiles[imagePropName] || imageTiles.default;
  }, [imageTiles]);

  return <div className={ className }>
    <GridList cols={ currentCols } cellHeight={ cellHeight } spacing={ 10 } ref={ componentRef }>
      { images && images.map(image =>
        <GridListTile key={ image.data.name } cols={ getImageTileInfo(image).cols }
                      rows={ getImageTileInfo(image).rows }>
          <img src={ image.image } alt={ image.data.name } onLoad={ updateImageBounds(image.data) }/>
          <GridListTileBar
            title={ image.data.name }
          />
        </GridListTile>
      ) }
    </GridList>
  </div>
});

export const ImageBrowser =
  withWidth({})(ImageBrowserComponent);
