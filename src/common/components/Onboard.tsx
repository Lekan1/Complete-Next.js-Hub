import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    NativeSyntheticEvent,
    NativeScrollEvent,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#fff', white: '#336B6B' };

const slides = [
    {
        id: '1',
        image: require('../../../assets/onboard1.png'),
        title: 'Space',
        subtitle: 'We bring you a comfortable space with the best furniture.',
    },
    {
        id: '2',
        image: require('../../../assets/onboard2.png'),
        title: 'Comfortable',
        subtitle: 'We bring consumers the best, most comfortable products, so that users can enjoy the best way.',
    },
    {
        id: '3',
        image: require('../../../assets/onboard3.png'),
        title: 'Delivery',
        subtitle: 'Wherever you are in this country, we will ship the furniture to you. Safe, fast and free.',
    },
];

const Slide = ({ item }: any) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={item?.image} style={{ height: '75%', width, resizeMode: 'contain' }} />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const Onboard = (): JSX.Element => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef<any>();

    const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}
            >
                {/* Indicator container */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>GET STARTED</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    styles.btn,
                                    {
                                        borderColor: COLORS.white,
                                        borderWidth: 1,
                                        backgroundColor: 'transparent',
                                    },
                                ]}
                                onPress={skip}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: COLORS.white,
                                    }}
                                >
                                    SKIP
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity activeOpacity={0.8} onPress={goToNextSlide} style={styles.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                    }}
                                >
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
                ref={ref}
                data={slides}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                horizontal
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboard;
