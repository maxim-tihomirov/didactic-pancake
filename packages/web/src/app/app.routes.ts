import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'demo',
        loadComponent: () => import('./components/demo-page/demo-page.component').then(component => component.DemoPageComponent)
    }
];
