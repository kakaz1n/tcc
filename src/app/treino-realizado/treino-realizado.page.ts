import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-treino-realizado',
  templateUrl: './treino-realizado.page.html',
  styleUrls: ['./treino-realizado.page.scss'],
})
export class TreinoRealizadoPage implements OnInit {
  data: string;
  data2: string;
  data3:Date;
  uid:string;
  atual_aero: number;
  max_aero: number;
  atual_flex: number;
  max_flex: number;
  atual_musc: number;
  max_musc: number;
  semana: string;
  cor:string;
  constructor(private actRoute: ActivatedRoute,
    private authService: AuthenticateService,public navCtrl: NavController, private datePipe: DatePipe,
    ) {
    this.data3 = new Date(this.actRoute.snapshot.paramMap.get('data'));
    this.data2 = (this.datePipe.transform(this.data3,"dd/MM/yyyy")).toString()
    this.data = this.actRoute.snapshot.paramMap.get('data');
    this.authService.userDetails().subscribe(res => {
          console.log('res', res);
          if (res !== null) {
            this.uid = res.uid;
            console.log(this.uid)
            console.log(this.data)
            let a = this.authService.getTreino_realizado2(this.uid,this.data)
            a.snapshotChanges().subscribe(res => {
              const dados = res.payload.toJSON()
              console.log('dados' + dados)
              this.atual_aero =dados['atual_aero']   
              this.max_aero = dados['max_aero']     
              this.atual_flex =dados['atual_flex']   
              this.max_flex = dados['max_flex']  
              this.atual_musc =dados['atual_aero']   
              this.max_musc = dados['max_musc']    
              this.semana = dados['semana']   
              this.cor = dados['cor']       
            })
          }
        })
   }

  ngOnInit() {
    

  }
  
  voltar(){
    this.navCtrl.navigateBack('treinos-realizados')
  }
}
