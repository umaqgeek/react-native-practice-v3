import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem01 = (props) => (
  <TouchableOpacity style={styles.styleSenaraiItem} onPress={props.onParentTekan}>
    <View style={styles.styleViewSenarai}>
      <Image
        style={styles.styleGambar}
        source={props.gambar}
      />
      <Text>{props.tempat}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  styleSenaraiItem: {
    width: "100%",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 100, 200, 0.1)",
    justifyContent: "center",
    alignItems: "center"
  },
  styleViewSenarai: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "100%"
  },
  styleGambar: {
    width: 50,
    height: 50,
    marginRight: 10
  }
});

export default ListItem01;
