import { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

import jerry from './assets/jerry.png'
import oggy from './assets/oggy.png'
import stop from './assets/stop.gif'
function Bai1() {

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

function bai2(){
  const [location1, setLocation1] = useState({
    x: null,
    y: null,
    marginLeft1: new Animated.Value(10),
    marginTop1: new Animated.Value(10)
  })
  
  const {marginLeft1,marginTop1} = location1
  

  const [location2, setLocation2] = useState({
    x: null,
    y: null,
    marginLeft2: new Animated.Value(10),
    marginTop2: new Animated.Value(10)
  })
  
  const {marginLeft2,marginTop2} = location2
  

  const [location3, setLocation3] = useState({
    x: null,
    y: null,
    marginLeft3: new Animated.Value(10),
    marginTop3: new Animated.Value(10)
  })
  
  const {marginLeft3,marginTop3} = location3

  function randomLeft(){
    return Math.min(Math.random() * 300, Dimensions.get('window').width)
  } 
  function randomTop(){
    return Math.min(Math.random() * 500, Dimensions.get('window').height)
  }
  function onPress(event){
    setLocation1({
      marginLeft1: randomLeft(),
      marginTop1: randomTop()
    })

    setLocation2({
      marginLeft2: randomLeft(),
      marginTop2: randomTop()
    })

    setLocation3({
      marginLeft3: randomLeft(),
      marginTop3: randomTop()
    })
  }
  function onMove(event){
    console.log('onMove')
    console.log('location')
  }
  function onRelease(){
    setLocation1({
      marginLeft1: randomLeft(),
      marginTop1: randomTop()
    })

    setLocation2({
      marginLeft2: randomLeft(),
      marginTop2: randomTop()
    })

    setLocation3({
      marginLeft3: randomLeft(),
      marginTop3: randomTop()
    })
  }  
  return (
    <View style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      >
      <Animated.Image
          source={jerry}
          style={{transition: '0.5s', marginLeft:marginLeft1, marginTop:marginTop1, height:100, width:100}}>
      </Animated.Image>
      <Animated.Image
          source={jerry}
          style={{transition: '0.5s', marginLeft:marginLeft2, marginTop:marginTop2, height:100, width:100}}>
      </Animated.Image>
      <Animated.Image
          source={jerry}
          style={{transition: '0.5s', marginLeft:marginLeft3, marginTop:marginTop3, height:100, width:100}}>
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

export default bai2