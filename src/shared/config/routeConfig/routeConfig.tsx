import { AboutPage } from 'pages/AboutPage';
import { Backlog } from 'pages/Backlog';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SignInPage } from 'pages/SignInPage';
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    SIGNIN = 'signIn',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SIGNIN]: '/signIn',
    [AppRoutes.NOT_FOUND]: '*'
} 

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Backlog />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.SIGNIN]: {
        path: RoutePath.signIn, 
        element: <SignInPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found, 
        element: <NotFoundPage />
    },
}
