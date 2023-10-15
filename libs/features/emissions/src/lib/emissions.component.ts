import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';

import { EmissionsStoreFacade } from './store/emissions.store.facade';
import { EmissionsComponentStore } from './store/emissions.component.store';
import { EmissionsHttpService } from './services/emissions-http.service';
import { Emission } from './models/emission';

@Component({
  selector: 'vessels-workspace-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule],
  providers: [
    EmissionsComponentStore,
    EmissionsHttpService,
    EmissionsStoreFacade,
  ],
})
export class EmissionsComponent implements OnInit {
  private emissionsStoreFacade = inject(EmissionsStoreFacade);

  public readonly emissions$: Observable<Emission[]> =
    this.emissionsStoreFacade.emissions$;

  public ngOnInit(): void {
    this.emissionsStoreFacade.getEmissions();
  }
}
