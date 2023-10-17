import { Injectable, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { NavigationService } from '../../navigation';

@Injectable()
export class MenuService {
  private navigationService = inject(NavigationService);

  public getMenu(): MenuItem[] {
    return [
      {
        label: 'Vessels',
        routerLink: this.navigationService.getVesselsUrl(),
      },
      {
        label: 'Emissions',
        routerLink: this.navigationService.getEmissionsUrl(),
      },
    ];
  }
}
