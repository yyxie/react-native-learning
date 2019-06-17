import React from 'react';
import {TouchableWithoutFeedback, Keyboard, View} from 'react-native';

export default function (WrapComponent) {
    return class extends React.Component {
        render() {
            return (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <WrapComponent {...this.props} />
                </TouchableWithoutFeedback>
            )

        }
    }
}
