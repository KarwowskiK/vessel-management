import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Emission } from '../models/emission';
import { EmissionsHttpService } from '../services/emissions-http.service';
import { Vessel } from 'libs/features/vessels/src/lib/models/vessel';

interface EmissionsState {
  emissions: Emission[];
  vessels: Vessel[];
  selectedVessel: Vessel | null;
}

@Injectable()
export class EmissionsComponentStore extends ComponentStore<EmissionsState> {
  public readonly selectedVessel$: Observable<Vessel | null> = this.select((state) => state.selectedVessel);

  public readonly emission$: Observable<Emission> =
    this.select(
      this.select((state) => state.emissions),
      this.select((state) => state.selectedVessel),
      (emissions, selectedVessel) =>
        emissions.find(emission => emission.id === selectedVessel?.id) ?? null);

  public readonly filteredVessels$: Observable<Vessel[]> =
    this.select(
      this.select((state) => state.vessels),
      this.select((state) => state.emissions),
      (vessels, emissions) =>
        vessels.filter(vessel => emissions.find(emission => vessel.id === emission.id)))
        .pipe(tap((vessel) =>  this.updateSelectedVessel(vessel[0])));

  constructor(private emissionsHttpService: EmissionsHttpService) {
    super();
    this.setState({
      emissions: [],
      vessels: [],
      selectedVessel: null
    })
  } 

  public getEmissions = this.effect<void>((source$) =>
    source$.pipe(
      exhaustMap(() =>
        this.emissionsHttpService.getEmissionData().pipe(
          tapResponse({
            next: ((emissions: Emission[]) => {
              this.patchState({ emissions })
            }),
            error: (error: HttpErrorResponse) => {
              throw new Error(error.message);
            },
          })
        )
      )
    )
  );

  public getVesselsList = this.effect<void>((source$) =>
    source$.pipe(
      exhaustMap(() =>
        this.emissionsHttpService.getVesselsList().pipe(
          tapResponse({
            next: ((vessels: Vessel[]) => this.patchState({ vessels })),
            error: (error: HttpErrorResponse) => {
              throw new Error(error.message);
            },
          })
        )
      )
    )
  );

  public updateSelectedVessel(selectedVessel: Vessel): void {
    this.patchState({ selectedVessel: selectedVessel });
  }
}
