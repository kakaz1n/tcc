import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-muscoesqueletico-registro',
  templateUrl: './muscoesqueletico-registro.page.html',
  styleUrls: ['./muscoesqueletico-registro.page.scss'],
})
export class MuscoesqueleticoRegistroPage implements OnInit {

  validations_form: FormGroup;

  errorMessage: string = '';
  successMessage: string = '';
  validation_messages = {
    'flexoes':[
      {
        type: 'required', message: 'É necessário aceitar essa opção.'
      },
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
        flexoes: ['',Validators.required],        
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
      this.navCtrl.navigateBack('/muscoesqueletico-introducao');
    }
    Registrar_musco(value) {
      this.authService.Registrar_Musco(this.uid,value)
      this.goDashboard()
    }
    goDashboard(){
      this.navCtrl.navigateForward('/dashboard');
    }

}
