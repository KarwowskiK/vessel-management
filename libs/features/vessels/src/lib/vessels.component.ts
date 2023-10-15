import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { VesselsComponentStore } from './store/vessels.component.store';
import { VesselsHttpService } from './services/vessels-http.service';
import { VesselsStoreFacade } from './store/vessels.store.facade';
import { Vessel } from './models/vessel';

@Component({
  selector: 'vessels-workspace-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [VesselsComponentStore, VesselsHttpService, VesselsStoreFacade],
})
export class VesselsComponent implements OnInit {
  private vesselsStoreFacade = inject(VesselsStoreFacade);

  public readonly vessels$: Observable<Vessel[]> =
    this.vesselsStoreFacade.vessels$;

  public ngOnInit(): void {
    this.vesselsStoreFacade.getVessels();
  }
}
