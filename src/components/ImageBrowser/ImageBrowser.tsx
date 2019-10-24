import * as React from 'react';
import { FunctionComponent, HTMLAttributes, SyntheticEvent, useCallback, useState } from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

import { StoredImage } from '../../models/image.model';

interface ImageBrowserProps extends HTMLAttributes<HTMLDivElement> {
  images: StoredImage[];
}

interface TileInfo {
  cols: number;
  rows: number;
}

export const ImageBrowser: FunctionComponent<ImageBrowserProps> = ({className, images}) => {
  const [imageTiles, setImageTiles] = useState<{ [key: string]: TileInfo }>({
    default: {
      cols: 1,
      rows: 1,
    }
  });

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
    <GridList cellHeight={ 152 } spacing={ 5 }>
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
};
