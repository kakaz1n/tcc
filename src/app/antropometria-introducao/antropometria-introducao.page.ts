import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-antropometria-introducao',
  templateUrl: './antropometria-introducao.page.html',
  styleUrls: ['./antropometria-introducao.page.scss'],
})
export class AntropometriaIntroducaoPage implements OnInit {

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
      this.authService.setAntropometria1(this.uid);
      this.navCtrl.navigateForward('antropometria-registro');
    }  
    
    voltar(){
     this.navCtrl.navigateBack('dashboard')
    }
  }