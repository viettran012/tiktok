//import Layout
import { DefaultLayout, HeaderOnly } from '~/components/Layout';

//import Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Vào được khi chưa đăng nhập
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/profile', component: Profile, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Cần đăng nhập mới có thể vào được routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
