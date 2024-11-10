import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const suggestions = [
    { id: '1', title: 'Reflection', artist: 'Christina Aguilera', image: require('./assets/Home_Audio Listing/Container_1.png') },
    { id: '2', title: 'In The Stars', artist: 'Benson Boone', image: require('./assets/Home_Audio Listing/Container_2.png') },
    { id: '3', title: 'Reflection', artist: 'Christina Aguilera', image: require('./assets/Home_Audio Listing/Container_1.png') },
    { id: '4', title: 'In The Stars', artist: 'Benson Boone', image: require('./assets/Home_Audio Listing/Container_2.png') },
];

const charts = [
    {
        id: '1', title: 'Top 50 Canada', description: 'Daily chart-toppers update', image: require('./assets/Home_Audio Listing/Container_3.png'), 
        songs: [
            { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_102.png') },
            { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_103.png') },
            { id: '3', title: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_104.png') },
            { id: '4', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_102.png') },
            { id: '5', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_103.png') },
            { id: '6', title: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_104.png') }
        ]},
    { id: '2', title: 'Top 50 Global', description: 'Daily chart-toppers update', image: require('./assets/Home_Audio Listing/Container_4.png'),
        songs: [
        { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_101.png') },
        { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_106.png') },
        { id: '3', title: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_107.png') },
        { id: '4', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_102.png') },
        { id: '5', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_103.png') },
        { id: '6', title: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_104.png') }
    ]
     },
    { id: '3', title: 'Top 50 USA', description: 'Daily chart-toppers update', image: require('./assets/Home_Audio Listing/Container_5.png'),
        songs: [
            { id: '1', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_105.png') },
            { id: '2', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_101.png') },
            { id: '3', stitle: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_104.png') },
            { id: '4', title: 'FLOWER', artist: 'Jessica Gonzalez', plays: '2,1M', duration: '3:36', image: require('./assets/My_Library/Image_102.png') },
            { id: '5', title: 'Shape of You', artist: 'Anthony Taylor', plays: '68M', duration: '03:35', image: require('./assets/My_Library/Image_103.png') },
            { id: '6', title: 'Blinding Lights', artist: 'Brian Bailey', plays: '93M', duration: '04:39', image: require('./assets/My_Library/Image_104.png') }]
     },
];

const trendingAlbums = [
    { id: '1', title: 'ME', artist: 'Jessica Gonzalez', image: require('./assets/Home_Audio Listing/trening_1.png') },
    { id: '2', title: 'Magna nost', artist: 'Brian Thomas', image: require('./assets/Home_Audio Listing/trening_2.png') },
    { id: '3', title: 'Magna', artist: 'Jessica Gonzalez', image: require('./assets/Home_Audio Listing/trening_3.png') },
];

const popularArtists = [
    { 
        id: '1', 
        name: 'Jennifer Wilson', 
        followers: '120K Followers', 
        genre: 'Pop', 
        songs: [
            { id: '1', title: 'Dreams', plays: '50M', duration: '03:15', image: require('./assets/Artist_Profile/Image66.png') },
            { id: '2', title: 'Forever Young', plays: '45M', duration: '04:10', image: require('./assets/Artist_Profile/Image67.png') },
            { id: '3', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/Artist_Profile/Image70.png') },
            { id: '4', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/Artist_Profile/Image71.png') },
        ],
        albums: [
            { id: '1', title: 'Bright Side', image: require('./assets/Artist_Profile/Image71.png') },
            { id: '2', title: 'Night Sky', image: require('./assets/Artist_Profile/Image72.png') },
            { id: '3', title: 'Bright Side', image: require('./assets/Artist_Profile/Image73.png') },
            { id: '4', title: 'Night Sky', image: require('./assets/Artist_Profile/Image74.png') },
        ],
        fansAlsoLike: [
            { id: '1', title: 'Magna nost', artist: 'Jessica Gonzalez', image: require('./assets/Artist_Profile/Image73.png') },
            { id: '2', title: 'Exercitatio', artist: 'Brian Harris', image: require('./assets/Artist_Profile/Image68.png') },
            { id: '3', title: 'Tempor Incid', artist: 'Tyler Andrews', image: require('./assets/Artist_Profile/Image70.png') },
        ],
        image: require('./assets/Home_Audio Listing/singer_1.png') 
    },
    { 
        id: '2', 
        name: 'Elizabeth Hall', 
        followers: '90K Followers', 
        genre: 'Jazz', 
        songs: [
            { id: '1', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/Artist_Profile/Image68.png') },
            { id: '2', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/Artist_Profile/Image69.png') },
            { id: '3', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/Artist_Profile/Image70.png') },
            { id: '4', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/Artist_Profile/Image71.png') },
        ],
        albums: [
            { id: '1', title: 'Jazz Nights', image: require('./assets/Artist_Profile/Image72.png') },
            { id: '2', title: 'Soulful Tunes', image: require('./assets/Artist_Profile/Image73.png') },
            { id: '3', title: 'Bright Side', image: require('./assets/Artist_Profile/Image73.png') },
            { id: '4', title: 'Night Sky', image: require('./assets/Artist_Profile/Image74.png') },
        ],
        fansAlsoLike: [
            { id: '1', title: 'Luminous Flow', artist: 'Sophia Brooks', image: require('./assets/Artist_Profile/Image74.png') },
            { id: '2', title: 'Smooth Groove', artist: 'Chris Wallace', image: require('./assets/Artist_Profile/Image75.png') },
            { id: '3', title: 'Velvet Sky', artist: 'Nina Rivera', image: require('./assets/Artist_Profile/Image66.png') },
        ],
        image: require('./assets/Home_Audio Listing/singer_2.png') 
    },
    { 
        id: '3', 
        name: 'Michael Hall', 
        followers: '105K Followers', 
        genre: 'Rock', 
        songs: [
            { id: '1', title: 'Rock On', plays: '75M', duration: '03:50', image: require('./assets/Artist_Profile/Image68.png') },
            { id: '2', title: 'Thunder Road', plays: '80M', duration: '04:30', image: require('./assets/Artist_Profile/Image70.png') },
            { id: '3', title: 'Blue Moon', plays: '60M', duration: '05:00', image: require('./assets/Artist_Profile/Image70.png') },
            { id: '4', title: 'Smooth Breeze', plays: '30M', duration: '04:45', image: require('./assets/Artist_Profile/Image71.png') },
        ],
        albums: [
            { id: '1', title: 'Electric Soul', image: require('./assets/Artist_Profile/Image75.png') },
            { id: '2', title: 'Rock Legends', image: require('./assets/Artist_Profile/Image74.png') },
            { id: '3', title: 'Bright Side', image: require('./assets/Artist_Profile/Image73.png') },
            { id: '4', title: 'Night Sky', image: require('./assets/Artist_Profile/Image74.png') },
        ],
        fansAlsoLike: [
            { id: '1', title: 'Heavy Waves', artist: 'Jack Daniels', image: require('./assets/Artist_Profile/Image72.png') },
            { id: '2', title: 'Steel Thunder', artist: 'Max Power', image: require('./assets/Artist_Profile/Image69.png') },
            { id: '3', title: 'Electric Vibes', artist: 'Lily Scott', image: require('./assets/Artist_Profile/Image67.png') },
        ],
        image: require('./assets/Home_Audio Listing/singer_3.png') 
    },
];


export default function App({ navigation, route }) {
    const { user } = route.params;
    return (
        <View style={styles.container}>
            {/* Nội dung cuộn */}
            <ScrollView style={styles.scrollView}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.topRow}>
                        <Image source={require('./assets/Home_Audio Listing/list.png')} style={styles.logo} />
                        <View style={styles.icons}>
                            <Icon name="notifications-outline" size={24} color="#333" style={styles.icon} />
                            <Image source={require('./assets/Home_Audio Listing/avater.png')} style={styles.profileImage} />
                        </View>
                    </View>
                    <Text style={styles.greeting}>Good morning,</Text>
                    <Text style={styles.name}>{user.username}</Text>
                    <View style={styles.searchContainer}>
                        <Icon name="search-outline" size={16} color="#888" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="What you want to listen to"
                            placeholderTextColor="#888"
                        />
                    </View>
                </View>

                {/* Nội dung khác */}
                {/* Suggestions for you */}
                <Text style={styles.sectionTitle}>Suggestions for you</Text>
                <FlatList
                    horizontal
                    data={suggestions}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Image source={item.image} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardSubtitle}>{item.artist}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* Charts */}
                <Text style={styles.sectionTitle}>Charts</Text>
                <FlatList
                    horizontal
                    data={charts}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.chartCard} onPress={() => navigation.navigate('ChartDetail', { chartData: item })}>
                            <Image source={item.image} style={styles.cardImage} />
                            <Text style={styles.chartTitle}>{item.title}</Text>
                            <Text style={styles.chartDescription}>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* Trending albums */}
                <Text style={styles.sectionTitle}>Trending albums</Text>
                <FlatList
                    horizontal
                    data={trendingAlbums}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Image source={item.image} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardSubtitle}>{item.artist}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* Popular artists */}
                <Text style={styles.sectionTitle}>Popular artists</Text>
                <FlatList
                    horizontal
                    data={popularArtists}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.artistCard} onPress={() => navigation.navigate('ArtistDetail', { artist: item })}>
                            <Image source={item.image} style={styles.artistImage} />
                            <Text style={styles.artistName}>{item.name}</Text>
                            <TouchableOpacity style={styles.followButton}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

            {/* Footer cố định */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <Icon name="home-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Seach',{ user })}>
                    <Icon name="search-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Feed',{ user })}>
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
    container: { flex: 1, backgroundColor: '#fff' },
    scrollView: { flex: 1, paddingHorizontal: 16 },
    header: { padding: 16, backgroundColor: '#fff' },
    topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    logo: { width: 32, height: 32 },
    icons: { flexDirection: 'row', alignItems: 'center' },
    icon: { marginRight: 16 },
    profileImage: { width: 32, height: 32, borderRadius: 16 },
    greeting: { fontSize: 16, color: '#888', marginTop: 8 },
    name: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    searchContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 12, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 24, backgroundColor: '#f5f5f5' },
    searchIcon: { marginRight: 8 },
    searchInput: { flex: 1, fontSize: 16, color: '#333' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24 },
    card: { marginRight: 16 },
    cardImage: { width: 120, height: 120, borderRadius: 8 },
    cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
    cardSubtitle: { fontSize: 14, color: '#555' },
    chartCard: { padding: 16, backgroundColor: '#eee', borderRadius: 8, marginRight: 16 },
    chartTitle: { fontSize: 16 },
    chartDescription: { fontSize: 14, color: '#555' },
    artistCard: { alignItems: 'center', marginRight: 16 },
    artistImage: { width: 80, height: 80, borderRadius: 40 },
    artistName: { marginTop: 8 },
    followButton: { marginTop: 4, padding: 8, borderRadius: 8, backgroundColor: '#1db954' },
    followText: { color: '#fff' },
    footer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
    footerItem: { alignItems: 'center' },
    footerText: { fontSize: 12, color: '#888', marginTop: 4 },
});
