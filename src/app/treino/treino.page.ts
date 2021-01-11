import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from './../shared/appointment.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireList } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

import { Dados } from '../services/dados';
import { DadosService } from '../services/dados.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { throwIfEmpty } from 'rxjs/operators';
@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  uid: string;
  nivel_condicionamento_fisico: string;
  nivel_flexibilidade: string;
  nivel_musculo: string;
  nivel_aero: string;
  public now: string;
  public nivel: string;
  public semana: string;
  count: number = 0;
  treino: any;
  treinos: any[];
  cores: any[];
  public innerWidth: any;
  sem: any;
  vezes = -1;
  data_volta: any;
  constructor(private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router, private domSatizer: DomSanitizer,
    public navCtrl: NavController,
    private authService: AuthenticateService,
    private dadosService: DadosService,
    public alertController: AlertController) {
    this.treino = this.actRoute.snapshot.paramMap.get('treino');
    this.sem = this.actRoute.snapshot.paramMap.get('semana')
    this.data_volta = this.actRoute.snapshot.paramMap.get('data')
    console.log(this.sem)
    console.log(this.treino)
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    this.vezes++;
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.uid = res.uid;
        if (!this.sem) {
          console.log(this.uid)
          let b = this.authService.pegarProgresso(this.uid)
          console.log(b)
          b.snapshotChanges().subscribe(res => {
            console.log(res.payload)
            const data = res.payload.toJSON()
            console.log(data)
            this.nivel_aero = data['nivel_aero']
            this.nivel_flexibilidade = data['nivel_flex']
            this.nivel_musculo = data['nivel_musculo']
            this.semana = data['semana']
            if (this.nivel_aero == "Alta") this.nivel_aero = '4';
            else if (this.nivel_aero == "Acima da média" || this.nivel_aero == "Média") this.nivel_aero = '3';
            else if (this.nivel_aero == "Abaixo da média") this.nivel_aero = '2';
            else if (this.nivel_aero == "Baixa") this.nivel_aero = '1';

            if (this.nivel_musculo == "Acima da média") this.nivel_musculo = '4';
            else if (this.nivel_musculo == "Média") this.nivel_musculo = '3';
            else if (this.nivel_musculo == "Abaixo da média") this.nivel_musculo = '2';
            else if (this.nivel_musculo == "Baixa") this.nivel_musculo = '1';

            if (this.nivel_flexibilidade == "Alta") this.nivel_flexibilidade = '4';
            else if (this.nivel_flexibilidade == "Média") this.nivel_flexibilidade = '3';
            else if (this.nivel_flexibilidade == "Abaixo da média") this.nivel_flexibilidade = '2';
            else if (this.nivel_flexibilidade == "Baixa") this.nivel_flexibilidade = '1';
            if (this.treino == 'aerobico') this.nivel = this.nivel_aero
            if (this.treino == 'muscular') this.nivel = this.nivel_musculo
            if (this.treino == 'flexibilidade') this.nivel = this.nivel_flexibilidade
            let c = this.authService.getTreino(this.treino, this.nivel, this.semana)
            console.log(c)
            c.snapshotChanges().subscribe(res => {
              console.log(res.payload.toJSON())
              let x = res.payload.toJSON()
              console.log(x)
              this.treinos = []
              for (let i in x) {
                this.count++;
                console.log(i)
                this.treinos.push({
                  x: x[i],
                  cor: "success",
                })
              }

            })

          })
          console.log(this.treinos.length)
          //console.log(res.uid)
          // console.log(this.authService.lerDados(res.uid))
        } else {
          console.log(this.uid)
          let b = this.authService.pegarProgresso(this.uid)
          console.log(b)
          b.snapshotChanges().subscribe(res => {
            console.log(res.payload)
            const data = res.payload.toJSON()
            console.log(data)
            this.nivel_aero = data['nivel_aero']
            this.nivel_flexibilidade = data['nivel_flex']
            this.nivel_musculo = data['nivel_musculo']
            this.semana = data['semana']
            if (this.nivel_aero == "Alta") this.nivel_aero = '4';
            else if (this.nivel_aero == "Acima da média" || this.nivel_aero == "Média") this.nivel_aero = '3';
            else if (this.nivel_aero == "Abaixo da média") this.nivel_aero = '2';
            else if (this.nivel_aero == "Baixa") this.nivel_aero = '1';

            if (this.nivel_musculo == "Acima da média") this.nivel_musculo = '4';
            else if (this.nivel_musculo == "Média") this.nivel_musculo = '3';
            else if (this.nivel_musculo == "Abaixo da média") this.nivel_musculo = '2';
            else if (this.nivel_musculo == "Baixa") this.nivel_musculo = '1';

            if (this.nivel_flexibilidade == "Alta") this.nivel_flexibilidade = '4';
            else if (this.nivel_flexibilidade == "Média") this.nivel_flexibilidade = '3';
            else if (this.nivel_flexibilidade == "Abaixo da média") this.nivel_flexibilidade = '2';
            else if (this.nivel_flexibilidade == "Baixa") this.nivel_flexibilidade = '1';
            if (this.treino == 'aerobico') this.nivel = this.nivel_aero
            if (this.treino == 'muscular') this.nivel = this.nivel_musculo
            if (this.treino == 'flexibilidade') this.nivel = this.nivel_flexibilidade
            let c = this.authService.getTreino(this.treino, this.nivel, this.sem)
            console.log(c)
            c.snapshotChanges().subscribe(res => {
              console.log(res.payload.toJSON())
              let x = res.payload.toJSON()
              console.log(x)
              this.treinos = []
              for (let i in x) {
                this.count++;
                console.log(i)
                this.treinos.push({
                  x: x[i],
                  cor: "tertiary",
                })
              }

            })

          })
          console.log(this.treinos.length)
          //console.log(res.uid)
          // console.log(this.authService.lerDados(res.uid))
        }

      } else {
        this.navCtrl.navigateBack('');
      }
      console.log(this.authService.userDetails)
    }, err => {
      console.log('err', err);
    })

  }
  checkado() {
    if (this.sem) return true
    if (this.count) return false;
    return true
  }

  onTermsChecked($event) {
    console.log($event.currentTarget.name)
    if ($event.currentTarget.checked) this.count--;
    else this.count++;
    this.mudarcor($event.currentTarget.name)
  }
  mudarcor(nome) {
    let x=0;
    for( let i of this.treinos){
      console.log('i:'+i['x']['nome']+'nome:'+nome)
      if(i['x']['nome'] == nome) break;
      x++;
    } 
    if (!this.sem) {
      console.log(nome)
      if (this.treinos[x]['cor'] == "success") {
        this.treinos[x]['cor'] = "tertiary"
      } else this.treinos[x]['cor'] = "success"
    }

  }
  goExercicio(x) {
    console.log(x)
    this.navCtrl.navigateForward('exercicio/' + x)
  }
  voltar() {
    if(this.sem) this.router.navigate(['/treino-realizado/',this.data_volta])
    else{
      this.navCtrl.navigateBack('dashboard')
    this.vezes++;
    }
  }
  set_treino() {
    if(!this.sem){
      console.log('dale')
    this.authService.SetTreino(this.uid, this.treino)
    this.navCtrl.navigateBack('dashboard')
    }else this.router.navigate(['/treino-realizado/',this.data_volta])
  }
}
