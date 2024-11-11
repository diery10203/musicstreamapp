import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
export default function LibraryScreen({navigation, route }) {
  const { user } = route.params;

  const renderLibraryItem = ({ item }) => {
    if (item.type === 'artist') {
      return (
        <View style={styles.artistContainer}>
          <Image source={require('./assets/AudioListing/Image88.png')} style={styles.artistAvatar} />
          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>{item.name}</Text>
            <Text style={styles.artistFollowers}>{item.followers}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>{item.isFollowing ? 'Follow' : 'Unfollow'}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (item.type === 'track') {
      return (
        <View style={styles.trackContainer}>
          <Image source={item.image} style={styles.trackImage} />
          <View style={styles.trackInfo}>
            <Text style={styles.trackTitle}>{item.trackTitle}</Text>
            <Text style={styles.trackArtist}>{item.artist}</Text>
            <Text style={styles.trackPlays}>{item.plays} • {item.duration}</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name={item.isLiked ? 'heart' : 'heart-o'} size={24} color="dodgerblue" />
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Library</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('Playlist', {user})}>
          <Text style={styles.tabText}>Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('Abuml', {user})}>
          <Text style={styles.tabText}>New tag</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('Playlist', {user})}>
          <Text style={styles.tabText}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('Abuml', {user})}>
          <Text style={styles.tabText}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('Abuml', {user})}>
          <Text style={styles.tabText}>Artists</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={user.library}
        keyExtractor={(item) => item.id}
        renderItem={renderLibraryItem}
      />

<View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Home_Audio', {user})}>
                    <Icon name="home-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Seach', {user})}>
                    <Icon name="search-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Feed', {user})}>
                    <Icon name="layers-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Lirary', { user })}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
            </View>


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: 'dodgerblue',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  tabTextActive: {
    fontSize: 16,
    color: 'white',
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  artistAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  artistInfo: {
    flex: 1,
    marginLeft: 16,
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistFollowers: {
    fontSize: 14,
    color: '#888',
  },
  followButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 16,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trackArtist: {
    fontSize: 14,
    color: '#888',
  },
  trackPlays: {
    fontSize: 14,
    color: '#888',
  },
  footer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
  footerItem: { alignItems: 'center' },
  footerText: { fontSize: 12, color: '#888', marginTop: 4 },
});
