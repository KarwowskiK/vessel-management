import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vessel } from '../models/vessel';
import { ApiBaseUrl } from '../constants/api-base-url';

@Injectable()
export class VesselsHttpService {
  private apiBaseUrl = inject(ApiBaseUrl);
  private http = inject(HttpClient);

  public getVesselsData(): Observable<Vessel[]> {
    const url = `${this.apiBaseUrl}/exercises/vessels.json`;
    return this.http.get<Vessel[]>(url);
  }
}
