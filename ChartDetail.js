import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import FullPlayerScreen from './FullPlayerScreen';
export default function ChartDetailScreen({ route }) {
    const { chartData } = route.params;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [showFullPlayer, setShowFullPlayer] = useState(false);

    const handlePlayPress = (song) => {
        setIsPlaying(true);
        setCurrentSong(song);
        setShowFullPlayer(true); 
    };

    return (
        <View style={styles.container}>
            {showFullPlayer && currentSong ? (
                <FullPlayerScreen
                    currentSong={currentSong}
                    onClose={() => setShowFullPlayer(false)} 
                />
            ) : (
                <>
                    <View style={styles.header}>
                        <Image source={chartData.image} style={styles.chartImage} />
                        <View style={styles.chartInfo}>
                            <Text style={styles.chartTitle}>{chartData.title}</Text>
                            <Text style={styles.chartDuration}>{chartData.duration}</Text>
                            <Text style={styles.chartDescription}>{chartData.description}</Text>
                        </View>
                    </View>
                    <View style={styles.footerIcons}>
                        <TouchableOpacity>
                            <FontAwesome name="heart-o" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moreIcon}>
                            <FontAwesome name="ellipsis-h" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.rightIcons}>
                            <TouchableOpacity>
                                <FontAwesome name="random" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePlayPress(chartData.songs[0])}>
                                <FontAwesome name={isPlaying ? 'pause-circle' : 'play-circle'} size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={chartData.songs}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePlayPress(item)}>
                                <View style={styles.songItem}>
                                    <Image source={item.image} style={styles.songImage} />
                                    <View style={styles.songInfo}>
                                        <Text style={styles.songTitle}>{item.title}</Text>
                                        <Text style={styles.songArtist}>{item.artist}</Text>
                                        <Text style={styles.songDetails}>{item.plays} • {item.duration}</Text>
                                    </View>
                                    <FontAwesome name="ellipsis-h" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                    {isPlaying && currentSong && (
                        <TouchableOpacity style={styles.nowPlaying} onPress={() => setShowFullPlayer(true)}>
                            <Image source={currentSong.image} style={styles.nowPlayingImage} />
                            <View style={styles.nowPlayingInfo}>
                                <Text style={styles.nowPlayingTitle}>{currentSong.title}</Text>
                                <Text style={styles.nowPlayingArtist}>{currentSong.artist}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flex: 0.5 }}>
                                <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
                                    <FontAwesome name="heart-o" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
                                    <FontAwesome name={isPlaying ? 'pause-circle' : 'play-circle'} size={30} color="white" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                </>
            )}

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <Icon name="home-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Icon name="search-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Icon name="layers-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
    chartImage: { width: 100, height: 100, borderRadius: 8, marginRight: 16 },
    chartInfo: { flex: 1 },
    chartTitle: { fontSize: 24, fontWeight: 'bold' },
    chartDuration: { fontSize: 16, color: '#888', marginBottom: 4 },
    chartDescription: { fontSize: 14, color: '#666' },
    songItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    songImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
    songInfo: { flex: 1 },
    songTitle: { fontSize: 16, fontWeight: 'bold' },
    songArtist: { fontSize: 14, color: '#555' },
    songDetails: { fontSize: 12, color: '#888' },
    footerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    rightIcons: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    nowPlaying: {
        position: 'absolute',
        bottom: 65,
        left: 0,
        right: 0,
        backgroundColor: '#1c1c1c',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    nowPlayingImage: { width: 40, height: 40, borderRadius: 8, marginRight: 10 },
    nowPlayingInfo: { flex: 1 },
    nowPlayingTitle: { fontSize: 14, color: 'white', fontWeight: 'bold' },
    nowPlayingArtist: { fontSize: 12, color: '#aaaaaa' },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        height: 50,
    },
    footerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5
    },
    footerText: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },
});
