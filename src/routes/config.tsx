import { RouteConfig } from './utils'
import { Login } from './login';
import { Root } from './root';
import { Plan } from './plan';
import { Plans } from './plans';

const ROUTES: RouteConfig[] = [
    {
        path: "/login",
        key: "LOGIN",
        exact: true,
        component: Login,
    },
    { 
        path: "/", 
        key: "ROOT", 
        private: true,
        component: Root,
        routes: [
            {
                path: "/plan",
                key: "PLAN",
                private: true,
                exact: true,
                component: Plan,
            },
            {
                path: "/plans",
                key: "PLANS",
                private: true,
                exact: true,
                component: Plans,
            },
        ]
    }
];

export default ROUTES