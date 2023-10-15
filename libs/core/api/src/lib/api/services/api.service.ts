import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly apiBaseUrl =
    'https://frontendteamfiles.blob.core.windows.net';
}
