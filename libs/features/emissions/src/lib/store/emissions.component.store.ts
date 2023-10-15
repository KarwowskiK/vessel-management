import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Emission } from '../models/emission';
import { EmissionsHttpService } from '../services/emissions-http.service';

export interface EmissionsState {
  emissions: Emission[];
}

@Injectable()
export class EmissionsComponentStore extends ComponentStore<EmissionsState> {
  public readonly emission$: Observable<Emission[]> = this.select(
    (state) => state.emissions
  );

  private emissionsHttpService = inject(EmissionsHttpService);

  public getEmissions = this.effect<void>((source$) =>
    source$.pipe(
      exhaustMap(() =>
        this.emissionsHttpService.getEmissionData().pipe(
          tapResponse({
            next: (emissions) => this.setState({ emissions }),
            error: (error: HttpErrorResponse) => {
              throw new Error(error.message);
            },
          })
        )
      )
    )
  );
}
