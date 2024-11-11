
import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
export default function SongSearchScreen({ navigation ,route}) {
    const { user } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);

    const artistsData = [
        {
            id: '1',
            name: 'Jennifer Wilson',
            followers: '120K Followers',
            genre: 'Pop',
            songs: [
                { id: '1', title: 'Dreams', plays: '50M', duration: '03:15', image: require('./assets/AudioListing/Image88.png') },
                { id: '2', title: 'Forever Young', plays: '45M', duration: '04:10', image: require('./assets/AudioListing/Image88.png') },
                { id: '3', title: 'Bright Side', plays: '30M', duration: '02:58', image: require('./assets/AudioListing/Image88.png') },
                { id: '4', title: 'Heartbeat', plays: '42M', duration: '03:45', image: require('./assets/AudioListing/Image88.png') },
                { id: '5', title: 'Summer Nights', plays: '55M', duration: '03:05', image: require('./assets/AudioListing/Image88.png') },
                { id: '6', title: 'Rainy Days', plays: '38M', duration: '03:30', image: require('./assets/AudioListing/Image88.png') },
                { id: '7', title: 'Eternal Sunshine', plays: '40M', duration: '04:12', image: require('./assets/AudioListing/Image88.png') },
                { id: '8', title: 'Pure Joy', plays: '65M', duration: '03:50', image: require('./assets/AudioListing/Image88.png') },
                { id: '9', title: 'Fantasy', plays: '60M', duration: '03:20', image: require('./assets/AudioListing/Image88.png') },
                { id: '10', title: 'Into the Light', plays: '72M', duration: '03:55', image: require('./assets/AudioListing/Image88.png') },
            ],
            image: require('./assets/AudioListing/Image88.png'),
        },
        {
            id: '2',
            name: 'Elizabeth Hall',
            followers: '90K Followers',
            genre: 'Jazz',
            songs: [
                { id: '1', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/AudioListing/Image88.png') },
                { id: '2', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/AudioListing/Image88.png') },
                { id: '3', title: 'Soulful Tunes', plays: '50M', duration: '04:10', image: require('./assets/AudioListing/Image88.png') },
                { id: '4', title: 'Midnight Melody', plays: '42M', duration: '05:15', image: require('./assets/AudioListing/Image88.png') },
                { id: '5', title: 'Golden Harmony', plays: '55M', duration: '03:05', image: require('./assets/AudioListing/Image88.png') },
                { id: '6', title: 'Endless Night', plays: '38M', duration: '03:30', image: require('./assets/AudioListing/Image88.png') },
                { id: '7', title: 'Gentle Waves', plays: '40M', duration: '04:12', image: require('./assets/AudioListing/Image88.png') },
                { id: '8', title: 'Echoes', plays: '45M', duration: '05:20', image: require('./assets/AudioListing/Image88.png') },
                { id: '9', title: 'Whispers', plays: '60M', duration: '03:20', image: require('./assets/AudioListing/Image88.png') },
                { id: '10', title: 'Golden Dream', plays: '70M', duration: '03:55', image: require('./assets/AudioListing/Image88.png') },
            ],
            image: require('./assets/AudioListing/Image88.png'),
        },
        {
            id: '3',
            name: 'Michael Hall',
            followers: '105K Followers',
            genre: 'Rock',
            songs: [
                { id: '1', title: 'Rock On', plays: '75M', duration: '03:50', image: require('./assets/AudioListing/Image88.png') },
                { id: '2', title: 'Thunder Road', plays: '80M', duration: '04:30', image: require('./assets/AudioListing/Image88.png') },
                { id: '3', title: 'Electric Soul', plays: '50M', duration: '04:15', image: require('./assets/AudioListing/Image88.png') },
                { id: '4', title: 'Night Drive', plays: '65M', duration: '03:55', image: require('./assets/AudioListing/Image88.png') },
                { id: '5', title: 'Fire and Ice', plays: '55M', duration: '03:40', image: require('./assets/AudioListing/Image88.png') },
                { id: '6', title: 'Power Chords', plays: '45M', duration: '04:05', image: require('./assets/AudioListing/Image88.png') },
                { id: '7', title: 'Rise Above', plays: '58M', duration: '04:25', image: require('./assets/AudioListing/Image88.png') },
                { id: '8', title: 'Riff Machine', plays: '60M', duration: '03:35', image: require('./assets/AudioListing/Image88.png') },
                { id: '9', title: 'Headbanger', plays: '63M', duration: '03:30', image: require('./assets/AudioListing/Image88.png') },
                { id: '10', title: 'Rebel Heart', plays: '70M', duration: '04:10', image: require('./assets/AudioListing/Image88.png') },
            ],
            image: require('./assets/AudioListing/Image88.png'),
        },
        {
            id: '4',
            name: 'Ariana Rivera',
            followers: '130K Followers',
            genre: 'Pop',
            songs: [
                { id: '1', title: 'Love Story', plays: '100M', duration: '03:40', image: require('./assets/AudioListing/Image88.png') },
                { id: '2', title: 'Happier', plays: '98M', duration: '03:20', image: require('./assets/AudioListing/Image88.png') },
                { id: '3', title: 'New Day', plays: '70M', duration: '03:35', image: require('./assets/AudioListing/Image88.png') },
                { id: '4', title: 'Best Life', plays: '95M', duration: '03:15', image: require('./assets/AudioListing/Image88.png') },
                { id: '5', title: 'Stay', plays: '90M', duration: '04:05', image: require('./assets/AudioListing/Image88.png') },
                { id: '6', title: 'Firework', plays: '85M', duration: '03:30', image: require('./assets/AudioListing/Image88.png') },
                { id: '7', title: 'True Colors', plays: '80M', duration: '03:50', image: require('./assets/AudioListing/Image88.png') },
                { id: '8', title: 'Lost in You', plays: '77M', duration: '03:55', image: require('./assets/AudioListing/Image88.png') },
                { id: '9', title: 'Runaway', plays: '65M', duration: '04:00', image: require('./assets/AudioListing/Image88.png') },
                { id: '10', title: 'Take Me Home', plays: '60M', duration: '03:25', image: require('./assets/AudioListing/Image88.png') },
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
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                <Image source={item.image} />
                <View style={{marginLeft:10}}>
                    <Text style={styles.resultText}>{item.title}</Text>
                    <Text style={styles.resultSubText}>{item.duration} • {item.plays} plays</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

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
