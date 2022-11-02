import { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import jerry from './assets/jerry.png'
import oggy from './assets/oggy.png'
import stop from './assets/stop.gif'
export default function App() {

  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10)
  })
  
  function onPress(event){
    console.log('=====run=====')
    var x = event.nativeEvent.locationX
    console.log('=====run=====')
    console.log(x)
    console.log('=====run=====')
    var y = event.nativeEvent.locationY  
    console.log('=====run=====')
    setLocation({
      x:x,
      y:y,
      marginLeft:x,
      marginTop:y
    })
  }
  // function onMove(event){
  //   console.log('=====run=====')
  //   console.log(location)
  //   console.log('=====run=====')
  // }
  // function onRelease(){
  //   console.log('=====release=====')
    
  // }
  const {marginLeft,marginTop} = location

  // const [location1, setLocation1] = useState({
  //   x: null,
  //   y: null,
  //   marginLeft: new Animated.Value(2),
  //   marginTop: new Animated.Value(2)
  // })
  
  // function onPress1(event){
  //   console.log('=====run=====')
  //   var x = event.nativeEvent.locationX
  //   console.log('=====run=====')
  //   console.log(x)
  //   console.log('=====run=====')
  //   var y = event.nativeEvent.locationY  
  //   console.log('=====run=====')
  //   setLocation({
  //     x:x,
  //     y:y,
  //     marginLeft:x,
  //     marginTop:y
  //   })
  // }
  return (
    <View style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      // onResponderMove={onMove}
      // onResponderRelease={onRelease}
      >
      {/* <Text>....</Text> */}
      {/* <View style={{flex:0.2, alignContent:'center', justifyContent:'center'}}>
        <Animated.Image
          source={jerry}
          style={{marginLeft:marginLeft, marginTop:marginTop, height:100, width:100}}>
        </Animated.Image>
      </View> */}
      <Animated.Image
          source={stop}
          style={{marginLeft:marginLeft, marginTop:marginTop, height:150, width:150}}>
      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
