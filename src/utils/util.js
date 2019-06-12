import {AsyncStorage} from "react-native";
import {COOKIE} from "./constant";
import navigationUtil from './navigationUtil';
import pageName from '../registerPage/pageName'

const Util = {
    /**
     * 向storage中存值
     * @returns {Promise<void>}
     */
    setStorage: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            // Error saving data
        }
    },

    /**
     * 获取storage中的值
     * @param key key值
     * @returns {Promise<void>}
     */
    getStorage: async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value) {
                return Promise.resolve(JSON.parse(value));
            }

            return Promise.resolve('');
        } catch (error) {
            console.log('getStorage error', error);
            return Promise.resolve('');
        }
    },
    /**
     * 清空缓存
     */
    clearStorage: async () => {
        await AsyncStorage.clear();
    },
    /**
     * 删除storage中某个key对应内容
     * @param key
     * @returns {Promise<void>}
     */
    removeStorageItem: async (key) => {
        await AsyncStorage.removeItem(key);
    },
    checkLogin: async () => {
        const cookie = await Util.getStorage(COOKIE);
        if (cookie) {
            navigationUtil.setNavigation(pageName.Home, true);
        } else {
            navigationUtil.pushSingleScreenApp(pageName.Login)
        }
    }
}
export default Util;
