import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { tambahTempat } from '../../store/actions/index';

import PT from '../../components/ListItem/PaparTempat';

class CariTempat extends Component {

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

  tukangPilihTempat = (key) => {

    const tempatPilihan = this.props.tempat.find(t => {
      return t.key === key
    });

    this.props.navigator.push({
      screen: "reactUdemy03.pages.PaparTempatDetail",
      title: "Detail Tempat " + tempatPilihan.value,
      passProps: {
        tempatSelected: tempatPilihan
      }
    });
  };

  render() {
    return (
      <View>
        <PT
          tempat={this.props.tempat}
          chooseTempat={this.tukangPilihTempat}
        />
      </View>
    );
  };
};

const mapStateToProps = state => {
  return {
    tempat: state.tempat.tempat
  };
};

export default connect(mapStateToProps)(CariTempat);
