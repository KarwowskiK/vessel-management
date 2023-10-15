import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { Vessel } from '../models/vessel';
import { VesselsHttpService } from '../services/vessels-http.service';

export interface VesselsState {
  vessels: Vessel[];
}

@Injectable()
export class VesselsComponentStore extends ComponentStore<VesselsState> {
  private vesselsHttpService = inject(VesselsHttpService);

  public readonly vessels$: Observable<Vessel[]> = this.select(
    (state) => state.vessels
  );

  public getVessels = this.effect<void>((source$) =>
    source$.pipe(
      exhaustMap(() =>
        this.vesselsHttpService.getVesselsData().pipe(
          tapResponse({
            next: (vessels) => this.setState({ vessels }),
            error: (error: HttpErrorResponse) => {
              throw new Error(error.message);
            },
          })
        )
      )
    )
  );
}
