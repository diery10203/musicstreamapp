import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PlaylistDetailScreen({ route, navigation }) {
  const { playlist1 } = route.params;

  const renderSongItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.songItem} 
      onPress={() => navigation.navigate('FullPlay', { currentSong: item })}
    >
      <Image source={playlist1.img} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.trackTitle}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <Text style={styles.songDuration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{playlist1.title}</Text>
      <FlatList
        data={playlist1.songs}
        renderItem={renderSongItem}
        keyExtractor={(item, index) => index.toString()}
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
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 16,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 14,
    color: 'gray',
  },
  songDuration: {
    fontSize: 12,
    color: 'gray',
  },
});
