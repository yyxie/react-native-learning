/**
 * @fileOverview 淡出组件
 * @author: 解园园
 * @date: 2019/08/23
 */
import React from 'react';
import {
  Animated, TouchableHighlight, View, Text, Dimensions, Easing, Image
} from 'react-native';
import { Portal } from '@ant-design/react-native';

// @ts-ignore
import styles from './indexStyle';

interface Props {
  style?: any;
  title?: string;
  visible: boolean;
  maskCloseable?: boolean;
  onClose?: () => void;
  width?: number;
  height?: number;
  mode: 'Left' | 'Right' | 'Bottom' | 'Top';
  componentId: any;
  animationDuration?: number;
  hasBottomClose?: boolean;
  children: any;
}

const screen = Dimensions.get('window');

export default class Drawer extends React.Component<Props, any> {

  static defaultProps = {
    mode: 'Right',
    maskCloseable: false,
    animationDuration: 300,
    visible: false,
    hasBottomClose: false,
    onClose() {
    },
  };

  // 弹框动画
  animDialog: any;

  navigationEventListener: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      modalVisible: props.visible,
      positionL: new Animated.Value(-screen.width),
      positionR: new Animated.Value(screen.width),
      positionT: new Animated.Value(-screen.height),
      positionD: new Animated.Value(screen.height),
    };
  }

  componentDidUpdate(prevProps: Props) {
    const { props } = this;
    if (prevProps.visible !== props.visible) {
      this.openModal();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.shouldComponentUpdate(nextProps, null)) {
      this.setState({
        modalVisible: true,
      });
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: any) {
    if (this.props.visible || this.props.visible !== nextProps.visible) {
      return true;
    }
    if (nextState) {
      if (nextState.modalVisible !== this.state.modalVisible) {
        return true;
      }
    }
    return false;
  }

  openModal() {
    const {
      mode, visible, animationDuration, height = 0, width = 0
    } = this.props;
    // 有动画
    if (mode === 'Left') { // 左滑
      this.animDialog = Animated.timing(this.state.positionL, {
        toValue: visible ? 0 : -screen.width,
        duration: animationDuration,
        easing: (visible ? Easing.elastic(0.8) : undefined) as any,
        useNativeDriver: true,
      });
    }
    if (mode === 'Bottom') { // 上滑
      this.animDialog = Animated.timing(this.state.positionD, {
        toValue: visible ? screen.height - height : screen.height,
        duration: animationDuration,
        easing: (visible ? Easing.elastic(0.8) : undefined) as any,
        useNativeDriver: true,
      });
    }
    if (mode === 'Right') { // 右滑
      this.animDialog = Animated.timing(this.state.positionR, {
        toValue: visible ? screen.width - width : screen.width,
        duration: animationDuration,
        useNativeDriver: true,
      });
    }
    if (mode === 'Top') { // 下滑
      this.animDialog = Animated.timing(this.state.positionT, {
        toValue: visible ? 0 : -screen.height,
        duration: animationDuration,
        useNativeDriver: true,
      });
    }
    this.animDialog && this.animDialog.start(() => {
      if (!visible) {
        this.setState({
          modalVisible: false,
        });
      }
    });
  }

  /**
   * 遮盖层mask点击
   */
  onPressMask = () => {
    const { maskCloseable, onClose } = this.props;
    if (maskCloseable) {
      onClose && onClose();
    }
  }


  render() {
    const {
      title, width, height, mode, hasBottomClose, children
    } = this.props;
    const {
      positionL, positionR, positionD, positionT, opacity
    } = this.state;
    const animationStyleMap = {
      Left: { transform: [{ translateX: positionL }] },
      Right: { transform: [{ translateX: positionR }] },
      Bottom: { transform: [{ translateY: positionD }] },
      Top: { transform: [{ translateY: positionT }] },
    };
    const containerWHMap = {
      Left: { width },
      Right: { width },
      Bottom: { height },
      Top: { height },
    };
    if (!this.state.modalVisible) {
      return null as any;
    }
    const containerS = `modalContainer${mode}`;
    console.log('drawer');
    return (
      <Portal>
        <View style={[styles.modalWrapCommon]}>
          <TouchableHighlight
            underlayColor="transparent"
            style={[styles.modalMaskWrap]}
            onPress={this.onPressMask}
          >
            <Animated.View
              style={[{ opacity }]}
            >
              <View style={[styles.modalMask, { height: '100%' }]} />
            </Animated.View>
          </TouchableHighlight>
          <Animated.View
            style={[
              styles.modalContainer,
              containerWHMap[mode],
              styles[containerS],
              animationStyleMap[mode]]}
          >
            {title ? <Text>{title}</Text> : null}
            {React.cloneElement(children)}
            {hasBottomClose && <TouchableHighlight
              underlayColor="transparent"
              onPress={this.onPressMask}
            >
              <Image style={styles.delBtn} source={require('assets/icons/icon-shanchu.png')} />
            </TouchableHighlight>}
          </Animated.View>
        </View>
      </Portal>
    );
  }
}
