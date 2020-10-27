import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { Tabbar, TabbarItem } from 'vant';
import getroutes from '../menu'
import router from '@/router'

export default defineComponent({
    setup() {
        const active = ref<number>(0);
        
        //  根据配置获取菜单
        const menu = getroutes();
        const menulist = menu && menu.map((item, index) => {
            // 根据当前路由判断高亮
            if(router.currentRoute && router.currentRoute.value.fullPath.startsWith(item.path)) {
                active.value = index;
            }
            return (
                <TabbarItem icon={item.icon} to={item.path}>{item.title}</TabbarItem>
            )
        })

        return () => (
            <>
                <RouterView />
                <Tabbar v-model={active.value}>
                    {menulist}
                </Tabbar>
            </>
        )
    }
})