import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? <Text>You Logged In</Text> : <LoggedOutNavigation />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  }
});

export default AppContainer;
