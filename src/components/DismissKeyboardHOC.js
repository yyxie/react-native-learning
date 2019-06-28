import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export default function (WrapComponent) {
  return function (props) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <WrapComponent {...props} />
      </TouchableWithoutFeedback>
    );
  };
}
