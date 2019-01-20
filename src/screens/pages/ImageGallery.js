/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import ImagePick from 'react-native-image-picker';

import { connect } from 'react-redux';
import { tryAuth, imageStorage } from '../../store/actions/index';

class ImageGallery extends Component {

  state = {
    imagePicked: this.props.imageData
  };

  pilihImage = () => {
    ImagePick.showImagePicker({
      title: "Pick Your Image Wisely"
    }, (res) => {
      if (res.didCancel) {
      } else if (res.error) {
        alert('Error: ' + res.error);
      } else {
        this.props.onSimpanGambar(res);
        this.setState({
          imagePicked: res
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.pilihImage}
        >
          <Image
            style={styles.imageBox}
            source={this.state.imagePicked}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBox: {
    width: "90%",
    height: 300,
    borderWidth: 1,
    borderColor: 'red'
  }
});

const mapStateToProps = (state) => {
  let stateImageData = state.auth.imageData;
  // if (typeof state.auth.state.imageData !== 'undefined') {
  //   stateImageData = state.auth.state.imageData;
  // }
  return {
    imageData: stateImageData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSimpanGambar: (imageData) => dispatch(imageStorage(imageData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
