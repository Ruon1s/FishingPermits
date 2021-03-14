import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {WebView} from "react-native-webview";
import TopBar from "../components/TopBar";
import {SafeAreaProvider} from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const Restrictions: React.FC = () => {
    return (
        <SafeAreaProvider>
            <TopBar title='Kalastusrajoitus.fi'/>
        <WebView source={{ uri: 'https://www.kalastusrajoitus.fi/#/kalastusrajoitus'}}/>
        </SafeAreaProvider>
    )
};
export default Restrictions
