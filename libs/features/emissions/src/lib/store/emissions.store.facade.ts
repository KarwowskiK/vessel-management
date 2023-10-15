import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { EmissionsComponentStore } from './emissions.component.store';
import { Emission } from '../models/emission';

@Injectable()
export class EmissionsStoreFacade {
  private emissionsFacade = inject(EmissionsComponentStore);

  public readonly emissions$: Observable<Emission[]> =
    this.emissionsFacade.emission$;

  public getEmissions(): void {
    this.emissionsFacade.getEmissions();
  }
}
