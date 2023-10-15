import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '@vessels-workspace/api';

import { Emission } from '../models/emission';

@Injectable()
export class EmissionsHttpService {
  private apiBaseUrl = inject(ApiService).apiBaseUrl;
  private http = inject(HttpClient);

  public getEmissionData(): Observable<Emission[]> {
    const url = `${this.apiBaseUrl}/exercises/emissions.json`;
    return this.http.get<Emission[]>(url);
  }
}