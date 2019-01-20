import React from 'react';
import { Flatlist, StyleSheet, Text, View } from 'react-native';

import SenaraiItem from './ListItem01';

const PaparTempat02 = (props) => {
  return (
    <Flatlist
      style={styles.listContainer}
      data={props.tempat}
      renderItem={(d) => (
        <SenaraiItem
          key={d.item.key}
          tempat1={d.item.value}
          onParentTekan={() => props.deleteTempat(d.item.key)}
        />
      )}
    />
  );
};

export default PaparTempat02;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
