import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDcqBE5sVY32x7Wbg1TeVUrVN168gROWp0",
      authDomain: "fir-ionic-project-46a06.firebaseapp.com",
      projectId: "fir-ionic-project-46a06",
      storageBucket: "fir-ionic-project-46a06.appspot.com",
      messagingSenderId: "665039049388",
      appId: "1:665039049388:web:3998dea16156ddd15f0509"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
