import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atividade-fisica',
  templateUrl: './atividade-fisica.page.html',
  styleUrls: ['./atividade-fisica.page.scss'],
})
export class AtividadeFisicaPage implements OnInit {

  uid: string;


  constructor(
    public navCtrl: NavController,

   private authService: AuthenticateService,) { }

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
  goSinais(){
    this.navCtrl.navigateBack('/sinais-sintomas');
  }
  resposta(res){
    console.log(this.uid)
    console.log(res)
    this.authService.setQuestionario3(this.uid,res)
    if(res == 'nao') this.goEstado_historico()
    if(res == 'sim') this.goAtividades_fisicas_realizadas()
  }
  goEstado_historico(){
    this.navCtrl.navigateForward('/estado-historico');
  }
  goAtividades_fisicas_realizadas(){
    this.navCtrl.navigateForward('/atividades-fisicas-realizadas')
  }
}
