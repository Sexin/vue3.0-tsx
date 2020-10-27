import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { MAINHOST, ISMOCK, conmomPrams } from '@/config'
import requestConfig from '@/config/requestConfig'
import { getToken } from '@/utils/common'
import router from '@/router'
import { Toast } from 'vant';

declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
declare interface Datas {
    method?: Methods;
    [key: string]: any;
}
const baseURL = process.env.NODE_ENV === 'production' ? MAINHOST : '/api'
const token = getToken()

// 请求失败
const requestFail = (res: AxiosResponse) => {
    const errStr = '网络繁忙！'
    // token失效重新登陆
    if (res.data.code === 1000001) {
        return router.replace({ name: 'login' })
    }

    return {
        err: console.error({
            code: res.data.errcode || res.data.code,
            msg: res.data.errmsg || errStr
        })
    }
}

class HttpRequest {
    public queue: any // 请求的url集合
    public constructor() {
        this.queue = {}
    }
    destroy(url: string) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // hide loading
        }
    }
    interceptors(instance: any, url?: string) {
        // 请求拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // show loading
            }
            if (url) {
                this.queue[url] = true
            }
            return config
        }, (error: any) => {
            console.error(error)
        })
        // 响应拦截
        instance.interceptors.response.use((res: AxiosResponse) => {
            if (url) {
                this.destroy(url)
            }
            const { data, status } = res
            if (status === 200 && ISMOCK) { return data } // 如果是mock数据，直接返回
            if (status === 200 && data && data.code === 0) { return data } // 请求成功
            return requestFail(res) // 失败回调
        }, (error: any) => {
            if (url) {
                this.destroy(url)
            }
            Toast.fail(error.data.msg);
        })
    }
    async request(options: AxiosRequestConfig) {
        const instance = axios.create()
        await this.interceptors(instance, options.url)
        return instance(options)
    }
}



// 合并axios参数
const conbineOptions = (_opts: any, data: Datas, method: Methods): AxiosRequestConfig => {
    let opts = _opts
    if (typeof opts === 'string') {
        opts = { url: opts }
    }
    const _data = { ...conmomPrams, ...opts.data, ...data }
    const options = {
        method: opts.method || data.method || method || 'GET',
        url: opts.url,
        headers: { 
            'common': {
                'x-apitoken': token
            }, 
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
        },
        baseURL
    }
    return options.method !== 'GET' ? Object.assign(options, { data: _data }) : Object.assign(options, { params: _data })
}

const HTTP = new HttpRequest();

interface ModuleInterface {
    [key: string]: string
}

/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
    const apiObj: any = {}
    const requestList: any = requestConfig

    const fun = (opts: AxiosRequestConfig | string) => {
        return async (data = {}, method: Methods = "POST") => {
            if (!token) {
                Toast.fail('身份信息过时，请重新登录');
                return router.replace({ name: 'login' })
            }
            const newOpts = conbineOptions(opts, data, method)
            const res = await HTTP.request(newOpts)
            return res
        }
    }

    const funmodule = async (modules: ModuleInterface, funname: string) => {
        await Object.keys(modules).forEach(async (key) => {
            if (!apiObj[funname][key]) apiObj[funname][key] = ''
            apiObj[funname][key] = await fun(modules[key]);
        })
    }
    
    Object.keys(requestConfig).forEach((key) => {
        if(!apiObj[key]) apiObj[key] = {}
        apiObj[key] = funmodule(requestList[key], key)
    })

    return apiObj
})()



export default Api as any
