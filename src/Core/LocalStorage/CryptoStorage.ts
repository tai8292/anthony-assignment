import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_CRYPTO = '@KEY_CRYPTO';

const setListCrypto = (crypto: string[]) => {
  return AsyncStorage.setItem(KEY_CRYPTO, JSON.stringify(crypto));
};

const getListCrypto = () => {
  return AsyncStorage.getItem(KEY_CRYPTO);
};

const removeCrypto = () => {
  return AsyncStorage.removeItem(KEY_CRYPTO);
};

export default {
  setListCrypto,
  getListCrypto,
  removeCrypto,
};
