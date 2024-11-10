import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import React from 'react';



export default function App({navigation}) {
    const users = [
        {
          username: 'admin',
          password: '123',
          library: [
            {
              id: '1',
              name: 'Mer Watson',
              followers: '1.234K Followers',
              isFollowing: true,
              type: 'artist',
            },
            {
              id: '2',
              trackTitle: 'FLOWER',
              artist: 'Jessica Gonzalez',
              plays: '2.1M',
              duration: '3:36',
              isLiked: true,
              type: 'track',
              image: require('./assets/AudioListing/Image89.png'),
            },
            // Các bài hát hoặc nghệ sĩ khác...
          ],
          playlist: [
            {
              id: 'p1',
              title: 'My Favorite Songs',
              description: 'A collection of my favorite tracks.',
              songs: [
                { trackTitle: 'Sunshine', artist: 'Alice Brown', duration: '3:45' },
                { trackTitle: 'Moonlight', artist: 'David White', duration: '4:20' },
              ],
              img: require('./assets/AudioListing/Image88.png'), 
            },
            {
              id: 'p2',
              title: 'Workout Hits',
              description: 'Energetic songs for working out.',
              songs: [
                { trackTitle: 'Push It', artist: 'Mark Smith', duration: '3:10' },
                { trackTitle: 'Run Fast', artist: 'Emma Stone', duration: '2:50' },
              ],
              img: require('./assets/AudioListing/Image88.png'), 
            },
            // Các playlist khác...
          ],
          album: [
            {
              id: 'a1',
              title: 'Greatest Hits',
              artist: 'Mer Watson',
              releaseDate: '2022-05-12',
              img: require('./assets/AudioListing/Image88.png'), 
              tracks: [
                { trackTitle: 'Track 1', duration: '3:30' },
                { trackTitle: 'Track 2', duration: '4:15' },
              ],
            },
            {
              id: 'a2',
              title: 'New Beginnings',
              artist: 'Jessica Gonzalez',
              releaseDate: '2021-10-05',
              img: require('./assets/AudioListing/Image88.png'), 
              tracks: [
                { trackTitle: 'Track 1', duration: '3:40' },
                { trackTitle: 'Track 2', duration: '4:00' },
              ],
            },
            // Các album khác...
          ],
        },
        // Các người dùng khác...
      ];
      
    return (
        <ImageBackground
            source={require('./assets/Launch_Screen/BackRoug.png')} // Đường dẫn đến ảnh nền
            style={styles.container}
        >
            <View style={styles.contentContainer}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image source={require('./assets/Launch_Screen/banner.png')} style={styles.logo} />
                </View>

                {/* Text content */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Your music</Text>
                    <Text style={styles.title}>Your</Text>
                    <Text style={styles.title}>artists</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createAccountButton} onPress={()=>navigation.navigate('Login', {users}) }>
                        <Text style={styles.createAccountText}>Create an account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Sign', {users})}>
                        <Text style={styles.loginText}>I already have an account</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingVertical: 50, 
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    logo: {
        width: 50, 
        height: 50,
    },
    textContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    createAccountButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 25,
        marginBottom: 20,
    },
    createAccountText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginButton: {
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 25,
        backgroundColor: 'white',
    },
    loginText: {
        color: '#1E90FF', 
        fontSize: 16,
        fontWeight: 'bold',
    },
});
