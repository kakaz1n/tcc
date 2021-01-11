import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treinos-realizados',
  templateUrl: './treinos-realizados.page.html',
  styleUrls: ['./treinos-realizados.page.scss'],
})
export class TreinosRealizadosPage implements OnInit {
  uid:string;
  dateMulti: string[];
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'multi',
    weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    weekStart: 1,
    daysConfig: [],
    monthPickerFormat:['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'],
    color: "transparent", 
    disableWeeks: [],
    from: new Date("2020-11-2"),

  };  
  constructor(    public navCtrl: NavController,    private authService: AuthenticateService,
    private datePipe: DatePipe,public router: Router

    ) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.uid = res.uid;
        console.log(this.uid)
        let z =new Date();
          console.log(formatDate(z,'yyyy-MM-dd','en'))
        let a = this.authService.getTreino_realizado(this.uid)
        a.snapshotChanges().subscribe(res => {
          const dados = res.payload.toJSON()
          console.log(dados)
          this.dateMulti = []
          for(let x in dados){
            console.log(dados[x]['data_realizada'])
            var data = {
              date:dados[x]['data_realizada'], //can give custom data
              marked:false, //can give custom data
              cssClass: dados[x]['cor'], //can give custom data,
            }            
            let p = dados[x]['data_realizada']
            this.optionsRange.daysConfig.push(data)
          }
          console.log(this.optionsRange.daysConfig)
        })
      }
    })
  }
  onChange($event) {
    console.log('datas:'+this.dateMulti)

    console.log("onchange event called");
    //this.datePipe.transform($event[this.dateMulti.length - 1]._d,"yyyy-MM-dd")
    console.log(this.uid)
    let a = this.authService.getTreino_realizado2(this.uid,this.datePipe.transform(this.dateMulti[this.dateMulti.length - 1],"yyyy-MM-dd"))
    console.log([this.dateMulti.length - 1])
    a.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      if(dados != null){
        this.router.navigate(['/treino-realizado/',this.datePipe.transform(this.dateMulti[this.dateMulti.length - 1],"yyyy-MM-dd")])
      }
    })
    
  }
  
  voltar(){
    this.navCtrl.navigateBack('dashboard')
  }
}
