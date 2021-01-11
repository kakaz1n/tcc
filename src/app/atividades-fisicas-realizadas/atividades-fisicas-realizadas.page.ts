import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-atividades-fisicas-realizadas',
  templateUrl: './atividades-fisicas-realizadas.page.html',
  styleUrls: ['./atividades-fisicas-realizadas.page.scss'],
})
export class AtividadesFisicasRealizadasPage implements OnInit {

  caminhada: boolean = false;
  corrida: boolean = false;
  ciclismo: boolean = false;
  natacao: boolean = false;
  hidro: boolean = false;
  musculacao: boolean = false;
  funcional: boolean = false;
  pillates: boolean = false;
  outra: string = '';

  clicavel: boolean = false;
  cont = 0;
  uid: string;

  constructor(public navCtrl: NavController,
    private authService: AuthenticateService,
    private dadosService: DadosService) { }

  ngOnInit() {
    
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.uid = res.uid;
        console.log("uid = " + this.uid)
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

  
  onTermsChecked($event) {
    if (($event.currentTarget.name) == "caminhada") this.caminhada = !this.caminhada;
    if (($event.currentTarget.name) == "corrida") this.corrida = !this.corrida;
    if (($event.currentTarget.name) == "ciclismo") this.ciclismo = !this.ciclismo;
    if (($event.currentTarget.name) == "natacao") this.natacao = !this.natacao;
    if (($event.currentTarget.name) == "hidro") this.hidro = !this.hidro;
    if (($event.currentTarget.name) == "musculacao") this.musculacao = !this.musculacao;
    if (($event.currentTarget.name) == "funcional") this.funcional = !this.funcional;
    if (($event.currentTarget.name) == "pillates") this.pillates = !this.pillates;
    if (($event.currentTarget.name) == "outra") this.outra = $event.currentTarget.value;
    if ($event.currentTarget.checked) this.cont++
    else this.cont--;
    if(this.cont == 0 && this.outra != '')this.cont=1;
    if(this.cont == 0 && this.outra != ' ')this.cont=0;

    if(this.cont >0 ) this.clicavel = true;
    else this.clicavel = false;
    if(this.cont < 0) this.cont=0;
    console.log(this.cont)
  }
  somar(){
    if(this.cont){
      //vai pra prox
      this.authService.setQuestionario4(this.uid,this.caminhada,this.ciclismo,this.corrida,this.natacao,this.hidro,this.musculacao,this.funcional,this.pillates,this.outra)
      this.goEstado_historico()
    }
  }
  
  goEstado_historico(){
    this.navCtrl.navigateForward('/estado-historico');
  }
  
  goAtividadefisica() {
    this.navCtrl.navigateForward('/atividade-fisica');
  }
}
