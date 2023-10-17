import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ApiBaseUrl } from '@vessels-workspace/api';

import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: ApiBaseUrl,
      useValue: 'https://frontendteamfiles.blob.core.windows.net'
    }
  ],
};
