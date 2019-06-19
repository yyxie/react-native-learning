import React from 'react';
import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';

import * as Pages from '../pages';
import pageNames from './pageName.json';
import NoticeContent from '../components/Notice/NoticeContent';

function WrapComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <View style={{
        flex: 1,
      }}
      >
        <NoticeContent />
        <Component
          {...props}
        />
      </View>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(pageNames.Home, () => WrapComponent(Pages.Home));
  Navigation.registerComponent(pageNames.My, () => WrapComponent(Pages.My));
  Navigation.registerComponent(pageNames.Login, () => WrapComponent(Pages.Login));
}
