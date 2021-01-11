import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
import { FileChooser} from '@ionic-native/file-chooser/ngx'
import {File} from '@ionic-native/file/ngx'
import firebase from 'firebase'
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.page.html',
  styleUrls: ['./anexo.page.scss'],
})
export class AnexoPage implements OnInit {
  uid: string;
  constructor(public navCtrl:NavController, private fileChooser: FileChooser, private file: File, private authService: AuthenticateService ) { }

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

  choose(){
    this.fileChooser.open().then((url)=>{

      this.file.resolveLocalFilesystemUrl(url).then((newUrl)=>{
        let dirPath = newUrl.nativeURL;
        let dirPathSegments = dirPath.split('/')
        dirPathSegments.pop()
        dirPath = dirPathSegments.join('/')
        this.file.readAsArrayBuffer(dirPath,newUrl.name).then(async (buffer)=>{
          await this.upload( buffer,newUrl.name);
        })
      })
    }
    )
  }

  async upload(buffer,name){
    let blob = new Blob([buffer],{type:"image/jpg"});

    let storage = firebase.storage();

    storage.ref(this.uid+'/anexo/'+name).put(blob).then((d)=>{
      alert("Done");
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }
}
