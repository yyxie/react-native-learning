import React from 'react';
import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';
import { Provider as AntProvider } from '@ant-design/react-native';

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
        <AntProvider>
          <NoticeContent />
          <Component
            {...props}
          />
        </AntProvider>
      </View>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(pageNames.Home, () => WrapComponent(Pages.Home));
  Navigation.registerComponent(pageNames.My, () => WrapComponent(Pages.My));
  Navigation.registerComponent(pageNames.Login, () => WrapComponent(Pages.Login));
  Navigation.registerComponent(pageNames.List, () => WrapComponent(Pages.List));
  Navigation.registerComponent(pageNames.Form, () => WrapComponent(Pages.Form));
}
