import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet } from 'react-native';

const Onboard = (): JSX.Element => (
    <Onboarding
        bottomBarColor="#fff"
        titleStyles={{ fontSize: 25 }}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../../assets/onboard2.png')} style={styles.image} />,
                title: 'Space',
                subtitle: 'We bring you a comfortable space with the best furniture.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../../assets/onboard3.png')} style={styles.image} />,
                title: 'Guarantee',
                subtitle: 'All our products will be warranted within 1 year. ',
            },
        ]}
    />
);

const styles = StyleSheet.create({
    image: {
        width: 380, // set the width of the image
        height: 300, // set the height of the image
    },
});

export default Onboard;
