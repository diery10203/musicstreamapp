import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function PlaylistsScreen({navigation, route }) {
  const { user } = route.params;

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem} 
    onPress={() => navigation.navigate('PlayListScren', { playlist1: item })}
    >
      <Image source={item.img} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistSubtitle}>
          {item.artist} • {item.songs.length} songs
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your playlists</Text>
      <FlatList
        data={user.playlist}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 16,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
