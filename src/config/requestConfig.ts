/**
 * 约定 
 *  项目名称: {
 *      接口名称: url
 *  }
 * 调用方法： 
 *  import Request from '@/Request/Request'
 * 
 *  Request.项目名称.接口名称().then()
 */

import assistant from '../request/assistant'
import assistant1 from '../request/assistant1'

export default {
    assistant: assistant,

    assistant1: {
        ...assistant1
    }
}