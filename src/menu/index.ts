import router from '../router/index'
import { menu as basedemomenu } from './basedemo/menu';

const getroutes = () => {
    if(router.currentRoute && router.currentRoute.value.fullPath.startsWith('/base')) {
        return basedemomenu;
    }
}



export default getroutes;