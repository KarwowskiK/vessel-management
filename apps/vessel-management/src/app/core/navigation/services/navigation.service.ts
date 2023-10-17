import { Injectable } from '@angular/core';

import { urlParams } from '../constants/url-params';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly baseUrl = '/';

  public getBaseUrl(): string[] {
    return [this.baseUrl];
  }

  public getVesselsUrl(): string[] {
    return [this.baseUrl, urlParams.Vessels];
  }

  public getEmissionsUrl(): string[] {
    return [this.baseUrl, urlParams.Emissions];
  }
}
