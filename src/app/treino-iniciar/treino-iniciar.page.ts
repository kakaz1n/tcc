import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-treino-iniciar',
  templateUrl: './treino-iniciar.page.html',
  styleUrls: ['./treino-iniciar.page.scss'],
})
export class TreinoIniciarPage implements OnInit {
  uid:string;
  constructor(public navCtrl: NavController,
    
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

  goOrientacoesGerais(){
    this.authService.setTreino_iniciar(this.uid);
    this.navCtrl.navigateForward('/orientacoes-gerais');
  }
  goDashboard(){
    this.navCtrl.navigateBack('/dashboard');
  }

}
