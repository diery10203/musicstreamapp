import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';

export default function SongSearchScreen({ navigation, route }) {
    const { user } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const artistsData = [
        {
            id: '1',
            name: 'Jennifer Wilson',
            followers: '120K Followers',
            genre: 'Pop',
            songs: [
                { id: '1', title: 'Dreams', plays: '50M', duration: '03:15', image: require('./assets/AudioListing/Image88.png'), audioFile: require('./assets/Song/zig.mp3') },
                { id: '2', title: 'Forever Young', plays: '45M', duration: '04:10', image: require('./assets/AudioListing/Image89.png'), audioFile: require('./assets/Song/cao20.mp3') },
                { id: '3', title: 'Bright Side', plays: '30M', duration: '02:58', image: require('./assets/AudioListing/Image86.png'), audioFile: require('./assets/Song/cao20.mp3') },
                { id: '4', title: 'Heartbeat', plays: '42M', duration: '03:45', image: require('./assets/AudioListing/Image87.png'), audioFile: require('./assets/Song/cao20.mp3') },
            ],
            image: require('./assets/AudioListing/Image88.png'),
        },
        {
            id: '2',
            name: 'Elizabeth Hall',
            followers: '90K Followers',
            genre: 'Jazz',
            songs: [
                { id: '1', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/AudioListing/Image88.png'), audioFile: require('./assets/Song/cao20.mp3') },
                { id: '2', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/AudioListing/Image88.png'), audioFile: require('./assets/Song/cao20.mp3') },
            ],
            image: require('./assets/AudioListing/Image88.png'),
        },
    ];
    

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text) {
            const results = artistsData.flatMap(artist =>
                artist.songs.filter(song =>
                    song.title.toLowerCase().includes(text.toLowerCase())
                )
            );
            setFilteredSongs(results);
        } else {
            setFilteredSongs([]);
        }
    };

    
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.resultItem}
            onPress={() => navigation.navigate('FullPlay', { currentSong: item })}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 8 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.resultText}>{item.title}</Text>
                    <Text style={styles.resultSubText}>{item.duration} • {item.plays} plays</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        // Giải phóng tài nguyên khi component bị hủy
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search songs"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    autoFocus={true}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => handleSearch('')} style={styles.clearButton}>
                        <FontAwesome name="times-circle" size={20} color="#888" />
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                data={filteredSongs}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={() => (
                    <Text style={styles.noResultsText}>No results found</Text>
                )}
            />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home_Audio', { user })}>
                    <Icon name="home-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Seach', { user })}>
                    <Icon name="search-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Feed', { user })}>
                    <Icon name="layers-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Lirary', { user })}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('ChatBox')}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Support</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 16 },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
    },
    clearButton: {
        marginLeft: 8,
    },
    resultItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    resultText: {
        fontSize: 16,
        color: '#333',
    },
    resultSubText: {
        fontSize: 14,
        color: '#888',
    },
    noResultsText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    footer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
    footerItem: { alignItems: 'center' },
    footerText: { fontSize: 12, color: '#888', marginTop: 4 },
});
