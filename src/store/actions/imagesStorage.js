import { IMAGE_STORAGE } from './actionTypes';

export const imageStorage = (imageData) => {
  return {
    type: IMAGE_STORAGE,
    imageData: imageData
  };
};
