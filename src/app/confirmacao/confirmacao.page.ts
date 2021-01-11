import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.page.html',
  styleUrls: ['./confirmacao.page.scss'],
})
export class ConfirmacaoPage implements OnInit {

  validations_form: FormGroup;

  errorMessage: string = '';
  successMessage: string = '';
  validation_messages = {
    'termos':[
      {
        type: 'required', message: 'É necessário aceitar essa opção.'
      },
      {
        type: 'pattern', message: 'É necessário aceitar essa opção.'
      }
    ],

  };
  uid: string;


  constructor(public navCtrl: NavController,

    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private dadosserv:DadosService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({        
      termos:['',Validators.compose([
        Validators.required,Validators.pattern('true')
      ])]}
    );
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
  onTermsChecked($event){
    console.log($event.currentTarget.checked)
    this.validations_form.patchValue({termos: $event.currentTarget.checked})
    console.log(this.validations_form)
  }
  proxima_pagina(){
    console.log('proxima pagina')
    console.log("id" + this.uid)
    this.authService.setQuestionario6(this.uid);
    this.navCtrl.navigateForward('treino-iniciar');
  }  
  goEstado_historico(){
    this.navCtrl.navigateBack('estado-historico');
  }
}
