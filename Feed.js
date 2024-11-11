import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
const initialFeedData = [
    {
        id: '1',
        userName: 'Jessica Gonzalez',
        postTime: '3d',
        trackTitle: 'FLOWER',
        image: require('./assets/AudioListing/Image89.png'),
        trackImage: require('./assets/AudioListing/Image89.png'),
        likes: 20,
        comments: 3,
        shares: 1,
        duration: '05:15',
        plays: '125',
        data: [
            { id: '1', user: 'Sally Rooney', comment: 'Do duis cul 😍' },
            { id: '2', user: 'Jason', comment: 'Minim magna exc 🧡' },
            { id: '3', user: 'Michael Key', comment: '@JasonSmith deserunt officia consequat adipi' },
        ],
    },
    {
        id: '2',
        userName: 'William King',
        postTime: '5d',
        trackTitle: 'Me',
        image: require('./assets/AudioListing/Image83.png'),
        trackImage: require('./assets/AudioListing/Image88.png'),
        likes: 45,
        comments: 9,
        shares: 2,
        duration: '05:15',
        plays: '245',
        data: [
            { id: '1', user: 'Sally Rooney', comment: '@JasonSmith deserunt officia consequat adipi', image: require('./assets/AudioListing/Image83.png') },
            { id: '2', user: 'Jason', comment: 'Minim magna exc 🧡' },
            { id: '3', user: 'Michael Key', comment: '@JasonSmith deserunt officia consequat adipi' },
        ],
    },
    // Các bài đăng khác...
    {
        id: '3',
        userName: 'William King',
        postTime: '5d',
        trackTitle: 'Me',
        image: require('./assets/AudioListing/Image90.png'),
        trackImage: require('./assets/AudioListing/Image84.png'),
        likes: 45,
        comments: 9,
        shares: 2,
        duration: '05:15',
        plays: '245',
        data: [
            { id: '1', user: 'Sally Rooney', comment: '@JasonSmith deserunt officia consequat adipi' },
            { id: '2', user: 'Jason', comment: 'Minim magna exc 🧡' },
            { id: '3', user: 'Michael Key', comment: '@JasonSmith deserunt officia consequat adipi' },
        ],
    },
];

export default function FeedScreen({navigation,route}) {
    const { user } = route.params;
    const [feedData, setFeedData] = useState(initialFeedData);
    const [activePostId, setActivePostId] = useState(null);
    const [newComment, setNewComment] = useState('');

    // Hàm để mở hoặc đóng phần bình luận của bài đăng
    const toggleComments = (postId) => {
        if (activePostId === postId) {
            setActivePostId(null); // Nếu bài đăng đang mở, đóng lại
        } else {
            setActivePostId(postId); // Nếu bài đăng khác, mở bài đăng đó
        }
    };

    // Hàm để thêm bình luận vào bài đăng
    const addComment = () => {
        if (newComment.trim() === '') return; // Nếu không có nội dung thì không thêm

        const updatedFeedData = feedData.map((post) => {
            if (post.id === activePostId) {
                const updatedData = [
                    ...post.data,
                    { id: (post.data.length + 1).toString(), user: 'Current User', comment: newComment },
                ];
                return {
                    ...post,
                    data: updatedData,
                    comments: post.comments + 1, // Cập nhật số lượng bình luận
                };
            }
            return post;
        });

        setFeedData(updatedFeedData);
        setNewComment(''); // Reset nội dung comment sau khi thêm
    };

    const renderPost = ({ item }) => (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={item.image} />
                <View style={styles.headerText}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.postTime}>Posted a track • {item.postTime}</Text>
                </View>
            </View>
            <Image source={item.trackImage} style={styles.trackImage} />
            <View style={styles.trackInfo}>
                <Text style={styles.trackTitle}>{item.trackTitle}</Text>
                <Text style={styles.trackDetails}>{item.userName} • {item.plays} plays • {item.duration}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity>
                    <FontAwesome name="heart-o" size={20} color="black" />
                    <Text>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleComments(item.id)}>
                    <FontAwesome name="comment-o" size={20} color="black" />
                    <Text>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="share" size={20} color="black" />
                    <Text>{item.shares}</Text>
                </TouchableOpacity>
            </View>

            {/* Hiển thị phần bình luận nếu bài đăng này được chọn */}
            {activePostId === item.id && (
                <View style={styles.commentsSection}>
                    <Text style={styles.commentsTitle}>{item.comments} comments</Text>
                    <FlatList
                        data={item.data}
                        keyExtractor={(comment) => comment.id}
                        renderItem={({ item: comment }) => (
                            <View style={styles.comment}>
                                <Image source={item.image} style={styles.commentAvatar} />
                                <View style={styles.commentContent}>
                                    <Text style={styles.commentUser}>{comment.user}</Text>
                                    <Text style={styles.commentText}>{comment.comment}</Text>
                                </View>
                            </View>
                        )}
                    />
                    <View style={styles.commentInputContainer}>
                        <TextInput
                            style={styles.commentInput}
                            placeholder="Write a comment..."
                            value={newComment}
                            onChangeText={(text) => setNewComment(text)}
                        />
                        <TouchableOpacity onPress={addComment}>
                            <Text style={styles.sendButton}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={feedData}
                keyExtractor={(item) => item.id}
                renderItem={renderPost}
            />
              {/* Footer cố định */}
              <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Home_Audio',{user})}>
                    <Icon name="home-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Seach',{user})}>
                    <Icon name="search-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Feed',{user})}>
                    <Icon name="layers-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem} onPress={()=>navigation.navigate('Lirary',{user})}>
                    <Icon name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#fff',
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerText: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    postTime: {
        fontSize: 12,
        color: '#888',
    },
    trackImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    trackInfo: {
        marginBottom: 8,
    },
    trackTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    trackDetails: {
        fontSize: 14,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    commentsSection: {
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 16,
    },
    commentsTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    commentAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    commentContent: {
        marginLeft: 10,
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    commentUser: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    commentText: {
        fontSize: 14,
        marginTop: 4,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        paddingTop: 10,
    },
    commentInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    sendButton: {
        marginLeft: 10,
        color: '#1e90ff',
        fontWeight: 'bold',
    },
    footer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#ddd' },
    footerItem: { alignItems: 'center' },
    footerText: { fontSize: 12, color: '#888', marginTop: 4 },
});
