import { ADD_TEMPAT, DELETE_TEMPAT, DELETE_ALL_TEMPAT, PILIH_TEMPAT, UNPILIH_TEMPAT } from './actionTypes';

export const tambahTempat = (namaTempat) => {
  return {
    type: ADD_TEMPAT,
    namaTempat: namaTempat
  };
};

export const deleteTempat = (key) => {
  return {
    type: DELETE_TEMPAT,
    keyTempat: key
  }
};

export const deleteAllTempat = () => {
  return {
    type: DELETE_ALL_TEMPAT
  }
};

export const pilihTempat = (keyTempat) => {
  return {
    type: PILIH_TEMPAT,
    keyTempat: keyTempat
  };
};

export const unPilihTempat = () => {
  return {
    type: UNPILIH_TEMPAT
  };
};
