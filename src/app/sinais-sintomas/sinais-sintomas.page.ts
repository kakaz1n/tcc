import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { LoginPageRoutingModule } from '../login/login-routing.module';

import { ActionSheetController, Platform } from '@ionic/angular';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
const MEDIA_FOLDER_NAME = 'my_media';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController } from '@ionic/angular';
import {Plugins, CameraResultType} from '@capacitor/core';

const {Camera} = Plugins;

@Component({
  selector: 'app-sinais-sintomas',
  templateUrl: './sinais-sintomas.page.html',
  styleUrls: ['./sinais-sintomas.page.scss'],
})
export class SinaisSintomasPage implements OnInit {

  dor: boolean = false;
  ar: boolean = false;
  tontura: boolean = false;
  inchaco: boolean = false;
  batimento: boolean = false;
  queimacao: boolean = true;
  cont = 0;
  salvo:boolean= false;
  uid: string;
  imageResponse: any;
  options: any;
  
  imageElement : any;

  files = [];
  uploadProgress = 0;
  constructor(public navCtrl: NavController,
    private authService: AuthenticateService,
    public alertController: AlertController,
    private imagePicker: ImagePicker,
    private mediaCapture: MediaCapture,
    private file: File,
    private media: Media,
    private streamingMedia: StreamingMedia,
    private photoViewer: PhotoViewer,
    private actionSheetController: ActionSheetController,
    private plt: Platform,
    private toastCtrl: ToastController,
    private storage: AngularFireStorage,) { }


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
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      message: '<h1>ATENÇÃO</h1> <br> <h2 style="text-align:justify">Você deve fazer uma avaliação médica antes de iniciar o programa de exercícios. </h2>',
      buttons: [{
        text: 'Tenho atestado médico',
        role:'cancel',
        handler: () => {
          this.goAnexo()
        }
      },
      {
        text: 'Selecionar novamente',
        role:'cancel'

      },
      {
        text: 'Sair',        
        handler: () => {
          this.logout()
        }
      },
      ],
    });

    await alert.present();
  }


  onTermsChecked($event) {
    if (($event.currentTarget.name) == "ion-cb-0") this.dor = !this.dor;
    if (($event.currentTarget.name) == "ion-cb-1") this.ar = !this.ar;
    if (($event.currentTarget.name) == "ion-cb-2") this.tontura = !this.tontura;
    if (($event.currentTarget.name) == "ion-cb-3") this.inchaco = !this.inchaco;
    if (($event.currentTarget.name) == "ion-cb-4") this.batimento = !this.batimento;
    if (($event.currentTarget.name) == "ion-cb-5") this.queimacao = !this.queimacao;
    console.log($event.currentTarget.name)
    if ($event.currentTarget.checked) this.cont++
    else this.cont--;
  }
  somar() {
    if (this.cont) {
      this.presentAlert()
    } else {
      this.proximo_questionario()
    }
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
  async goAnexo() {
    console.log("ir pro anexo")
    this.selectMedia()
    this.loadFiles()
    //pode ser só uma funcao pra pegar um arquivo
  }
  proximo_questionario() {
    console.log(this.uid)
    this.authService.setQuestionario2(this.uid);
    this.navCtrl.navigateForward('/atividade-fisica');
  }
  goPre_questionario() {
    this.navCtrl.navigateBack('/pre-questionario');
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.imageElement = imageUrl;
  }
  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 1,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }
  
  loadFiles() {
    this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
      res => {
        this.files = res;
      },
      err => console.log('error loading files: ', err)
    );
  }
  async selectMedia() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Como você gostaria de adicionar a foto?',
      buttons: [
        {
          text: 'Tirar foto',
          handler: () => {
            this.captureImage();
          }
        },       
        {
          text: 'Pegar imagem',
          handler: () => {
            this.pickImages();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  pickImages() {

    this.options = {
      maximumImagesCount: 1,
      width: 200,
      quality: 25,
      outputType: 1
    };    this.imagePicker.getPictures(this.options).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          this.copyFileToLocalDir(results[i]);
          this.uploadFile(this.files[this.files.length -1])
        }
      }
    );
 
    // If you get problems on Android, try to ask for Permission first
    // this.imagePicker.requestReadPermission().then(result => {
    //   console.log('requestReadPermission: ', result);
    //   this.selectMultiple();
    // });
  }
 
  captureImage() {
    this.mediaCapture.captureImage().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          this.copyFileToLocalDir(data[0].fullPath);
          this.uploadFile(this.files[this.files.length -1])
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
 
    const ext = myPath.split('.').pop();
    const d = Date.now();
    const newName = `${d}.${ext}`;
 
    const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
 
    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      success => {
        this.loadFiles();
      },
      error => {
        console.log('error: ', error);
      }
    );
  }
 
  openFile(f: FileEntry) {
    if (f.name.indexOf('.wav') > -1) {
      // We need to remove file:/// from the path for the audio plugin to work
      const path =  f.nativeURL.replace(/^file:\/\//, '');
      const audioFile: MediaObject = this.media.create(path);
      audioFile.play();
    } else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
      // E.g: Use the Streaming Media plugin to play a video
      this.streamingMedia.playVideo(f.nativeURL);
    } else if (f.name.indexOf('.jpg') > -1) {
      // E.g: Use the Photoviewer to present an Image
      this.photoViewer.show(f.nativeURL, 'MY awesome image');
    }
  }
 
  deleteFile(f: FileEntry) {
    const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
    this.file.removeFile(path, f.name).then(() => {
      this.loadFiles();
    }, err => console.log('error remove: ', err));
  }
  async uploadFile(f: FileEntry) {
    const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
    const type = this.getMimeType(f.name.split('.').pop());
    const buffer = await this.file.readAsArrayBuffer(path, f.name);
    const fileBlob = new Blob([buffer], type);
 
    const randomId = Math.random()
      .toString(36)
      .substring(2, 8);
    //troca $ por uid
    const uploadTask = this.storage.upload(
      `${this.uid}/anexos/${new Date().getTime()}_${randomId}`,
      fileBlob
    );
 
    uploadTask.percentageChanges().subscribe(change => {
      this.uploadProgress = change;
    });
 
    uploadTask.then(async res => {
      const toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Arquivo Salvo'
      });
      toast.present();
      this.proximo_questionario()
    });
    
  }
 
  getMimeType(fileExt) {
    if (fileExt == 'wav') return { type: 'audio/wav' };
    else if (fileExt == 'jpg') return { type: 'image/jpg' };
    else if (fileExt == 'mp4') return { type: 'video/mp4' };
    else if (fileExt == 'MOV') return { type: 'video/quicktime' };
  }
}
