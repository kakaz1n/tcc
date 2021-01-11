import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Dados } from '../services/dados';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-aerobica-registro',
  templateUrl: './aerobica-registro.page.html',
  styleUrls: ['./aerobica-registro.page.scss'],
})
export class AerobicaRegistroPage implements OnInit {
  idade= 0;
  sexo: string;
  uid: string;
  user: Dados;
  
  resposta: '';
  corrida: '';
  ciclismo = '';

  validations_form: FormGroup;

  errorMessage: string = '';
  successMessage: string = '';
  validation_messages = {
    'batimentos':[
      {
        type: 'required', message: 'É necessário preencher esse campo.'
      },
      
    ],
    'caminhada':[
      {
        type: 'required', message: 'É necessário preencher esse campo.'
      },
    ]

  };

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
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
     this.validations_form = this.formBuilder.group({      
      caminhada: ['',Validators.required],
      batimentos: ['',Validators.required],   
    }   
    );
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
    let b = this.dadosService.pegarQuestionario(this.uid)
    b.snapshotChanges().subscribe(res =>{
      const data = res.payload.toJSON()
      this.resposta = data['questionarios']['questionario3']['resposta']
      this.ciclismo = data['questionarios']['questionario4']['ciclismo']
      this.corrida = data['questionarios']['questionario4']['corrida']
      console.log(this.resposta)
    console.log(this.ciclismo)
    console.log(this.corrida)
    })
    

  }
  Registrar_aero(value) {
    this.authService.Registrar_aero(this.uid,value)
    this.goDashboard()
  }
  goDashboard(){
    this.navCtrl.navigateForward('/dashboard');
  }

  voltar() {
    this.navCtrl.navigateBack('aerobica-introducao')
  }

}
