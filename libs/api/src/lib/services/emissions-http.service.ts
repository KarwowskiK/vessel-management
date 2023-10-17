import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Emission } from '../models/emission';
import { ApiBaseUrl } from '../constants/api-base-url';

@Injectable()
export class EmissionsHttpService {
  private apiBaseUrl = inject(ApiBaseUrl);
  private http = inject(HttpClient);

  public getEmissionData(): Observable<Emission[]> {
    const url = `${this.apiBaseUrl}/exercises/emissions.json`;
    return this.http.get<Emission[]>(url);
  }
}
