import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AlbumDetailScreen({ route, navigation }) {
  const { album } = route.params;

  const renderTrackItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.trackItem}
      onPress={() => navigation.navigate('FullPlay', { currentSong: item })}
    >
      <Image source={item.img} style={styles.trackImage} />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.trackTitle}</Text>
        <Text style={styles.trackDuration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.albumTitle}>{album.title}</Text>
      <Text style={styles.albumArtist}>by {album.artist}</Text>
      <FlatList
        data={album.tracks}
        renderItem={renderTrackItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  albumTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  albumArtist: { fontSize: 18, color: 'gray', marginBottom: 16 },
  trackItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  trackImage: { width: 50, height: 50, borderRadius: 4, marginRight: 10 },
  trackInfo: { flex: 1 },
  trackTitle: { fontSize: 16 },
  trackDuration: { fontSize: 14, color: 'gray' },
});
