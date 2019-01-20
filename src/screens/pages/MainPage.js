import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { connect } from 'react-redux';
import { tambahTempat, deleteAllTempat } from '../../store/actions/index';

import TIAB from '../../components/Inputs/TextInputAndButton';

class MainPage extends Component {

  static navigatorStyle = {
    navBarButtonColor: "green"
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavEvent);
  }

  onNavEvent = (event) => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "toggleTepi") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  tambahTempatGlobal = (namaTempat) => {
    this.props.onTambahTempat(namaTempat);
  }

  clearTempatGlobal = () => {
    this.props.onDeleteAllTempat();
  }

  render() {
    return (
      <View>
        <TIAB
          onTempatTambah={this.tambahTempatGlobal}
          onClearAllTempat={this.clearTempatGlobal}
        />
      <Image
        style={{width: "80%", height: 100}}
        source={this.props.imageData} />
      </View>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    imageData: state.auth.state.imageData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTambahTempat: (namaTempat) => dispatch(tambahTempat(namaTempat)),
    onDeleteAllTempat: () => dispatch(deleteAllTempat())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
