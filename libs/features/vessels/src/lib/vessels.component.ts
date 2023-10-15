import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

import { VesselsComponentStore } from './store/vessels.component.store';
import { VesselsHttpService } from './services/vessels-http.service';
import { VesselsStoreFacade } from './store/vessels.store.facade';
import { Vessel } from './models/vessel';

import { columnDefs } from './constant/columns-defs';

@Component({
  selector: 'vessels-workspace-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, AgGridModule],
  providers: [VesselsComponentStore, VesselsHttpService, VesselsStoreFacade],
})
export class VesselsComponent implements OnInit {
  private vesselsStoreFacade = inject(VesselsStoreFacade);

  public readonly vessels$: Observable<Vessel[]> =
    this.vesselsStoreFacade.vessels$;

  public columnDefs: ColDef[] = columnDefs;

  public ngOnInit(): void {
    this.vesselsStoreFacade.getVessels();
  }
}
