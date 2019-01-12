import React, { Component } from "react";
import LogInScreen from "./presenter";
import { Alert } from 'react-native';

class Container extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    isSubmitting: false
  };

  render() {
    const { _handleChangeUsername, _handleChangePassword, _submit } = this;
    const { username, password, isSubmitting } = this.state;
    return (
      <LogInScreen
        username={username}
        password={password}
        isSubmitting={isSubmitting}
        handleChangeUsername={_handleChangeUsername}
        handleChangePassword={_handleChangePassword}
        handleSubmit={_submit}
      />
    );
  }
  _handleChangeUsername = event => {
    const { nativeEvent : { text }} = event;
    this.setState({ username: text });
  };
  _handleChangePassword = event => {
    const { nativeEvent : { text }} = event;
    this.setState({ password: text });
  };
  _submit = () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if(!isSubmitting) {
      if(username && password) {
        this.setState({
          isSubmitting: true
        });
        // redux actions 
        login(username, password);
      } else {
        Alert.alert("All fields are required!!");
      }
    }
  }
}

export default Container;
