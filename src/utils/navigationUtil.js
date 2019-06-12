import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

import pageName from '../registerPage/pageName'

// 主菜单name list
const TabBarList = [pageName.Home, pageName.My];

// 菜单配置
const config = {
    tabBar: {
        list: [
            {
                name: TabBarList[0],
                text: '客房',
                title: TabBarList[0],
                testId: 'FIRST_TAB_BAR_BUTTON',
                icon: require('../assets/images/icons/icon-tab-room.png'),
            },
            {
                name: TabBarList[1],
                text: TabBarList[1],
                title: TabBarList[1],
                testId: 'TabBarList[1]',
                icon: require('../assets/images/icons/icon-tab-my.png'),
            }]
    }
};

const navigationUtil = {
    getTabBarConfig: () => {
        Navigation.setDefaultOptions({
            topBar: {
                noBorder: true,// 控制topBar无边框
                background: {
                    color: '#fff',
                },
                title: {
                    color: '#0D0D0D',
                    alignment: 'center'
                },
                backButton: {
                    title: '', // Remove previous screen name from back button
                    color: '#000000', // topBar颜色
                },
                buttonColor: '#5D5D5D',
                elevation: 0, // disable the TopBa's shadow.
            },
            statusBar: { // 状态栏
                /*      backgroundColor: 'dark',*/
                style: Platform.OS === 'ios' ? 'dark' : 'light',
            },
            layout: {
                orientation: ['portrait']
            },
            bottomTabs: {
                titleDisplayMode: 'alwaysShow',
                drawBehind: true,
            },
            bottomTab: {
                textColor: '#8E8E8E',
                selectedTextColor: '#558DFB',
                iconColor: '#8E8E8E',
                selectedIconColor: '#558DFB',
            }
        });
    },
    /**
     *
     * @param tabPageName
     * @param init
     */
    setNavigation: (tabPageName = TabBarList[0], init = false) => {
        if (init) {
            // 仅在初始化时设置默认配置
            navigationUtil.getTabBarConfig();
        }
        const index = TabBarList.indexOf(tabPageName) === -1 ? 0 : TabBarList.indexOf(tabPageName);

        const children = config.tabBar.list.map((item) => {
            return {
                stack: {
                    children: [{
                        component: {
                            name: item.name,
                            options: {
                                topBar: {
                                    title: {
                                        text: item.title
                                    },
                                }
                            }
                        }
                    }],
                    options: {
                        bottomTab: {
                            icon: item.icon,
                            testID: item.testID,
                            text: item.text,
                        }
                    }
                }
            };
        });

        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children,
                    options: {
                        bottomTabs: {
                            currentTabIndex: index,
                        },
                    }
                }
            }
        });
    },
    /**
     * 跳转页面但不销毁当前页面
     * @param componentId 当前页面id  this.props.ComponentId获取到
     * @param nextPageComponentName 下一个页面的组件名称
     * @param nextPageTitle titla
     * @param navOptions layout参数
     * @param params 传递到下一个页面的参数
     */
    nextPage: (componentId, nextPageComponentName, nextPageTitle, navOptions, params) => {
        // 合并options
        let mergeOption = {
            topBar: {title: ''},
            bottomTabs: {
                visible: false
            },
            ...navOptions
        }

        // @ts-ignore
        if (mergeOption.topBar) {
            mergeOption.topBar.title = {
                text: nextPageTitle,
            };
        } else {
            mergeOption.topBar = {
                title: {
                    text: nextPageTitle
                }
            };
        }
        if (mergeOption.bottomTabs) {
            mergeOption.bottomTabs.visible = false;
        } else {
            mergeOption.bottomTabs = {
                visible: false
            };
        }


        // @ts-ignore
        mergeOption.topBar.title = {
            text: nextPageTitle,
        };

        Navigation.push(componentId, {
            component: {
                name: nextPageComponentName,
                passProps: params || {},
                options: mergeOption,
            }
        });
    },
    /**
     * 设置单独的页面
     * @param pageName
     */
    pushSingleScreenApp: (pageName) => {
        Navigation.setRoot({
            root: {
                component: {
                    name: pageName
                }
            }
        });
    }
}
export default navigationUtil;
