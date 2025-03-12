import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    const scaleValue = useRef(new Animated.Value(0.8)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.parallel([
            Animated.spring(scaleValue, {
                toValue: 1,
                friction: 2,
                useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
        ]);

        animation.start(() => {
            setTimeout(() => {
                navigation.replace('FeedScreen');
            }, 1500);
        });

        return () => {
            animation.stop();
            scaleValue.setValue(0.8);
            opacityValue.setValue(0);
        };
    }, []);

    return (
        <View style={styles.container}>
            {/* Logo animado */}
            <Animated.View style={[styles.logoContainer, {
                transform: [{ scale: scaleValue }],
                opacity: opacityValue,
            }]}>
                <Image
                    source={require('../assets/img/Facebook.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Contenedor para el texto y los iconos (pegado al fondo) */}
            <View style={styles.bottomContainer}>
                {/* Texto "Facebook" */}
                <Text style={styles.name}>Facebook</Text>

                {/* Iconos de Meta */}
                <View style={styles.metaIconsContainer}>
                    <Image
                        source={require('../assets/img/Instagram.png')} // Reemplaza con la ruta correcta
                        style={styles.metaIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/img/WhatsApp.png')} // Reemplaza con la ruta correcta
                        style={styles.metaIcon}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/img/Messenger.png')} // Reemplaza con la ruta correcta
                        style={styles.metaIcon}
                        resizeMode="contain"
                    />
                    {/* Agrega más iconos según sea necesario */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra el logo verticalmente
        alignItems: 'center', // Centra el logo horizontalmente
        backgroundColor: '#FFFFFF', // Fondo blanco
    },
    logoContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logo: {
        width: 180,
        height: 180,
    },
    bottomContainer: {
        position: 'absolute', // Posiciona el contenedor en la parte inferior
        bottom: 20, // Margen inferior
        alignItems: 'center', // Centra el contenido horizontalmente
    },
    name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
    },
    metaIconsContainer: {
        flexDirection: 'row', // Alinea los iconos horizontalmente
        marginTop: 10, // Espacio entre el texto y los iconos
    },
    metaIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10, // Espacio entre los iconos
    },
});

export default SplashScreen;