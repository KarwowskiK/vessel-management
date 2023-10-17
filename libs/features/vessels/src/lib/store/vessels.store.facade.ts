import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { VesselsComponentStore } from './vessels.component.store';
import { Vessel } from '../models/vessel';

@Injectable()
export class VesselsStoreFacade {
  private vesselsStore = inject(VesselsComponentStore);

  public readonly vessels$: Observable<Vessel[]> = this.vesselsStore.vessels$;

  public getVessels(): void {
    this.vesselsStore.getVessels();
  }
}
