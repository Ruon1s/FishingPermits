
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TabNavigator from "./src/navigators/TabNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import TopBar from "./src/components/TopBar";
import {Provider} from "react-redux";
import {store} from './src/store'

const App = () => {

  return (
      <Provider store={store}>
          <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#ffffff" translucent={true}/>
        <TabNavigator/>
      </Provider>
  );
};
export default App

