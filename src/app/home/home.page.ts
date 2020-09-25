import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { MenuController, ModalController } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { SnackbarService } from '../services/snackbar/snackbar.service';
import { LoaderService } from '../services/loader/loader.service';
import { PushNotificationService } from '../services/pushNotification/push-notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  videoOpts: { volume: number; };


  constructor(private videoplayer: VideoPlayer , 
    public modalCtrl: ModalController , 
    public  sanitizer:DomSanitizer,
    private snackbar: SnackbarService,
    private menu: MenuController,
    private loaderService:LoaderService,
    private pushNotificationService: PushNotificationService) { }

  ngOnInit() {
    this.loaderload()
  
  }

   loaderload(){
     this.loaderService.presentLoader()
   }

   open(){
     this.loaderService.dismissloader()
    // this.snackbar.snackbar('This is snackbar', true)
  }

  open1(){
    this.snackbar.snackbar('This is snackbar', true)
  }

   notificationSetup() {
    this.pushNotificationService.getToken();
    this.pushNotificationService.onNotifications().subscribe(
      (msg) => {
       console.log(msg)
      });
  }

 

  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoplayer.play('https://www.youtube.com/watch?v=Q0xpEXqSyUU&ab_channel=SimonGrimm').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
}
public stopPlayingVideo(){
    this.videoplayer.close();
}

// playVideoLocal() {
//   this.videoplayer.play('').then(() => {
//     console.log('video completed');
//   }).catch(err => {
//     console.log(err);
//   });
// }

// playVideoHosted() {
//   this.videoplayer.play('https://www.youtube.com/watch?v=Q0xpEXqSyUU&ab_channel=SimonGrimm').then(() => {
//     console.log('video completed');
//   }).catch(err => {
//     console.log(err);
//   });
// }


}
