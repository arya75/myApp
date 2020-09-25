import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../header/header.component';
import { ApihandlingsService } from '../services/apihandlings/apihandlings.service';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { LoaderService } from '../services/loader/loader.service';
import { PushNotificationService } from '../services/pushNotification/push-notification.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers:[
    ApihandlingsService , 
    SnackbarService,
    LoaderService,
    PushNotificationService
  ],
  declarations: [HomePage , HeaderComponent]
})
export class HomePageModule {}
