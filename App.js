import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from './components/AppContainer';
const { store, persistor } = configureStore();

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppContainer />
        </PersistGate>
      </Provider>
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
      Font.loadAsync({ ...Ionicons.font, ...MaterialIcons.font })
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

export default App;
