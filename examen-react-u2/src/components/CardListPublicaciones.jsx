// src/components/CardListPublicaciones.jsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const CardListPublicaciones = ({ publicaciones }) => {
    // Función para manejar el estado del "like"
    const [likedPosts, setLikedPosts] = useState({});

    const handleLikePress = (id) => {
        setLikedPosts((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Cambiar el estado de "like"
        }));
    };

    // Renderizar cada publicación
    const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            {/* Encabezado de la publicación */}
            <View style={styles.header}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.user}</Text>
                    <Text style={styles.postTime}>{item.time}</Text>
                </View>
            </View>

            {/* Contenido de la publicación */}
            <Text style={styles.content}>{item.content}</Text>
            {item.image && <Image source={item.image} style={styles.postImage} />}

            {/* Acciones de la publicación */}
            <View style={styles.actions}>
                <Icon
                    name="thumb-up"
                    type="material"
                    size={24}
                    color={likedPosts[item.id] ? "#1877F2" : "#666"} // Cambia el color según si está "likeado"
                    onPress={() => handleLikePress(item.id)} // Cambia el estado al presionar
                />
                <Icon name="comment" type="material" size={24} color="#666" />
                <Icon name="share" type="material" size={24} color="#666" />
            </View>
        </View>
    );

    return (
        <FlatList
            data={publicaciones}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    postTime: {
        color: '#666',
        fontSize: 12,
    },
    content: {
        fontSize: 14,
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingTop: 10,
    },
    list: {
        marginTop: 10,
    },
});

export default CardListPublicaciones;
