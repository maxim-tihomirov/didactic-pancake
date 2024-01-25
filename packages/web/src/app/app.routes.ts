import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'demo',
        loadComponent: () => import('./components/demo-page/demo-page.component').then(component => component.DemoPageComponent)
    },
    {
        path: 'main',
        loadComponent: () => import('./components/main-page/main-page.component').then(component => component.MainPageComponent)
    }
];
