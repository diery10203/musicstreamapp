import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function AlbumsScreen({ navigation, route }) {
  const { user } = route.params;

  const renderAlbumItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.albumItem}
      onPress={() => navigation.navigate('AlbumDetailScreen', { album: item })}
    >
      <Image source={item.img} style={styles.albumImage} />
      <View style={styles.albumInfo}>
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Text style={styles.albumSubtitle}>
          {item.artist} • {item.tracks.length} songs
        </Text>
        <Text style={styles.albumReleaseDate}>Released: {item.releaseDate}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Albums</Text>
      <FlatList
        data={user.album}
        renderItem={renderAlbumItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  albumItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  albumImage: { width: 60, height: 60, borderRadius: 4, marginRight: 16 },
  albumInfo: { flex: 1 },
  albumTitle: { fontSize: 16, fontWeight: 'bold' },
  albumSubtitle: { fontSize: 14, color: 'gray' },
  albumReleaseDate: { fontSize: 12, color: 'gray' },
});
