import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { VesselsComponentStore } from './vessels.component.store';
import { Vessel } from '../models/vessel';

@Injectable()
export class VesselsStoreFacade {
  private vesselsFacade = inject(VesselsComponentStore);

  public readonly vessels$: Observable<Vessel[]> = this.vesselsFacade.vessels$;

  public getVessels(): void {
    this.vesselsFacade.getVessels();
  }
}
