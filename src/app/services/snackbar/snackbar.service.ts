import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public toastcontroller: ToastController ) { }


  async snackbar(msg , boolean){
    if(boolean == true){
      console.log(msg , boolean)
      const toast = await this.toastcontroller.create({
        message:msg,
        position:'top',
        color:'success',
        animated:true,
        duration:2000
      })
      toast.present(); 
    } else {

      const toast = await this.toastcontroller.create({
        message:msg,
        position:'top',
        color:'danger',
        animated:true,
        duration:2000
      })
      toast.present();
    }
   
   
    
     }
  }

