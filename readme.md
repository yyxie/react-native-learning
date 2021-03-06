## 记录react-native项目中踩的坑
### 1.项目搭建
* 这些步骤都可以通过react-native官网以及react-native-navigation官方文档得到解答
1. 安装开发工具
2. 利用命令初始化项目react-native init *项目名*
3. 运行项目(ios) react-native run-ios, 或者通过xcode进行运行
4. 接下来就可以快乐的写代码了

* 这里面我们选择使用react-native-navigation,接下来进行react-native-navigation的配置
1. 安装react-native-navigation
npm install --save react-native-navigation
ios 环境的使用
接下来我们将通过Xcode进行编辑.h和.m文件(https://wix.github.io/react-native-navigation/#/docs/Installing)

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

react-native调用原生:

```js
NativeModules.类名.方法名
```

react-native接收原生返回内容:

```js
 if (Platform.OS === 'ios') {
  const NativeModulesByIOS = NativeModules.AliyunFaceModule;
  const NativeNotificationMoudule = new NativeEventEmitter(NativeModulesByIOS);
  this.listener = NativeNotificationMoudule.addListener('onFaceResultCallBack', this.aliyunCallBack);
} else { // android
  this.listener = DeviceEventEmitter.addListener('onFaceResultCallBack', this.aliyunCallBack);
}

/**
* 回调方法
*/
aliyunCallBack: ()=>{
 // 做一些处理
}
```
### 使用FlatList中遇到的问题

```js
  <FlatList
      style={{ flex: 1 }}
      data={data}
      onRefresh={this.onRefresh}
      refreshing={refreshing}
      renderItem={this.renderItem}
      onEndReachedThreshold={0.01}
      onEndReached={this.onEndReached}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={(item: any) => item[keyFiled]}
      ListFooterComponent={ListFooterComponent}
```
* 1: 因为我是使用本地数据的,每次上拉的时候多出的数据就一条,程序就不调用onEndReached方法,所以我一直以为是我使用的有问题
* 2: 下拉加载的时候也会调用到onRndReached方法,
