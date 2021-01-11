import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentService } from './../shared/appointment.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {
  id: any;
  descricao: any;
  video: SafeResourceUrl;
  nome: any;
  page: any;
  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,private domSatizer: DomSanitizer,
    public navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.page = this.actRoute.snapshot.paramMap.get('page');
    console.log(this.page)

    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.descricao = res['descricao']
      //lembrar que a url tem que ser embed
      this.video = this.domSatizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/hHYDVmWE9FI")
      this.nome = res['nome']
    });

  }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.back()
  }

}
