import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'vessels',
    loadChildren: () =>
      import('@vessels-workspace/vessels').then((m) => m.vesselsRoutes),
  },
  {
    path: 'emissions',
    loadChildren: () =>
      import('@vessels-workspace/emissions').then((m) => m.emissionsRoutes),
  },
];
