import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';

import MulaTabs from '../mainTabs/startMainTabs';
import backgroundImage from '../../assets/images/background.jpg';

import { connect } from 'react-redux';
import { tryAuth, imageStorage } from '../../store/actions/index';

class AuthScreen extends Component {

  state = {
    respStyle: {
      container: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        paddingTop: "5%",
        backgroundColor: "rgba(0, 100, 100, 0.1)"
      },
      textInput: {
        width: "50%",
        borderBottomWidth: 1
      },
      rowInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5%"
      }
    },
    input: {
      label: {
        username: (<Text>Username : </Text>),
        password: (<Text>Password : </Text>)
      },
      text: {
        email: {
          value: "",
          valid: false
        },
        password: {
          value: "",
          valid: false
        }
      }
    }
  };

  onChangeHandler = (id, val) => {
    this.setState(prevState => {
      return {
        ...prevState,
        input: {
          ...prevState.input,
          text: {
            ...prevState.input.text,
            [id]: {
              ...prevState.input.text[id],
              value: val
            }
          }
        }
      };
    });
  };

  constructor(props) {
    super(props);
    // Dimensions.addEventListener("change", this.updateStyleAku);
  };

  componentWillUnmount() {
    // Dimensions.removeEventListener("change", this.updateStyleAku);
  };

  updateStyleAku = (dims) => {
    if (dims.window.height > 500) {
      this.setState({
        respStyle: {
          container: {
            width: "100%",
            height: "100%",
            flexDirection: "column",
            paddingTop: "5%",
            backgroundColor: "rgba(0, 100, 100, 0.1)"
          },
          textInput: {
            width: "50%",
            borderBottomWidth: 1
          },
          rowInput: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%"
          }
        },
        input: {
          label: {
            username: (<Text>Username : </Text>),
            password: (<Text>Password : </Text>)
          }
        }
      });
    } else {
      this.setState({
        respStyle: {
          container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: "10%",
            paddingLeft: "10%"
          },
          textInput: {
            borderBottomWidth: 1
          },
          rowInput: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5%"
          }
        },
        input: {
          label: {
            username: (null),
            password: (null)
          }
        }
      });
    }
  };

  logMasuk = () => {
    // alert(JSON.stringify(this.state.input.text));

    const authData = {
      email: this.state.input.text.username,
      password: this.state.input.text.password
    };
    this.props.onLogin(authData);

    MulaTabs();
  };

  render() {
    return (
      <ImageBackground source={this.props.imageData} style={this.state.respStyle.container}>
        <View style={this.state.respStyle.rowInput}>
          {this.state.input.label.username}
          <TextInput
            style={this.state.respStyle.textInput}
            placeholder="Enter your email"
            value={this.state.input.text.email.value}
            onChangeText={(val) => this.onChangeHandler('email', val)}
            keyboardType="email-address"
          />
        </View>
        <View style={this.state.respStyle.rowInput}>
          {this.state.input.label.password}
          <TextInput
            style={this.state.respStyle.textInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={this.state.input.text.password.value}
            onChangeText={(val) => this.onChangeHandler('password', val)}
            keyboardType="numeric"
          />
        </View>
        <View style={this.state.respStyle.rowInput}>
          <Button
            color="green"
            title="Sign In"
            onPress={this.logMasuk}
          />
        </View>
      </ImageBackground>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    imageData: state.auth.imageData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
