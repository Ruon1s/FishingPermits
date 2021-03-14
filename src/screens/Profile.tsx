import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";
import TopBar from "../components/TopBar";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Profile: React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <SafeAreaProvider>
            <TopBar title='Profiili'/>
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
        </SafeAreaProvider>
    );
};
export default Profile
