import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-subir-descer',
  templateUrl: './subir-descer.page.html',
  styleUrls: ['./subir-descer.page.scss'],
})
export class SubirDescerPage implements OnInit {
  uid: string;
  constructor(public navCtrl: NavController,

    private authService: AuthenticateService,
    private dadosserv:DadosService,
    public toastController: ToastController) { }

    ngOnInit() {
     
      this.authService.userDetails().subscribe(res => {
        console.log('res', res);
        if (res !== null) {
          this.uid = res.uid;
          console.log("uid = " +this.uid)  
          //console.log(res.uid)
          // console.log(this.authService.lerDados(res.uid))
        } else {
          this.navCtrl.navigateBack('');
        }
        console.log(this.authService.userDetails)
      }, err => {
        console.log('err', err);
      })
    }

    proxima_pagina(){
      console.log(this.uid)
      this.authService.setSubirDescer1(this.uid);
      this.navCtrl.navigateForward('subir-descer-registro');
    }  
    
    voltar(){
     this.navCtrl.navigateBack('dashboard')
    }

}
