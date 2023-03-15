import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Onboard from './src/common/components/Onboard';

const App = () => {
    return (
        <NativeBaseProvider>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Onboard />
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
