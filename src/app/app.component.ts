import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AuthenticateService } from '../app/services/authentication.service';
import * as firebase from 'firebase/app';
var firebaseConfig:{
  apiKey: "AIzaSyBGqEDar_7OAIYl5o81MkeFeAaUCG5TXuA",
  authDomain: "tcc2020-62391.firebaseapp.com",
  databaseURL: "https://tcc2020-62391.firebaseio.com",
  projectId: "tcc2020-62391",
  storageBucket: "tcc2020-62391.appspot.com",
  messagingSenderId: "480998448442",
  appId: "1:480998448442:web:0dccb9786bfb57a0528403",
  measurementId: "G-JGRHJ0SM03"
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate : any;
  uid:any;
  nome: ''
  subscription:any;
  url:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    db: AngularFireDatabase,
    private authService: AuthenticateService,
    private navCtrl: NavController,

  ) {    
    this.sideMenu();
    this.initializeApp();
    this.authService.userDetails().subscribe(res => {
      if (res !== null) {
        this.uid = res.uid;
        console.log(this.uid)
      }
       let a = this.authService.getUsuario(this.uid)
       a.snapshotChanges().subscribe(res => {
        const dados = res.payload.toJSON()
        this.nome = dados['nome']
        const storageRef = firebase.default.storage().ref()
        console.log(dados['url'])
        console.log(storageRef)
        storageRef.listAll().then(result => {
          console.log(result)
          result.items.forEach(async ref => {
            console.log(ref)
            if(ref.name == dados['url']) this.url = await ref.getDownloadURL()            
          });
        });
       })
    })
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(()=>{
      if(window.confirm("Você quer mesmo sair do aplicativo?")) navigator['app'].exitApp();
  });
  }
  ionViewWillLeave(){
    this.subscription.unsubscribe();
}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Exercicios",
        url   : "/lista-exercicios",
        icon:"barbell"
      },
      {
        title : "Treinos Realizados",
        url   : "/treinos-realizados",
        icon: "calendar"
      },
      {
        title : "Como são feitos os treinos",
        url   : "/feitos-treinos",
        icon: "help-circle"
      },
      {
        title:"Sobre",
        url: "/sobre",
        icon:"information-circle"
      }
    ]
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('login');
      })
      .catch(error => {
        console.log(error);
      })
  }
  sair(){
    navigator['app'].exitApp();
  }
}
