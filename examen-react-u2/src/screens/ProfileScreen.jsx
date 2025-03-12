import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import CardListPublicaciones from '../components/CardListPublicaciones'; // Importamos el componente

export default function ProfileScreen() {
  const navigation = useNavigation();

  // Datos de ejemplo para las publicaciones
  const publicacionesEjemplo = [
    {
      id: '1',
      user: 'Angel Gustavo',
      time: 'Hace 2 horas',
      content: 'Hoy es un gran día para aprender más sobre React Native 🚀',
      avatar: require('../assets/img/img_uso_gen.png'),
      image: require('../assets/img/img_uso_gen.png'),
    },
    {
      id: '2',
      user: 'Angel Gustavo',
      time: 'Hace 3 días',
      content: 'Visitando la UTEZ, excelente ambiente universitario.',
      avatar: require('../assets/img/img_uso_gen.png'),
      image: null,
    }
  ];

  // Encabezado de la lista
  const renderHeader = () => (
    <View>
      {/* 🔹 Barra superior */}
      <View style={styles.topBar}>
        <Icon name="arrow-left" type="feather" color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.topBarText}>Mi Perfil</Text>
        <View style={styles.topBarIcons}>
          <Icon name="more-vertical" type="feather" color="black" />
        </View>
      </View>

      {/* 🔹 Sección de portada */}
      <View style={styles.coverContainer}>
        <Image 
          source={require('../assets/img/img_uso_gen.png')} 
          style={styles.coverPhoto} 
        />
        {/* Contenedor de la imagen de perfil */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/img/img_uso_gen.png')}
            style={styles.profileImage}
          />
          {/* Icono de cámara para cambiar la foto de perfil */}
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Icon name="camera" type="feather" color="white" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Nombre del usuario */}
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>Angel Gustavo</Text>
      </View>

      {/* 🔹 Botones debajo de la foto */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.mainActionButton}>
          <Icon name="plus" type="feather" color="white" />
          <Text style={styles.mainActionText}>Add to Story</Text>
        </TouchableOpacity>

        {/* Botón de tres puntos */}
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>...</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Sección de datos personales */}
      <View style={styles.sectionContainer}>
        <View style={styles.infoItem}>
          <Icon name="map-pin" type="feather" color="#666" size={20} />
          <Text style={styles.infoText}>Vivo en Morelos</Text>
        </View>

        <View style={[styles.infoItem, styles.marginTop]}>
          <Icon name="book" type="feather" color="#666" size={20} />
          <Text style={styles.infoText}>Estudio en la UTEZ</Text>
        </View>

        <View style={[styles.infoItem, styles.marginTop]}>
          <Icon name="music" type="feather" color="#666" size={20} />
          <Text style={styles.infoText}>Música favorita: Pop/Rock</Text>
        </View>
        
        {/* Botón de editar detalles públicos */}
        <TouchableOpacity style={styles.editDetailsButton}>
          <Icon name="edit-2" type="feather" color="#1877F2" size={18} />
          <Text style={styles.editDetailsText}>Editar detalles públicos</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Sección de Publicaciones */}
      <View style={styles.publicacionesSection}>
        <View style={styles.publicacionesHeader}>
          <Text style={styles.publicacionesTitle}>Publicaciones</Text>
          <TouchableOpacity>
            <Text style={styles.verTodoText}>Ver todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={publicacionesEjemplo}
        renderItem={({ item }) => <CardListPublicaciones publicaciones={[item]} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  flatListContent: { paddingBottom: 20 }, // Espacio al final de la lista

  // Barra superior
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topBarText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    textAlign: 'center',
  },
  topBarIcons: {
    flexDirection: 'row',
  },

  // Sección de portada
  coverContainer: {
    position: 'relative',
    height: 200,
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImageContainer: {
    position: 'absolute',
    bottom: -50, 
    alignSelf: 'center', 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: 'white',
  },
  // Contenedor del icono de cámara
  cameraIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1877F2',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },

  // Contenedor del nombre de usuario
  userNameContainer: {
    alignItems: 'center',
    marginTop: 55,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },

  // Contenedor de botones
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  // Botón principal (Add to Story)
  mainActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    justifyContent: 'center',
    flex: 1,
  },
  mainActionText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  // Botón de tres puntos
  moreButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 5,
  },
  moreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  // Sección de información
  sectionContainer: {
    padding: 20,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#212529',
    flex: 1,
  },
  marginTop: {
    marginTop: 10,
  },
  
  // Botón de editar detalles públicos
  editDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#dddfe2',
  },
  editDetailsText: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },

  // Sección de Publicaciones
  publicacionesSection: {
    padding: 15,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  publicacionesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  publicacionesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  verTodoText: {
    color: '#1877F2',
    fontWeight: '500',
  },
});