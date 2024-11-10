// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [users, setUsers] = useState([
    {
      username: 'admin',
      password: '123',
      library: [],
      playlist: [],
      album: []
    },
    // Các người dùng khác có thể thêm vào đây...
  ]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      Alert.alert('Error', 'Username already exists');
      return;
    }

    const newUser = { username, password, library: [], playlist: [], album: [] };
    setUsers([...users, newUser]);
    Alert.alert('Success', 'User registered successfully');
    navigation.navigate('Login', { users }); // Điều hướng đến màn hình đăng nhập và truyền `users` qua navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Log in"
        onPress={() => navigation.navigate('Login', { users })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
