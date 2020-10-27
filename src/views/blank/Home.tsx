import { defineComponent } from 'vue';
import { NavBar, Icon } from 'vant';
import router from '@/router'

const stylecomponent = {
    color: '#f60'
}

export default defineComponent({
    setup() {
        const onClickLeft = () => {
            router.go(-1);
        }

        const search = () => {
            console.log('search');
        }

        return () => (
            <>
                <NavBar 
                    title='标题'
                    leftText='返回'
                    leftArrow
                    onClickLeft={onClickLeft}
                    v-slots={{
                        right: () => <Icon name="search" size="18" onClick={search} />
                    }}
                >
                </NavBar>
                <div style={stylecomponent}>
                    <Icon name="search" size="18" />
                </div>
            </>
        )
    }
})

