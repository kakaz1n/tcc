import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-flexibilidade-registro',
  templateUrl: './flexibilidade-registro.page.html',
  styleUrls: ['./flexibilidade-registro.page.scss'],
})
export class FlexibilidadeRegistroPage implements OnInit {
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
        pontuacao: ['',Validators.required],        
      }
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
    voltar(){
      this.navCtrl.navigateBack('/flexibilidade-introducao');
    }
    Registrar_Flexibilidade(value) {
      this.authService.Registrar_Flexibilidade(this.uid,value)
      this.goDashboard()
    }
    goDashboard(){
      this.navCtrl.navigateForward('/dashboard');
    }

}
