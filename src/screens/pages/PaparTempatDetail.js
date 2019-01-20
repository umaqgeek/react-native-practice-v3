import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import { deleteTempat } from '../../store/actions/index';

import Icon from 'react-native-vector-icons/Ionicons';

class PaparTempatDetail extends Component {

  limitHeightPage = 500;

  state = {
    styleGambar: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitStyleGambar : styles.landscapeStyleGambar,
    styleContainer: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitStyleContainer : styles.landscapeStyleContainer,
    styleButton: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitStyleButton : styles.landscapeStyleButton,
    styleButtonDelete: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitStyleButtonDelete : styles.landscapeStyleButtonDelete,
    infoAndButton: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitInfoAndButton : styles.landscapeInfoAndButton
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStylePage);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStylePage);
  }

  updateStylePage = (dims) => {
    this.setState({
      styleGambar: dims.window.height > this.limitHeightPage ? styles.potraitStyleGambar : styles.landscapeStyleGambar,
      styleContainer: dims.window.height > this.limitHeightPage ? styles.potraitStyleContainer : styles.landscapeStyleContainer,
      styleButton: dims.window.height > this.limitHeightPage ? styles.potraitStyleButton : styles.landscapeStyleButton,
      styleButtonDelete: dims.window.height > this.limitHeightPage ? styles.potraitStyleButtonDelete : styles.landscapeStyleButtonDelete,
      infoAndButton: Dimensions.get("window").height > this.limitHeightPage ? styles.potraitInfoAndButton : styles.landscapeInfoAndButton
    });
  };

  tukangDeleteTempat = () => {
    this.props.onDeleteTempat(this.props.tempatSelected.key);
    this.props.navigator.popToRoot();
  };

  render() {
    return (
      <View style={this.state.styleContainer}>
        <View>
          <Image source={this.props.tempatSelected.image} style={this.state.styleGambar} />
        </View>
        <View style={this.state.infoAndButton}>
          <Text>{this.props.tempatSelected.value}</Text>
          <TouchableOpacity
            style={[this.state.styleButton, this.state.styleButtonDelete]}
            onPress={this.tukangDeleteTempat}>
            <Icon
              size={20}
              name="ios-trash"
              color="red"
            />
            <Text>{" Delete"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTempat: (key) => dispatch(deleteTempat(key))
  };
};

export default connect(null, mapDispatchToProps)(PaparTempatDetail);

const styles = StyleSheet.create({
  potraitStyleGambar: {
    width: 200,
    height: 200,
    marginRight: 10,
    marginBottom: 10
  },
  potraitStyleContainer: {
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  potraitStyleButton: {
    width: "100%",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.4)",
    borderRadius: 10,
    height: 30
  },
  potraitStyleButtonDelete: {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  potraitInfoAndButton: {
    alignItems: "center",
    justifyContent: "center"
  },

  landscapeStyleGambar: {
    width: 200,
    height: 200,
    marginRight: 10,
    marginBottom: 10
  },
  landscapeStyleContainer: {
    padding: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  landscapeStyleButton: {
    width: "100%",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.4)",
    borderRadius: 10,
    height: 30
  },
  landscapeStyleButtonDelete: {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    flexDirection: "row"
  },
  landscapeInfoAndButton: {
    alignItems: "center",
    justifyContent: "center"
  }
});
