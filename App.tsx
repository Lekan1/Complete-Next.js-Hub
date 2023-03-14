import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Button, Input, Spinner } from 'native-base';

const App = () => {
    const [value, setValue] = React.useState<boolean>(false);
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text>Hello World</Text>
                <Button size={'lg'} isLoading={value} onPress={() => setValue(true)}>
                    Button
                </Button>
                <Input placeholder="Type here" />
                <Spinner />
                <Spinner color="emerald.500" />
                <Spinner color="warning.500" />
                <Spinner color="indigo.500" />
                <Spinner color="cyan.500" size="lg" />
            </View>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
