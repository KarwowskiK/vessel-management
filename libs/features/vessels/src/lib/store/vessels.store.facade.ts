import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Vessel } from '@vessels-workspace/api';

import { VesselsComponentStore } from './vessels.component.store';

@Injectable()
export class VesselsStoreFacade {
  private vesselsStore = inject(VesselsComponentStore);

  public readonly vessels$: Observable<Vessel[]> = this.vesselsStore.vessels$;

  public getVessels(): void {
    this.vesselsStore.getVessels();
  }
}
