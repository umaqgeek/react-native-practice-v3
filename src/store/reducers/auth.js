import { TRY_AUTH, IMAGE_STORAGE } from '../actions/actionTypes';

const initialAuth = {
  tryAuth: {},
  imageStorage: {}
};

const authReducer = (state=initialAuth, action) => {
  switch (action.type) {
    case TRY_AUTH: {
      return {
        state
      };
    }
    case IMAGE_STORAGE: {
      return {
        ...state,
        imageData: action.imageData
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
