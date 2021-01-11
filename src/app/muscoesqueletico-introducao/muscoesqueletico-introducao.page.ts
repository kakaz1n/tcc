import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Dados } from '../services/dados';


@Component({
  selector: 'app-muscoesqueletico-introducao',
  templateUrl: './muscoesqueletico-introducao.page.html',
  styleUrls: ['./muscoesqueletico-introducao.page.scss'],
})
export class MuscoesqueleticoIntroducaoPage implements OnInit {
  idade: number;
  sexo: string;
  uid: string;
  user: Dados;
  constructor(public navCtrl: NavController,

    private authService: AuthenticateService,
    private dadosserv: DadosService,
    public toastController: ToastController, private dadosService: DadosService
  ) { }
  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.uid = res.uid;
        console.log("uid = " + this.uid)
        this.getIdade_sexo()

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
  getIdade_sexo() {
    console.log(this.uid)
    console.log("a")
    let a = this.dadosService.getBooking(this.uid)
    console.log(a)
    a.snapshotChanges().subscribe(res => {
      const data = res.payload.toJSON()
      console.log(data)
      data['email']
      console.log(formatDate(new Date, 'yyyy/MM/dd', 'en'))
      let dob = new Date(data['dados']['dob'])
      let y = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((y / (1000 * 3600 * 24)) / 365);
      this.sexo = data['dados']['sexo']
      console.log(this.idade)
      console.log(this.sexo)

    })



  }
  proxima_pagina() {
    console.log(this.uid)
    this.authService.setMusco1(this.uid);
    this.navCtrl.navigateForward('muscoesqueletico-registro');
  }

  voltar() {
    this.navCtrl.navigateBack('dashboard')
  }

}
