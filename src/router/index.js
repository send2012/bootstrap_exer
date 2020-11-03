import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
    {
        path     : '/',
        name     : 'home',
        meta     : {
            title: 'home',
        },
        component: () => import( '@/views/home/' ),
    },
    {
        path     : '/about',
        name     : 'about',
        meta     : {
            title: 'about',
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/'),
    },
    {
        path     : '/builtIn_components',
        name     : 'builtIn-components',
        meta     : {
            title: 'builtIn-components',
        },
        component: () => import( '@/views/builtIn_components/' ),
    },
    {
        path     : '/alert',
        name     : 'b-alert',
        component: () => import( '@/views/alert/' ),
    },
    {
        path     : '/avatar',
        name     : 'b-avatar',
        component: () => import( '@/views/avatar/' ),
    },
    {
        path     : '/button',
        name     : 'bs-button',
        component: () => import( '@/views/button/' ),
    },
    {
        path     : '/calendar',
        name     : 'b-calendar',
        component: () => import( '@/views/calendar/' ),
    },
    {
        path     : '/carousel',
        name     : 'b-carousel',
        component: () => import( '@/views/carousel/' ),
    },
    {
        path     : '/form',
        name     : 'bs-form',
        component: () => import( '@/views/form/' ),
    },
    {
        path: '/form_checkbox',
        name: 'form_checkbox',
        meta: {
            level: 1,
            title: 'form_checkbox',
        },
        component: () => import( '@/views/form_checkbox/' ),
    },
];

const router = new VueRouter( {
    routes,
} );

export default router;
