import { defineComponent } from 'vue';
import Request from '@/utils/request'
import { AxiosResponse } from 'axios';
import { setToken } from '@/utils/common'
export default defineComponent({
    setup() {
        console.log()
        setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI3NWVhM2MwLWY1MmQtMzVlZC04ODNjLTQ1YjUxZjQwMGI4MCIsInVzZXJuYW1lIjoiMDEwMTAwNzJnd3ciLCJyb2xlIjoidGVhY2hlciIsInN0YXR1cyI6MSwic2Nob29sX2NvZGUiOiIwMTAxMDA3MiIsInNjaG9vbF9uYW1lIjoiXHU5MWQxXHU1YzcxXHU1YzBmXHU1YjY2Iiwic2VydmVyX2lwIjoiMTkyLjE2OC4wLjQzOjgwODAiLCJmdWxsbmFtZSI6Ilx1NmQ0Ylx1OGJkNVx1OTBlZCIsImdlbmRlciI6IiIsImRhdGVfb2ZfYmlydGgiOm51bGwsInRlbGVwaG9uZSI6IjEyMzQ1NiIsImFkZHJlc3MiOm51bGwsInBvc3RhbF9jb2RlIjpudWxsLCJwaG90b19uYW1lIjpudWxsLCJwaG90b19jb250ZW50IjpudWxsLCJyZW1hcmsiOm51bGwsImxhc3RfbG9naW4iOm51bGwsIm1vZGlmaWVkIjoiMjAyMC0wOS0yMyAxMzoyNDoxNSIsImNyZWF0ZWQiOiIyMDE5LTA5LTA5IDE1OjUzOjM1Iiwic291cmNlVHlwZSI6MCwiYmluZEVtYWlsIjowLCJlbWFpbCI6bnVsbCwiYmluZE1vYmlsIjoxLCJtb2JpbGUiOiIxODI3MDg2NTIzNiIsImV4cCI6MTYwNDM2MzE5MywiaWRlbnRpZmllciI6IjAxMDEwMDcyZ3d3IiwidXNlcl9pZCI6ImI3NWVhM2MwLWY1MmQtMzVlZC04ODNjLTQ1YjUxZjQwMGI4MCJ9.duNiBM8xLhXHv2P6P7mqKVgCvmv1y1U3DQU-nNfKFto');
        Request.assistant1.getdata().then((json: AxiosResponse) => {
            console.log(json)
        })
        return () => (
            <>
                basemine
            </>
        )
    }
})