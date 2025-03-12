import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {
    const navigation = useNavigation();
    const [postText, setPostText] = useState('');

    // Datos de ejemplo para historias
    const stories = [
        { id: '1', name: 'Tu historia', image: require('../assets/img/img_uso_gen.png') },
        { id: '2', name: 'Amigo 1', image: require('../assets/img/img_uso_gen.png') },
        { id: '3', name: 'Amigo 2', image: require('../assets/img/img_uso_gen.png') },
        { id: '4', name: 'Amigo 3', image: require('../assets/img/img_uso_gen.png') },
        { id: '5', name: 'Amigo 5', image: require('../assets/img/img_uso_gen.png') },
    ];

    // Datos de ejemplo para publicaciones
    const posts = [
        {
            id: '1',
            user: 'Juan Pérez',
            avatar: require('../assets/img/img_uso_gen.png'),
            content: '¡Hoy es un gran día! 🌞',
            image: require('../assets/img/img_uso_gen.png'),
            time: '2h',
        },
        {
            id: '2',
            user: 'María Gómez',
            avatar: require('../assets/img/img_uso_gen.png'),
            content: 'Disfrutando del fin de semana 🏖️',
            time: '5h',
        },
        {
            id: '3',
            user: 'Pérez',
            avatar: require('../assets/img/img_uso_gen.png'),
            content: '¡Hoy es un mal día! :(',
            image: require('../assets/img/img_uso_gen.png'),
            time: '5h',
        },
        {
            id: '4',
            user: 'María Gómez',
            avatar: require('../assets/img/img_uso_gen.png'),
            content: 'Help me please',
            time: '5h',
        },
    ];

    // Renderizar cada historia
    const renderStory = ({ item }) => (
        <TouchableOpacity style={styles.storyContainer}>
            <Image source={item.image} style={styles.storyImage} />
            <Text style={styles.storyText}>{item.name}</Text>
        </TouchableOpacity>
    );

    // Renderizar cada publicación
    const renderPost = (item) => (
        <View style={styles.postContainer} key={item.id}>
            {/* Encabezado de la publicación */}
            <View style={styles.postHeader}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.postUserInfo}>
                    <Text style={styles.userName}>{item.user}</Text>
                    <Text style={styles.postTime}>{item.time}</Text>
                </View>
                <Icon name="more-vert" type="material" size={24} color="#666" />
            </View>

            {/* Contenido de la publicación */}
            <Text style={styles.postContent}>{item.content}</Text>
            {item.image && <Image source={item.image} style={styles.postImage} />}

            {/* Acciones de la publicación */}
            <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="thumb-up" type="material" size={20} color="#666" />
                    <Text style={styles.actionText}>Me gusta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="comment" type="material" size={20} color="#666" />
                    <Text style={styles.actionText}>Comentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="share" type="material" size={20} color="#666" />
                    <Text style={styles.actionText}>Compartir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Barra superior con título */}
            <View style={styles.topBar}>
                <Text style={styles.logoText}>facebook</Text>
                <View style={styles.iconsContainer}>
                    <Icon name="search" type="material" size={28} color="#000" />
                    <Icon name="message" type="material" size={28} color="#000" />
                </View>
            </View>

            {/* Barra de iconos debajo del título */}
            <View style={styles.iconBar}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="home" type="material" size={28} color="#1877F2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="people" type="material" size={28} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="ondemand-video" type="material" size={28} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="notifications" type="material" size={28} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Icon name="person" type="material" size={28} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="menu" type="material" size={28} color="#666" />
                </TouchableOpacity>
            </View>

            {/* Contenedor principal con ScrollView */}
            <ScrollView style={styles.scrollContainer}>
                {/* Sección para crear publicaciones */}
                <View style={styles.createPostContainer}>
                    <View style={styles.createPostHeader}>
                        <Image source={require('../assets/img/img_uso_gen.png')} style={styles.createPostAvatar} />
                        <TextInput
                            style={styles.postInput}
                            placeholder="¿Qué estás pensando?"
                            value={postText}
                            onChangeText={setPostText}
                        />
                    </View>
                    <View style={styles.postButtons}>
                        <TouchableOpacity style={styles.postButton}>
                            <Icon name="photo" type="material" size={24} color="#4CAF50" />
                            <Text style={styles.postButtonText}>Foto/Video</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postButton}>
                            <Icon name="tag-faces" type="material" size={24} color="#FDD835" />
                            <Text style={styles.postButtonText}>Sentimiento/Actividad</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Lista de historias */}
                <FlatList
                    horizontal
                    data={stories}
                    renderItem={renderStory}
                    keyExtractor={(item) => item.id}
                    style={styles.storiesList}
                    showsHorizontalScrollIndicator={false}
                />

                {/* Lista de publicaciones */}
                <View style={styles.postsList}>
                    {posts.map((post) => renderPost(post))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F5',
    },
    scrollContainer: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1877F2',
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        marginTop: 10,
    },
    iconButton: {
        alignItems: 'center',
    },
    createPostContainer: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
    },
    createPostHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    createPostAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    postInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 20,
        padding: 10,
        marginLeft: 10,
    },
    postButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    postButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    postButtonText: {
        color: '#666',
    },
    storiesList: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
    },
    storyContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
        width: 110,
    },
    storyImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1877F2',
    },
    storyText: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
    },
    postsList: {
        marginTop: 10,
    },
    postContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    postUserInfo: {
        marginLeft: 10,
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    postTime: {
        color: '#666',
        fontSize: 12,
    },
    postContent: {
        fontSize: 14,
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    actionText: {
        color: '#666',
    },
});

export default FeedScreen;