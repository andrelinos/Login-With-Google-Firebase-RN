/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View} from 'react-native';

export default function App() {
  const [userData, setUserData] = useState({});

  GoogleSignin.configure();

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const {user} = await GoogleSignin.signIn();

      setUserData(user);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  }

  useEffect(() => {
    if (userData !== null) {
      console.log('USER: => ', userData);
    }
  }, [userData]);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GoogleSigninButton
        style={{width: 300, height: 62}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
      />
    </View>
  );
}
