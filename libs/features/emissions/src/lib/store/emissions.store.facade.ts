import { Injectable, inject } from '@angular/core';
import { Observable, combineLatest, filter, map } from 'rxjs';

import { EmissionsComponentStore } from './emissions.component.store';
import { Vessel } from 'libs/features/vessels/src/lib/models/vessel';
import { prepareChartData } from '../helper/prepare-chart-data';

@Injectable()
export class EmissionsStoreFacade {
  private emissionsStore = inject(EmissionsComponentStore);

  public readonly gridData$: Observable<Highcharts.Options> = 
    combineLatest([
      this.emissionsStore.emission$,
      this.emissionsStore.selectedVessel$
    ])
  .pipe(
    filter(([emission, vessel]) => !!emission && !!vessel),
    map(([emission, vessel]) => prepareChartData(vessel, emission))
  );

  public readonly filteredVessels$: Observable<Vessel[]> = this.emissionsStore.filteredVessels$;

  public getEmissions(): void {
    this.emissionsStore.getEmissions();
  }

  public getVesselsList(): void {
    this.emissionsStore.getVesselsList();
  }

  public updateSelectedVessel(selectedVessel: Vessel): void {
    this.emissionsStore.updateSelectedVessel(selectedVessel);
  }
}
