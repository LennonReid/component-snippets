import { Route } from '@angular/router';

const SAMPLE_ROUTES = [
  {
    path: 'calendar',
    loadComponent: () => import('@cs/samples/calendar').then((c) => c.SamplesCalendarPage),
  },
  {
    path: 'select-search',
    loadComponent: () => import('@cs/samples/select-search').then((c) => c.SamplesSelectSearchPage),
  }
]
export const appRoutes: Route[] = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((c) => c.HomePage),
  },
  ...SAMPLE_ROUTES
];
