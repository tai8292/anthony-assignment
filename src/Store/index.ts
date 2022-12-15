import rootStore, { RootModel } from '@Store/Root.store';
import { createStore, createTypedHooks } from 'easy-peasy';

import { CryptoStore, cryptoStore } from './Crypto.store';

export interface StoreModel {
  root: RootModel;
  crypto: CryptoStore;
}

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>();

window.requestIdleCallback = null;

export const storeModel: StoreModel = {
  root: rootStore,
  crypto: cryptoStore,
};

const store = createStore(storeModel, {
  name: 'mobileStore',
});

export { useStoreActions, useStoreState, useStoreDispatch, useStore };

export default store;
