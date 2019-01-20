import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

const BackToLogin = () => {
  Promise.all([
    Icon.getImageSource("md-images", 25),
    Icon.getImageSource("md-map", 25),
    Icon.getImageSource("md-log-in", 25),
    Icon.getImageSource("md-menu", 25)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "reactUdemy03.pages.ImageGallery",
          label: "Image Gallery",
          title: "Image Gallery",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        },
        {
          screen: "reactUdemy03.pages.MapsPage",
          label: "Maps View",
          title: "Maps View",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        },
        {
          screen: "reactUdemy03.AuthScreen",
          label: "Login",
          title: "Login",
          icon: sources[2],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[3],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "blue"
      },
      drawer: {
        left: {
          screen: "reactUdemy03.sideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "blue"
      }
    });
  });
};

export default BackToLogin;
