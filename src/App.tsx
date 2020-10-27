import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
    setup() {
        return () => (
            <>
                <RouterView></RouterView>
            </>
        )
    }
})