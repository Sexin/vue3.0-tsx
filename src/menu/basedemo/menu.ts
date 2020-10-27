
interface MenuitemInterface {
    path: string;
    title: string;
    icon: string;
}

const menu: MenuitemInterface[] = [
    {
        path: '/base',
        title: '首页',
        icon: 'home-o'
    },
    {
        path: '/base/mine',
        title: '我的',
        icon: 'manager-o'
    }
]

export {
    menu,
    MenuitemInterface
}

