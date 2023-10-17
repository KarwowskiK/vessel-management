import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

import { EmissionsStoreFacade } from './store/emissions.store.facade';
import { EmissionsComponentStore } from './store/emissions.component.store';
import { EmissionsHttpService } from './services/emissions-http.service';
import { Vessel } from 'libs/features/vessels/src/lib/models/vessel';

@Component({
  selector: 'vessels-workspace-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss'],
  standalone: true,
  imports: [CommonModule, DropdownModule, ProgressSpinnerModule, CardModule, HighchartsChartModule],
  providers: [
    EmissionsComponentStore,
    EmissionsHttpService,
    EmissionsStoreFacade,
  ],
})
export class EmissionsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  private emissionsStoreFacade = inject(EmissionsStoreFacade);

  public readonly gridData$: Observable<Highcharts.Options> = this.emissionsStoreFacade.gridData$;
  public readonly filteredVessels$: Observable<Vessel[]> = this.emissionsStoreFacade.filteredVessels$;

  public ngOnInit(): void {
    this.emissionsStoreFacade.getEmissions();
    this.emissionsStoreFacade.getVesselsList();
  }

  public vesselChanged(vessel: Vessel): void {
    this.emissionsStoreFacade.updateSelectedVessel(vessel);
  }
}
