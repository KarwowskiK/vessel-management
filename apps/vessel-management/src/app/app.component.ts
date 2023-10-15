import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './core/menu';

@Component({
  standalone: true,
  selector: 'vw-vessel-managment',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, MenuComponent],
})
export class AppComponent {}
