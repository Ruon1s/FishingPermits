import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";
import TopBar from "../components/TopBar";
import {SafeAreaProvider} from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const doStuff = () => {
    console.log('pressed')
}

const Permits: React.FC = () => {
    return(
        <SafeAreaProvider>
            <TopBar title='Kalastusluvat'/>
        <View style={styles.container}>
            <Text>Permits</Text>
        </View>
        </SafeAreaProvider>
    )
};
export default Permits
