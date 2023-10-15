import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '@vessels-workspace/api';
import { Vessel } from '../models/vessel';

@Injectable()
export class VesselsHttpService {
  private apiBaseUrl = inject(ApiService).apiBaseUrl;
  private http = inject(HttpClient);

  public getVesselsData(): Observable<Vessel[]> {
    const url = `${this.apiBaseUrl}/exercises/vessels.json`;
    return this.http.get<Vessel[]>(url);
  }
}
