import React from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ArtistDetailScreen({ route }) {
    const { artist } = route.params;

    return (
        <View style={styles.container}>
            {/* Nội dung chính */}
            <ScrollView style={styles.scrollContent}>
                {/* Artist Header */}
                <View style={styles.header}>
                    <Image source={artist.image} style={styles.artistImageLarge} />
                    <Text style={styles.artistName}>{artist.name}</Text>
                    <Text style={styles.artistFollowers}>{artist.followers}</Text>
                    <Text style={styles.artistGenre}>{artist.genre}</Text>
                </View>
                
                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moreIcon}>
                        <FontAwesome name="ellipsis-h" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shuffleIcon}>
                        <FontAwesome name="random" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButton}>
                        <FontAwesome name="play-circle" size={48} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Popular Songs */}
                <Text style={styles.sectionTitle}>Popular Songs</Text>
                <FlatList
                    data={artist.songs}
                    renderItem={({ item }) => (
                        <View style={styles.songItem}>
                            <Image source={item.image} style={styles.songImage} />
                            <View style={styles.songInfo}>
                                <Text style={styles.songTitle}>{item.title}</Text>
                                <Text style={styles.songDetails}>{artist.name}</Text>
                                <Text style={styles.songDetails}>{item.plays} • {item.duration}</Text>
                            </View>
                            <FontAwesome name="ellipsis-h" size={24} color="black" />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />

                {/* Albums */}
                <Text style={styles.sectionTitle}>Albums</Text>
                <FlatList
                    data={artist.albums}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.albumItem}>
                            <Image source={item.image} style={styles.albumImage} />
                            <Text style={styles.albumTitle}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* About Section */}
                <Text style={styles.sectionTitle}>About</Text>
                <View style={styles.aboutSection}>
                    <Image source={require('./assets/Artist_Profile/Image73.png')} style={styles.aboutImage} />
                    <Text style={styles.aboutText}>
                        Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure.
                        Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit.
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewMore}>View more</Text>
                    </TouchableOpacity>
                </View>

                {/* Fans also like Section */}
                <Text style={styles.sectionTitle}>Fans also like</Text>
                <FlatList
                    data={artist.fansAlsoLike}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.fanItem}>
                            <Image source={item.image} style={styles.fanImage} />
                            <Text style={styles.fanTitle}>{item.title}</Text>
                            <Text style={styles.fanArtist}>{item.artist}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
                 <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Footer cố định */}
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
    container: { flex: 1, backgroundColor: 'white' },
    scrollContent: { flexGrow: 1, paddingBottom: 60 }, // Để dành không gian cho footer
    header: { alignItems: 'center', padding: 20 },
    artistImageLarge: { width: 150, height: 150, borderRadius: 75 },
    artistName: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
    artistFollowers: { fontSize: 14, color: '#888' },
    artistGenre: { fontSize: 14, color: '#888' },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%'
    },
    followButton: { backgroundColor: '#eee', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, marginRight: 10 },
    followText: { fontSize: 16, fontWeight: 'bold' },
    moreIcon: { marginHorizontal: 10 },
    shuffleIcon: { marginHorizontal: 10 },
    playButton: { marginLeft: 10 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 16, paddingHorizontal: 16 },
    songItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#ddd' },
    songImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
    songInfo: { flex: 1 },
    songTitle: { fontSize: 16, fontWeight: 'bold' },
    songDetails: { fontSize: 12, color: '#888' },
    albumItem: { marginRight: 10, alignItems: 'center', padding: 10 },
    albumImage: { width: 100, height: 100, borderRadius: 8 },
    albumTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 8 },
    aboutSection: { marginBottom: 20 },
    aboutImage: { width: '100%', height: 150, borderRadius: 8, marginBottom: 10 },
    aboutText: { fontSize: 14, color: '#666', marginBottom: 10 },
    viewMore: { fontSize: 14, color: '#1e90ff' },
    fanItem: { marginRight: 16, alignItems: 'center' },
    fanImage: { width: 100, height: 100, borderRadius: 8, marginBottom: 8 },
    fanTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
    fanArtist: { fontSize: 12, color: '#888', textAlign: 'center' },
    bottomPadding: { height: 80 },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    footerItem: { alignItems: 'center' },
    footerText: { fontSize: 12, color: '#888', marginTop: 4 },
});
