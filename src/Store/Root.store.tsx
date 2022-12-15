import { Appearance } from 'react-native';
import { Action, action } from 'easy-peasy';

export interface RootModel {
  appearanceMode: string;
  isDarkMode: boolean;
  updateUIMode: Action<RootModel, string>;
}

const rootStore: RootModel = {
  appearanceMode: Appearance.getColorScheme() || 'light',
  isDarkMode: Appearance.getColorScheme() === 'dark',
  updateUIMode: action((state, mode) => {
    state.appearanceMode = mode;
    state.isDarkMode = mode === 'dark';
  }),
};

export default rootStore;
