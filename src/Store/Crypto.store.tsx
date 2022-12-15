import { getAssetData } from '@Api';
import { CryptoType } from 'DataType';
import { Action, action, Thunk, thunk } from 'easy-peasy';

export type CryptoStore = {
  cryptos: CryptoType[];
  getCryptos: Thunk<CryptoStore, { assetKeys: string[] }>;
  setCrypto: Action<CryptoStore, CryptoType[]>;
  pushCrypto: Action<CryptoStore, CryptoType>;
  getCrypto: Thunk<CryptoStore, { assetKey: string }>;
};

const initialState = {
  cryptos: [],
};

export const cryptoStore: CryptoStore = {
  ...initialState,
  getCryptos: thunk(async (actions, body) => {
    try {
      actions.setCrypto([]);
      const { assetKeys } = body;
      Promise.all(
        assetKeys.map((e) => {
          return getAssetData(e);
        }),
      ).then((response) => {
        response.forEach((e) => {
          if (e) {
            actions.pushCrypto(e.data);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }),
  setCrypto: action((state, payload): void => {
    state.cryptos = payload;
  }),
  pushCrypto: action((state, payload): void => {
    state.cryptos.push(payload);
  }),
  getCrypto: thunk(async (actions, body) => {
    try {
      const { assetKey } = body;
      const response = await getAssetData(assetKey);
      console.log('res', response);
      if (!response.status.error_code) {
        actions.pushCrypto(response.data);
      } else {
        if (response.status.error_code === 404) {
          throw new Error('Not found');
        } else {
          throw new Error('Something is wrong');
        }
      }
    } catch (error) {
      throw error;
    }
  }),
};
