import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SenaraiItem from '../ListItem/ListItem01';

const PaparTempat = (props) => {

  const paparNegeris = props.tempat.map((n)=>(
    <SenaraiItem
      key={n.key}
      tempat={n.value}
      gambar={n.image}
      onParentTekan={() => props.chooseTempat(n.key)}
    />
  ));

  return (
    <ScrollView style={styles.listContainer}>{paparNegeris}</ScrollView>
  );
};

export default PaparTempat;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
