import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles, specificStyles } from '../../src/Screen/StyleScreen';
import { useNavigation } from '@react-navigation/native';

export default function Loading() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MenuBar'); 
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.outsideCircle}></View>
        <View style={styles.innerCircle}></View>
        <Image
          source={require('../../assets/image/yuki.jpeg')}
          style={styles.imageWelcome}
        />
      </View>

        <View style={styles.secondContainer}>
          <Text style={styles.title}>Numele App</Text>
        </View>
    </View>
  
  )
}