import { bootstrapApplication } from '@angular/platform-browser';

import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  PreloadAllModules
} from '@angular/router';

import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular';

import { routes } from './app/app.routes';

import { AppComponent } from './app/app.component';

import { pageTransition } from './app/page-transition';


bootstrapApplication(AppComponent, {

  providers: [

    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },

    provideIonicAngular({
      navAnimation: pageTransition
    }),

    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),

  ],

});