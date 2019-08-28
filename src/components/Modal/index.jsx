/**
 * @fileOverview 弹框组件
 * @author: 解园园
 * @date: 2019/08/23
 */
import React from 'react';
import { Animated, TouchableHighlight, View, Text, Dimensions, Easing, Image } from 'react-native';
import { Portal } from '@ant-design/react-native';
// @ts-ignore
import styles from './indexStyle';
const screen = Dimensions.get('window');
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 遮盖层mask点击
         */
        this.onPressMask = () => {
            const { maskCloseable, onClose } = this.props;
            if (maskCloseable) {
                onClose && onClose();
            }
        };
        this.state = {
            modalVisible: props.visible,
            opacity: new Animated.Value(0),
            positionL: new Animated.Value(-screen.width),
            positionD: new Animated.Value(-screen.height),
        };
    }
    componentDidUpdate(prevProps) {
        const { props } = this;
        if (prevProps.visible !== props.visible) {
            this.openModal();
        }
    }
    openModal() {
        const { animationType, visible, animationDuration } = this.props;
        if (animationType === 'none') { // 无动画的时候
            if (!visible) {
                this.setState({
                    modalVisible: false,
                });
            }
        }
        else { // 有动画
            if (animationType === 'slide-left') { // 左滑
                this.animDialog = Animated.timing(this.state.positionL, {
                    toValue: visible ? 0 : -screen.width,
                    duration: animationDuration,
                    easing: (visible ? Easing.elastic(0.8) : undefined),
                    useNativeDriver: true,
                });
            }
            if (animationType === 'slide-down') { // 下滑
                this.animDialog = Animated.timing(this.state.positionD, {
                    toValue: visible ? 0 : -screen.height,
                    duration: animationDuration,
                    easing: (visible ? Easing.elastic(0.8) : undefined),
                    useNativeDriver: true,
                });
            }
            if (animationType === 'fade') { // 淡入淡出
                this.animDialog = Animated.timing(this.state.opacity, {
                    toValue: visible ? 1 : 0,
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
    }
    render() {
        const { title, style, animationType, hasBottomClose } = this.props;
        const { positionL, positionD, opacity } = this.state;
        const animationStyleMap = {
            none: {},
            'slide-left': { transform: [{ translateX: positionL }] },
            'slide-down': { transform: [{ translateY: positionD }] },
            fade: {
                opacity,
            },
        };
        if (!this.state.modalVisible) {
            return null;
        }
        return (<Portal>
        <View style={[styles.modalWrapCommon, styles.modalWrap]}>
          <TouchableHighlight underlayColor="transparent" style={[styles.modalMaskWrap]} onPress={this.onPressMask}>
            <Animated.View style={[{ opacity }]}>
              <View style={[styles.modalMask, { height: '100%' }]}/>
            </Animated.View>
          </TouchableHighlight>
          <Animated.View style={[styles.modalContainer, style, { width: 200 }, animationStyleMap[animationType]]}>
            {title ? <Text>{title}</Text> : null}
            {this.props.children}
            {hasBottomClose && <TouchableHighlight underlayColor="transparent" onPress={this.onPressMask}>
              <Image style={styles.delBtn} source={require('assets/icons/icon-shanchu.png')}/>
            </TouchableHighlight>}
          </Animated.View>
        </View>
      </Portal>);
    }
}
Modal.defaultProps = {
    animationType: 'fade',
    maskCloseable: false,
    animationDuration: 300,
    visible: false,
    hasBottomClose: false,
    onClose() {
    },
};
