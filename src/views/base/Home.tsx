import { defineComponent } from 'vue';
import Request from '@/utils/request'
import { AxiosResponse } from 'axios';

export default defineComponent({
    setup() {
        Request.assistant.getdata({data: {a: 1}}).then((json: AxiosResponse) => {
            
        })
        return () => (
            <>
                basehome
            </>
        )
    }
})