import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleViewMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../arcade.png')} style={styles.image} />
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleViewMenu}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already joined before? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3E6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#64FCD9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
