import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { HttpClientModule} from '@angular/common/http';
import { ApihandlingsService } from './services/apihandlings/apihandlings.service';
import { SnackbarService } from './services/snackbar/snackbar.service';
import { LoaderService } from './services/loader/loader.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { PushNotificationService } from './services/pushNotification/push-notification.service';

const config = {
  apiKey: "AIzaSyBajfjLTcHXXLlqI6gljqZ8563eSUMMvBM",
  authDomain: "push-notification-e69ac.firebaseio.com",
  databaseURL: "https://push-notification-e69ac.firebaseio.com",
  projectId: "push-notification-e69ac",
  storageBucket: "push-notification-e69ac.appspot.com",
  messagingSenderId: "414251564891"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    ApihandlingsService,
    SnackbarService,
    LoaderService,
    Firebase,
    PushNotificationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
