import React from 'react';
import {View, Text} from 'react-native';
import {splashLogic} from './Splash.logic';
import {styles} from './Splash.styles';
import {LOGO} from '@assets';
import Image from 'react-native-fast-image';
export const SplashScreen = () => {
  const {mode, label} = splashLogic();
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <Text>
        {mode == 'staging' ? 'DEV ' : ''}
        {label}
      </Text>
    </View>
  );
};
