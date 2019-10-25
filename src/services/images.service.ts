import * as localForage from 'localforage';
import { StoredImage } from '../models/image.model';

export class ImagesService {
  static get instance(): ImagesService {
    if (this.instanceVal) {
      return this.instanceVal;
    }

    this.instanceVal = new ImagesService();
    return this.instanceVal;
  }

  private static instanceVal: ImagesService;
  private readonly LS_ITEMS_KEY = 'images';

  constructor() {
    localForage.config({
      description: 'GDG React workshop images storage - stores Blobs for the images',
      name: 'GDG React Workshop',
      storeName: 'gdg',
    });
  }

  public loadImages(): Promise<StoredImage[]> {
    return localForage.getItem<StoredImage[]>(this.LS_ITEMS_KEY);
  }

  public async saveImages(images: FileList | null): Promise<StoredImage[]> {
    const numFiles = images && images.length;

    if (images && numFiles) {
      const storedImages = (await localForage.getItem<StoredImage[]>(this.LS_ITEMS_KEY)) || [];

      const imagesData: Array<Promise<StoredImage>> = [];

      // Get all the image blobs
      for (let i = 0; i < numFiles; i++) {
        imagesData.push(this.generateImageData(images[i]));
      }

      // Store along existing ones
      const imagesToStore = await Promise.all(imagesData);
      const newStorage = [...storedImages, ...imagesToStore];

      return await localForage.setItem(this.LS_ITEMS_KEY, newStorage);
    } else {
      return [];
    }
  }

  private generateImageData(image: File): Promise<StoredImage> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const result = (event.target && event.target.result) || '';
        return resolve({
          data: {
            lastModified: image.lastModified,
            name: image.name,
            size: image.size,
            type: image.type,
          },
          image: result as string,
        });
      };

      fileReader.onerror = reject;

      fileReader.readAsDataURL(image);
    });
  }
}
