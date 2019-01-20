import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import BackToLoginPage from '../mainTabs/backToLogin';

class SideDrawer extends Component {

  onSignOut = () => {
    BackToLoginPage();
  };

  render() {
    return (
      <View style={[{
        width: Dimensions.get("window").width * 0.8
      }, styles.container]}>
        <View>
          <Icon
            name="ios-contact"
            size={150}
          />
        </View>
        <View style={styles.hrLine}></View>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={this.onSignOut}
        >
          <Icon
            name="md-log-out"
            size={50}
          />
          <Text style={styles.logoutText}>      Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  };
};

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  hrLine: {
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
    width: "100%"
  },
  logoutButton: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 255, 0.2)"
  },
  logoutText: {
    fontWeight: "bold"
  }
});
