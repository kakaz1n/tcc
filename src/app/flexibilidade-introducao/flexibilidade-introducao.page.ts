import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-flexibilidade-introducao',
  templateUrl: './flexibilidade-introducao.page.html',
  styleUrls: ['./flexibilidade-introducao.page.scss'],
})
export class FlexibilidadeIntroducaoPage implements OnInit {
  uid:string;
  valor: Array<{pontuacao:number}>
  idade: number;

  constructor(public navCtrl: NavController,

    private authService: AuthenticateService,
    private dadosserv:DadosService,
    public toastController: ToastController,
    private db: AngularFireDatabase,
    ) { }

    ngOnInit() {
     
      this.authService.userDetails().subscribe(res => {
        console.log('res', res);
        if (res !== null) {
          this.uid = res.uid;
          console.log("uid = " +this.uid)  
          let a = this.db.object('usuarios/' + this.uid + "/dados");

          a.snapshotChanges().subscribe(res => {
            const dados = res.payload.toJSON()
            let now = Date.now().toString();
            let dob = new Date(dados['dob'])
            let a = Math.abs(Date.now() - dob.getTime())
            this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
            console.log(this.valor)

          })
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
      this.authService.setFlexibilidade1(this.uid);
      this.navCtrl.navigateForward('flexibilidade-registro');
    }
    pular(){
      this.authService.setFlexibilidade1(this.uid);
      this.authService.Registrar_Flexibilidade(this.uid,"pulado")
      this.navCtrl.navigateForward('dashboard')
    }  
    
    voltar(){
     this.navCtrl.navigateBack('dashboard')
    }

}
