import { ADD_TEMPAT, DELETE_TEMPAT, DELETE_ALL_TEMPAT, PILIH_TEMPAT, UNPILIH_TEMPAT } from '../actions/actionTypes';

const initialTempat = {
  tempat: [],
  selectedTempat: null
};

const tempatReducer = (state=initialTempat, action) => {
  switch (action.type) {
    case ADD_TEMPAT:
      return {
        ...state,
        tempat: state.tempat.concat({
          key: Math.random(),
          value: action.namaTempat,
          image: {
            uri: "https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg"
          }
        })
      };
    case DELETE_TEMPAT:
      return {
        ...state,
        tempat: state.tempat.filter((temp) => {
          return temp.key !== action.keyTempat
        }),
        selectedTempat: null
      };
    case DELETE_ALL_TEMPAT:
      return {
        ...state,
        tempat: [],
        selectedTempat: null
      };
    case PILIH_TEMPAT:
      return {
        ...state,
        selectedTempat: state.tempat.find(temp => {
          return temp.key === action.keyTempat
        })
      };
    case UNPILIH_TEMPAT:
      return {
        ...state,
        selectedTempat: null
      };
    default:
      return state;
  }
};

export default tempatReducer;
