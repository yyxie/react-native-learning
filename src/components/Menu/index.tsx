import React from 'react';
import {
  View, Image, Text
} from 'react-native';
import styles from './index.style';

interface Props {
  onMenuClick: any;
  menuIcon: any;
  title: string;
}

const Menu = function (props: Props) {

  const { onMenuClick, menuIcon, title } = props;
  return (
    <View
      style={styles.menuItem}
      onStartShouldSetResponder={onMenuClick}
    >
      <Image style={styles.menuIcon} source={menuIcon} />
      <View style={styles.menuContent}>
        <Text style={styles.flex}>{title}</Text>
        <Image style={styles.menuArrow} source={require('../../assets/icons/icon-arrow-right.png')} />
      </View>
    </View>);

};
export default Menu;
