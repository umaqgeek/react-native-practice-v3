import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class TextInputAndButton extends Component {

  state = {
    ayat: ''
  }

  handleUbah = val => {
    this.setState({
      ayat: val
    });
  }

  tambahTempat = () => {
    if (this.state.ayat.trim() === "") {
      alert('Please fill in the username!');
      return;
    }

    this.props.onTempatTambah(this.state.ayat.toUpperCase());

    this.setState({
      ayat: ''
    });
  }

  clearAllTempat = () => {
    this.props.onClearAllTempat();
  }

  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            type="text"
            placeholder="type text"
            style={styles.textInput}
            onChangeText={this.handleUbah}
            value={this.state.ayat}
          />
          <View style={styles.buttonInput}>
            <Button
              title="Add"
              onPress={this.tambahTempat}
              color="green"
            />
          </View>
          <View style={styles.buttonInput}>
            <Button
              title="Clear"
              onPress={this.clearAllTempat}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default TextInputAndButton;

const styles = StyleSheet.create({
  textInput: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'black',
    width: "70%",
    paddingLeft: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)"
  },
  buttonInput: {
    // backgroundColor: "red",
    // width: "30%",
    marginRight: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  }
});
