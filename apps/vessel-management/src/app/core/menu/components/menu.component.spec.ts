import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent, RouterTestingModule],
    }).compileComponents();
  });
});
