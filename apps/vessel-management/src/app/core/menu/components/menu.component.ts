import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { MenuService } from '../services/menu.service';

@Component({
  standalone: true,
  selector: 'vw-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [MenubarModule],
  providers: [MenuService]
})
export class MenuComponent {
  private menuService = inject(MenuService);
  public readonly menu: MenuItem[] = this.menuService.getMenu();
}
