import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pre-questionario',
  templateUrl: './pre-questionario.page.html',
  styleUrls: ['./pre-questionario.page.scss'],
})
export class PreQuestionarioPage implements OnInit {
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
  constructor(   
     public navCtrl: NavController,

    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private dadosserv:DadosService,
    public toastController: ToastController,public alertController: AlertController
    ) { }
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: '<h1>LEIA <br> COM <br>ATENÇÃO!!!</h1>',
        buttons: ['OK'],
        backdropDismiss: false
      });
  
      await alert.present();
    }
    uid: string;

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
      this.presentAlert()
    }
    
  onTermsChecked($event){
    console.log($event.currentTarget.checked)
    this.validations_form.patchValue({termos: $event.currentTarget.checked})
    console.log(this.validations_form)
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  proximo_questionario(){
    console.log(this.uid)
    this.authService.setQuestionario1(this.uid);
    this.navCtrl.navigateForward('/sinais-sintomas');
  }
    
}
