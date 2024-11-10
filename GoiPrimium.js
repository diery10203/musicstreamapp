import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

const packages = [
  {
    id: '1',
    title: 'Premium',
    price: '$12.99/ month',
    freeText: 'Free for 1 month',
    features: [
      'Ad-free listening',
      'Download to listen offline',
      'Access full catalog Premium',
      'High sound quality',
      'Cancel anytime',
    ],
  },
  {
    id: '2',
    title: 'Premium Plus',
    price: '$19.99/ month',
    freeText: 'Free for 1 month',
    features: [
      'Ad-free listening',
      'Download to listen offline',
      'Access full catalog Premium Plus',
      'High sound quality',
      'Exclusive content access',
      'Cancel anytime',
    ],
  },
];

export default function SubscriptionScreen() {
  return (
    <ImageBackground style={styles.container} source={require("./assets/Launch_Screen_Primieum/img.png")}>
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.title}>Unlimited{'\n'}music selections</Text>
      </View>
      <View style={{flex:3}}>
        <FlatList
          data={packages}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.planTitle}>{item.title}</Text>
              <Text style={styles.freeText}>{item.freeText}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.features}>
                {item.features.map((feature, index) => (
                  <Text key={index} style={styles.feature}>
                    ✓ {feature}
                  </Text>
                ))}
              </View>
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeText}>Subscribe now</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{flex:1, justifyContent:'center'}}>
        <TouchableOpacity >
        <Text style={styles.backText}> Back home</Text>
       </TouchableOpacity>
      </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a1b9a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: width * 0.8,
    alignItems: 'center',
    marginHorizontal: 10,
    flex:1,
    //justifyContent:'space-between'
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  freeText: {
    fontSize: 14,
    color: '#4caf50',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  features: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  feature: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  subscribeButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  subscribeText: {
    color: '#fff',
    fontSize: 16,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
});