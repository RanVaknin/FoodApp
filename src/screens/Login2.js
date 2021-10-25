/*
import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate
  } = Animated;

  function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };
  
    return block([
      cond(
        clockRunning(clock),
        [
          // if the clock is already running we update the toValue, in case a new dest has been passed in
          set(config.toValue, dest),
        ],
        [
          // if the clock isn't running we reset all the animation params and start the clock
          set(state.finished, 0),
          set(state.time, 0),
          set(state.position, value),
          set(state.frameTime, 0),
          set(config.toValue, dest),
          startClock(clock),
        ]
      ),
      // we run the step here that is going to update position
      timing(clock, state, config),
      // if the animation is over we stop the clock
      cond(state.finished, debug('stop clock', stopClock(clock))),
      // we made the block return the updated position
      state.position,
    ]);
  }

let buttonOpacity = new Value(1);
const onStateChange = event([
    {
        nativeEvent: ({ state })=>block([
            cond(eq(state, State.END), set(buttonOpacity,runTiming(new Clock(),1,0)))
        ])
    
    }
])

const btnY = interpolate(buttonOpacity, {
    inputRange: [0,1],
    outputRange: [100,0],
    extrapolate: Extrapolate.CLAMP
})

const bgY = interpolate(buttonOpacity, {
    inputRange: [0,1],
    outputRange: [-height / 3,0],
    extrapolate: Extrapolate.CLAMP
})



const Login2 = (props) => {
  return(
    <View style={styles.main}>
        <View style={ styles.pictureContainer }>
            <Image style={styles.image} source={require('../../assets/bg.jpg')}></Image>
        </View>
        <View style={styles.buttonSection}>

            <TapGestureHandler onHandlerStateChange={onStateChange}>
                <Animated.View style={{...styles.btn, opacity: buttonOpacity, transform: [{translateY: btnY}]}}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>SIGN IN</Text>
                </Animated.View>
            </TapGestureHandler>

            <Animated.View style={{...styles.btn, backgroundColor: '#2E71DC', }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>SIGN IN WITH FACEBOOK</Text>
            </Animated.View>
        </View>
        
    </View>
   )
 }

const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'

    },
    pictureContainer :{
        ...StyleSheet.absoluteFill,
        
    },
    image: {
        flex: 1,
        width:null,
        height:null,
    }, 
    buttonSection:{
        height: height / 3,
        justifyContent: 'center'
    },
    btn: {
      backgroundColor: 'white',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5
    },
})

export default Login2;

*/