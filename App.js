import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  render() {
    const { isLoadingComplete } = this.state;
    const { _loadAssetAsync, _handleFinishLoading, _handleLoadingError } = this;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={_loadAssetAsync}
          onError={_handleLoadingError}
          onFinish={_handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }

  _loadAssetAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/logo-white.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png")
      ]),
      Font.loadAsync({...Ionicons.font, ...MaterialIcons.font})
    ]);
  };

  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };

  _handleLoadingError = error => {
    console.error(error);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
