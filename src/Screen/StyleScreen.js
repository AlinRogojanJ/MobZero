import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  innerCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 120,
    opacity: 0.4,
    width: 220,
    height: 220,
    zIndex: 1, 
  },
  outsideCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 125,
    opacity: 0.2,
    width: 240,
    height: 240,
    zIndex: 0, 
  },
  imageWelcome: {
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: 2, 
  },
  title:{
    fontSize: 20,
    paddingTop: 0,
    color: 'white',
  }
 
});


