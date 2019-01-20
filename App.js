import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import BackToLogin from './src/screens/mainTabs/backToLogin';

import {
  AuthScreen,
  PagesMainPage,
  PagesCariTempat,
  PagesPaparTempatDetail,
  SideDrawer,
  MapsPage,
  ImageGallery
} from './src/screens/index';

import configureStore from './src/store/configureStore';
const store = configureStore();

Navigation.registerComponent("reactUdemy03.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("reactUdemy03.pages.MainPage", () => PagesMainPage, store, Provider);
Navigation.registerComponent("reactUdemy03.pages.CariTempat", () => PagesCariTempat, store, Provider);
Navigation.registerComponent("reactUdemy03.pages.PaparTempatDetail", () => PagesPaparTempatDetail, store, Provider);
Navigation.registerComponent("reactUdemy03.sideDrawer", () => SideDrawer, store, Provider);
Navigation.registerComponent("reactUdemy03.pages.MapsPage", () => MapsPage, store, Provider);
Navigation.registerComponent("reactUdemy03.pages.ImageGallery", () => ImageGallery, store, Provider);

Promise.all([
  BackToLogin()
]).then(() => {});
