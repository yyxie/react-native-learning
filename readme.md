## 记录react-native项目中遇到的问题
### 1.react-native-navigation使用
 A: options配置:
控制状态栏的颜色: 这个要区分ios和安卓(topbar为白色的时候,接下来这样配置)
```js
statusBar: { // 状态栏
  style: Platform.OS === 'ios' ? 'dark' : 'light',
},
```
B: drawbehind
跳转到下一个页面的时候隐藏底部的菜单
options里设置 

```js
bottomTabs: {visible: false}
```

但这样有个问题就是在android上底部的菜单仍会占位,所以要设置drawBehind: true
C: 静态配置options

```js
export default class Approve extends PureComponent {
  static options(passProps) {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'buttonOne',
            icon: require('../../assets/icons/icon-arrow-left.png')
          }
        ],
        backButton: {
          visible: false
        }
      },
    };
  }
  ```
这个会优先于统一的配置,和统一配置进行merage
但需注意在注册组件的时候Navigation.registerComponent中第二个或者第三个参数传入原组件, 我们项目中目前用的是第三个参数主要是我们第二个参数用的是包裹后的组件

### 2.react-native和原生交互

react-native调用原生: NativeModules.类名.方法名
react-native接收原生返回内容:

```js
 if (Platform.OS === 'ios') {
  const NativeModulesByIOS = NativeModules.AliyunFaceModule;
  const NativeNotificationMoudule = new NativeEventEmitter(NativeModulesByIOS);
  this.listener = NativeNotificationMoudule.addListener('onFaceResultCallBack', this.aliyunCallBack);
} else { // android
  this.listener = DeviceEventEmitter.addListener('onFaceResultCallBack', this.aliyunCallBack);
}
```
