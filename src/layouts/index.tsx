import { defineComponent } from 'vue';
import router from '@/router'
import BaseLayout from './BaseLayout'
import BlankLayout from './BlankLayout'

export default defineComponent({
    setup(props, ctx) {
        if(router.currentRoute && router.currentRoute.value.fullPath.startsWith('/blank')) {
            return () => (
                <>
                    <BlankLayout></BlankLayout>
                </>
            )
        } 
        return () => (
            <>
                <BaseLayout></BaseLayout>
            </>
        )
    }
})