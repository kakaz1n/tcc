// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import {DadosService} from './../services/dados.service';
import { ToastController } from '@ionic/angular';

import {Plugins, CameraResultType} from '@capacitor/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { CheckboxValidator} from '../services/checkbox';

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

const {Camera} = Plugins;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public data:any;
  public cidades:any;
  public estado_atual:any;
  public nome:any;
  url:any;
 validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public sexo: any = {
    sex: 'Masculino'
  };

  imageResponse: any;
  options: any;
  
  validation_messages = {
    'nome':[
      {
        type: 'required', message: 'É necessário preencher o nome.'
      }
    ],
    'email': [
      { type: 'required', message: 'É necessário preencher o Email.' },
      { type: 'pattern', message: 'Preenchar o campo com um email válido.' }
    ],
    'senha': [
      { type: 'required', message: 'É necessário preencher a senha' },
      { type: 'minlength', message: 'A senha deve ter pelo menos 5 caracteres' }
    ],
    'telefone':[
      {
        type: 'required', message: 'É necessário preencher o telefone.'
      }
    ],
    'estado':[
      {
        type: 'required', message: 'É necessário escolher um estado.'
      }
    ],
    'cidade':[
      {
        type: 'required', message: 'É necessário escolher uma cidade.'
      }
    ],
    'dob':[
      {
        type: 'required', message: 'É necessário escolher a data de nascinemto.'
      }
    ],
    'termos':[
      {
        type: 'required', message: 'É necessário aceitar essa opção.'
      },
      {
        type: 'pattern', message: 'É necessário aceitar essa opção.'
      }
    ],

  };
  imageElement : any;

  files = [];
  uploadProgress = 0;

  constructor(
    public navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private dadosserv:DadosService,
    public toastController: ToastController,
    private imagePicker: ImagePicker,
    private mediaCapture: MediaCapture,
    private file: File,
    private media: Media,
    private streamingMedia: StreamingMedia,
    private photoViewer: PhotoViewer,
    private actionSheetController: ActionSheetController,
    private plt: Platform,
    private toastCtrl: ToastController,
    private storage: AngularFireStorage,
  ) { 
    this.read_data();
  }
    
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      telefone: ['',Validators.compose([
        Validators.required,
        Validators.maxLength(15)
      ])],
      senha: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])), 
      confirmar_senha: new FormControl('', Validators.compose([
        Validators.required,
      ])),       
      estado: ['',Validators.required],
      cidade: ['',Validators.required],
      dob: ['',Validators.required],
      sexo:['',Validators.required],
      termos:['',Validators.compose([
        Validators.required,Validators.pattern('true')
      ])]},
      {
        validator: this.password.bind(this)
      }
    );

    this.plt.ready().then(() => {
      let path = this.file.dataDirectory;
      this.file.checkDir(path, MEDIA_FOLDER_NAME).then(
        () => {
          this.loadFiles();
        },
        err => {
          this.file.createDir(path, MEDIA_FOLDER_NAME, false);
        }
      );
    });
    
  }
  password(formGroup: FormGroup) {
    const { value: senha } = formGroup.get('senha');
    const { value: confirmar_senha } = formGroup.get('confirmar_senha');
    return senha === confirmar_senha ? null : { passwordNotMatch: true };
  }
  
  read_data(){
    console.log('teste')
    fetch('./assets/estados_cidades.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
  }
  setCidades(estado) {
    this.estado_atual = this.data.filter((res)=>{
      return res.sigla===estado;
    })
    this.cidades = this.estado_atual[0].cidades;
    console.log(this.cidades)
  }
  tryRegister(value) {
    console.log(value)
    if(!this.url) this.url = ' '
    this.authService.registerUser(value,this.url)
      .then(res => {
        console.log(res);                  
        this.errorMessage = "";
        this.successMessage = "Sua conta foi criado. Você será redirecionado para o login";
        this.presentToast(this.successMessage);
        console.log('tentando logar')
        this.goDashboard();
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.presentToast(this.errorMessage);
        this.successMessage = "";
      })
  }
  
  goLoginPage() {
    this.navCtrl.navigateBack('/login');
  }
  goDashboard(){
    this.navCtrl.navigateForward('/dashboard');
  }
  onChangeHandler($event) {
    this.sexo.sex = $event.target.value;
  }
  onTermsChecked($event){
    console.log($event.currentTarget.checked)
    this.validations_form.patchValue({termos: $event.currentTarget.checked})
    console.log(this.validations_form)
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
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
      header: 'Como você deseja adicionar uma foto?',
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
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  uid: string;

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
    this.url = `${new Date().getTime()}_${randomId}`;
    const uploadTask = this.storage.upload(
      this.url,
      fileBlob
    );
 
    uploadTask.percentageChanges().subscribe(change => {
      this.uploadProgress = change;
    });
 
    uploadTask.then(async res => {
      const toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Foto Salva!'
      });
      toast.present();
    });
  }
 
  getMimeType(fileExt) {
    if (fileExt == 'wav') return { type: 'audio/wav' };
    else if (fileExt == 'jpg') return { type: 'image/jpg' };
    else if (fileExt == 'mp4') return { type: 'video/mp4' };
    else if (fileExt == 'MOV') return { type: 'video/quicktime' };
  }

}
