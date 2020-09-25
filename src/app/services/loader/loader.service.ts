import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

  async presentLoader(){
    
    const loading = await this.loadingController.create({
      spinner:'lines-small',
      cssClass:'my-custom-class',
      message:'Please wait...',
      translucent: true,
      duration:2000
    });
    await loading.present();

    const {role , data } = await loading.onDidDismiss();
    console.log('loading dismissed' , role)
  }


  dismissloader(){
    this.loadingController.dismiss()
  }
}
