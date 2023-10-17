import { Route } from '@angular/router';
import { urlParams } from './core/navigation';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: urlParams.Vessels,
    pathMatch: 'full',
  },
  {
    path: `${urlParams.Vessels}`,
    loadChildren: () =>
      import('@vessels-workspace/vessels').then((m) => m.vesselsRoutes),
  },
  {
    path: `${urlParams.Emissions}`,
    loadChildren: () =>
      import('@vessels-workspace/emissions').then((m) => m.emissionsRoutes),
  },
];
