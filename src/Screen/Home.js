import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../Screen/StyleScreen';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MyAccount')}
      />
    </View>
  );
}