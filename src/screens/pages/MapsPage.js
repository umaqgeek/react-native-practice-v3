import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

class MapsPage extends Component {

  latitudeDeltaGlobal = 0.0122;

  state = {
    focLoc: {
      latitude: 3.077015,
      longitude: 101.695471,
      latitudeDelta: this.latitudeDeltaGlobal,
      longitudeDelta: (Dimensions.get("window").width / Dimensions.get("window").height * this.latitudeDeltaGlobal)
    }
  };

  testFunc = () => {
    console.log('masuk da');
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log('t1');
      console.log(pos);
      console.log('t2');
      this.setState(prevState => {
        return {
          focLoc: {
            ...prevState.focLoc,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        };
      });
    }, (err) => {
      alert('Error: ' + JSON.stringify(err));
    });
  };

  pilihLoc = (e) => {
    const co = e.nativeEvent.coordinate;
    this.setState(prevState => {
      return {
        focLoc: {
          ...prevState.focLoc,
          latitude: co.latitude,
          longitude: co.longitude
        }
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Map Class</Text>
        <MapView
          style={styles.mapView}
          initialRegion={this.state.focLoc}
          onPress={this.pilihLoc}
          region={this.state.focLoc}
        >
          <MapView.Marker
            coordinate={this.state.focLoc}
          />
        </MapView>
        <Button
          title="Tempat Aku"
          onPress={this.testFunc}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mapView: {
    width: "100%",
    height: 300
  }
});

export default MapsPage;
