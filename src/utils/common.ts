import Cookies from 'js-cookie'
import { cookieExpires } from '@/config' // cookie保存的天数

/**
 * @Author: asheng
 * @msg: 存取token
 * @param {string} token
 */
export const TOKEN_KEY: string = 'token'

export const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) {
        return token
    } else {
        return false
    }
}

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = (url: string) => {
    const keyValueArr = url.split('?')[1].split('&')
    let paramObj: any = {}
    keyValueArr.forEach(item => {
        const keyValue = item.split('=')
        paramObj[keyValue[0]] = keyValue[1]
    })
    return paramObj
}