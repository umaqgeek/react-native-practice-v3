import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const mulaTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 25),
    Icon.getImageSource("ios-share-alt", 25),
    Icon.getImageSource("ios-menu", 25)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "reactUdemy03.pages.MainPage",
          label: "Main Page",
          title: "Main Page",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        },
        {
          screen: "reactUdemy03.pages.CariTempat",
          label: "Cari Tempat",
          title: "Cari Tempat",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "toggleTepi"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: "reactUdemy03.sideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default mulaTabs;
