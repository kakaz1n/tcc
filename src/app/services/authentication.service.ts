// authentication.service.ts
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate, NgLocaleLocalization } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  todos$: AngularFireList<any[]>;
  a: number;
  b: number;
  imc: number;
  cintura_quadril: number;
  usuarioRef: AngularFireObject<any>;
  usuarioRef2: AngularFireObject<any>;

  idade: number;
  risco_quadril: string;
  nivel_condicionamento_fisico: string;
  nivel_flexibilidade: string;
  nivel_musculo: string;
  nivel_aero: string;
  public now: string;
  public nivel: string;
  public semana: string;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public alertController: AlertController
  ) {
  }
  database;
  registerUser(value,url) {
    console.log(value)
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.senha)
        .then(res => {
          this.db.database
            .ref('usuarios/' + res.user.uid + "/dados")
            .set({
              nome: value.nome,
              telefone: value.telefone,
              estado: value.estado,
              cidade: value.cidade,
              dob: value.dob,
              sexo: value.sexo,
              url: url
            })
          this.db.database
            .ref('questionario/' + res.user.uid + "/questionarios")
            .set({
              questionario1: "false"
            })
          resolve(res)
        },
          err => reject(err))
    })

  }

  lerDados(value): AngularFireList<any[]> {
    this.todos$ = this.db.list('usuarios/' + value + '/dados');
    return this.todos$;
  }

  //questionario 1 = pre questionario
  //questionario 2 = sinais
  //questionario 3 = nivel atividade fisica
  //questionario 4 = atividades fisicas realizadas
  //questionario 5 = estado e historico
  //questionario 6 = confirmacao
  setQuestionario1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "false"
      })

  }
  setQuestionario2(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "true",
        questionario3: "false"
      })
  }
  setQuestionario3(value, res) {
    if (res == 'sim') {
      this.db.database.ref('questionario/' + value + "/questionarios")
        .update({
          questionario1: "true",
          questionario2: "true",
          questionario3: {
            checked: "true",
            resposta: res
          },
          questionario4: {
            checked: "false",
          }
        })
    } else {
      this.db.database.ref('questionario/' + value + "/questionarios")
        .update({
          questionario1: "true",
          questionario2: "true",
          questionario3: {
            checked: "true",
            resposta: res
          },
          questionario4: {
            checked: "true",
            caminhada: "false",
            ciclismo: "false",
            corrida: "false",
            natacao: "false",
            hidro: "false",
            musculacao: "false",
            funcional: "false",
            pillates: "false",
            outra: "false"
          },
          questionario5: {
            checked: "false"
          }
        })
    }
  }
  setQuestionario4(value, caminhada, ciclismo, corrida, natacao, hidro, musculacao,
    funcional, pillates, outra) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario1: "true",
        questionario2: "true",
        questionario3: {
          checked: "true",
          resposta: "sim"
        },
        questionario4: {
          checked: "true",
          caminhada: caminhada,
          ciclismo: ciclismo,
          corrida: corrida,
          natacao: natacao,
          hidro: hidro,
          musculacao: musculacao,
          funcional: funcional,
          pillates: pillates,
          outra: outra
        },
        questionario5: {
          checked: "false",
        },
      })
  }
  setQuestionario5(value, check, ataque_cardiaco, cirurgia_cardiaca, marcapasso, valvar, insuficiencia, transplante,
    cardiaca, diabetes, renal) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario5: {
          checked: check,
          ataque_cardiaco: ataque_cardiaco,
          cirurgia_cardiaca: cirurgia_cardiaca,
          marcapasso: marcapasso,
          valvar: valvar,
          insuficiencia: insuficiencia,
          transplante: transplante,
          cardiaca: cardiaca,
          diabetes: diabetes,
          renal: renal
        },
        questionario6: {
          checked: 'false'
        }
      })
  }
  setQuestionario6(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        questionario6: {
          checked: "true",
        },
        treino_iniciar: {
          checked: "false"
        }
      })
    console.log("foi")
  }
  setTreino_iniciar(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        treino_iniciar: {
          checked: "true"
        },
        orientacoes_gerais: {
          checked: "false"
        }
      })
  }
  setOrientacoes_gerais(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        orientacoes_gerais: {
          checked: "true"
        },
        antropometria1: {
          checked: "false"
        }
      })
  }
  setAntropometria1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        antropometria1: {
          checked: "true"
        },
        antropometria2: {
          checked: "false"
        }
      })
  }

  setFlexibilidade1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        flexibilidade1: {
          checked: "true"
        },
        flexibilidade2: {
          checked: "false"
        }
      })
  }
  setFuncional1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        funcional1: {
          checked: "true"
        },
        funcional2: {
          checked: "false"
        }
      })
  }
  setFuncional3(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        funcional3: {
          checked: "true"
        },
        funcional4: {
          checked: "false"
        }
      })
  }

  setMusco1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        muscoesqueletica1: {
          checked: "true"
        },
        muscoesqueletica2: {
          checked: "false"
        }
      })
  }
  setSubirDescer1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        subir_descer: {
          checked: "true"
        },
        subir_descer2: {
          checked: "false"
        }
      })
  }
  setAerobica1(value) {
    this.db.database.ref('questionario/' + value + "/questionarios")
      .update({
        aerobica1: {
          checked: "true"
        },
        aerobica2: {
          checked: "false"
        }
      })
  }
  RegistrarSubirDescer(id, value) {
    this.db.database.ref('questionario/' + id + "/questionarios")
      .update({
        subir_descer2: {
          checked: "true"
        },
        aerobica1: {
          checked: "false"
        }
      })
    this.db.database.ref('testes/' + id + "/subir_descer")
      .set({
        subir_descer: value['subir_descer']
      })
  }

  getUsuario(id) {
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    console.log(this.usuarioRef)
    return this.usuarioRef;
  }

  Registrar_antro(id, value) {
    let x = '';
    this.a = value['peso'] * 2.20462
    console.log(this.a)
    this.b = value['altura'] * 39.3701
    console.log(this.b)
    this.imc = (703 * this.a) / (this.b * this.b)
    console.log(this.imc)
    this.cintura_quadril = value['cintura'] / value['quadril']

    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      console.log(dados)
      this.now = Date.now().toString();
      console.log(formatDate(new Date, 'yyyy/MM/dd', 'en'))
      console.log(this.now);
      console.log(dados['sexo'])
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) { //era pra ser >20 mas ne
          if (this.cintura_quadril <= 0.825) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.80) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.94) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 30 && this.idade <= 39) {
          if (this.cintura_quadril <= 0.83) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.92) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.96) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 40 && this.idade <= 49) {
          if (this.cintura_quadril <= 0.87) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.95) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 50 && this.idade <= 59) {
          if (this.cintura_quadril <= 0.89) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.95) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1.01) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 60 && this.idade <= 69) {
          if (this.cintura_quadril <= 0.9) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.97) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 1.02) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
      } else { //feminino
        if (this.idade <= 29) { //era pra ser > 20 tb
          if (this.cintura_quadril <= 0.71) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.78) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.81) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 30 && this.idade <= 39) {
          if (this.cintura_quadril <= 0.72) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.78) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.835) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 40 && this.idade <= 49) {
          if (this.cintura_quadril <= 0.73) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.79) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.87) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 50 && this.idade <= 59) {
          if (this.cintura_quadril <= 0.74) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.81) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.87) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
        if (this.idade >= 60 && this.idade <= 69) {
          if (this.cintura_quadril <= 0.77) this.risco_quadril = "Baixo risco"
          else if (this.cintura_quadril <= 0.83) this.risco_quadril = "Risco moderado"
          else if (this.cintura_quadril <= 0.9) this.risco_quadril = "Alto risco"
          else this.risco_quadril = "Risco muito alto"
        }
      }

      console.log()
      if (this.imc > 30) {
        x = "verde"
      } else {
        if (this.imc >= 26) {
          if (this.risco_quadril == "Risco muito alto" || this.risco_quadril == "Alto risco") x = "amarelo";
          else x = "amarelo"
        } else {
          if (this.imc >= 19) {
            if (this.risco_quadril == "Risco muito alto" || this.risco_quadril == "Alto risco") x = "vermelho";
            else x = "amarelo"
          } else {
            x = "azul"
          }
        }

      }
      this.nivel_condicionamento_fisico = x;
      console.log(this.risco_quadril)
      console.log(this.nivel_condicionamento_fisico)
      console.log(this.imc)
      console.log(this.cintura_quadril)


      this.db.database.ref('testes/' + id + '/antropometria')
        .set({
          peso: value['peso'],
          altura: value['altura'],
          cintura: value['cintura'],
          quadril: value['quadril'],
          imc: this.imc,
          c_q: this.cintura_quadril,
          categoria_cq: this.risco_quadril,
          condicionamento_fisico: this.nivel_condicionamento_fisico
        })

    })


    this.db.database.ref('questionario/' + id + "/questionarios")
      .update({
        antropometria2: {
          checked: "true"
        },
        flexibilidade1: {
          checked: "false"
        }
      })
    //1 kg -- 2,20462 lbs

    // 1m -- 39,3701pol

  }

  Registrar_Flexibilidade(id, value) {
    console.log(value)    
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) {
          if (value['pontuacao'] <= 23) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 30.5) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 45.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 39) {
          if (value['pontuacao'] <= 20) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 28) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 43) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 49) {
          if (value['pontuacao'] <= 18) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 25.5) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 40.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 59) {
          if (value['pontuacao'] <= 15) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 23) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 38) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade >= 60) {
          if (value['pontuacao'] <= 12.5) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 20) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 35.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        }
      } else {
        if (this.idade <= 29) {
          if (value['pontuacao'] <= 30.5) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 38) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 53.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 39) {
          if (value['pontuacao'] <= 28) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 35.5) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 51) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 49) {
          if (value['pontuacao'] <= 25.5) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 33) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 48.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade <= 59) {
          if (value['pontuacao'] <= 23) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 30.5) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 45.5) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        } else if (this.idade >= 60) {
          if (value['pontuacao'] <= 20) this.nivel_flexibilidade = "Baixa"
          else if (value['pontuacao'] <= 28) this.nivel_flexibilidade = "Abaixo da média"
          else if (value['pontuacao'] <= 43) this.nivel_flexibilidade = "Média"
          else this.nivel_flexibilidade = "Alta"
        }

      }
      if(value == "pulado"){
        this.db.database.ref('testes/' + id + '/flexibilidade')
          .set({
            pontuacao: 39,
            flexibilidade: "Média"
          })
      }else{
        this.db.database.ref('testes/' + id + '/flexibilidade')
        .set({
          pontuacao: value['pontuacao'],
          flexibilidade: this.nivel_flexibilidade
        })
      }
      

    })

    if (this.idade > 50) {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          flexibilidade2: {
            checked: "true"
          },
          funcional1: {
            checked: "false"
          }
        })
    } else {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          flexibilidade2: {
            checked: "true"
          },
          muscoesqueletica1: {
            checked: "false"
          }
        })
    }
  }
  RegistrarFunc1(id, value) {
    this.db.database.ref('questionario/' + id + '/questionarios')
      .update({
        funcional2: {
          checked: "true"
        },
        funcional3: {
          checked: 'false'
        }
      })
    this.db.database.ref('testes/' + id + '/funcional')
      .set({
        tempo: value['tempo'],
        teste: 'TIMED & GO'
      })
  }
  RegistrarFunc4(id, value) {
    this.db.database.ref('questionario/' + id + '/questionarios')
      .update({
        funcional4: {
          checked: "true"
        },
        muscoesqueletica1: {
          checked: 'false'
        }
      })
    this.db.database.ref('testes/' + id + '/funcional2')
      .set({
        tempo: value['tempo'],
        teste: 'Sentar e Levantar'
      })
  }

  Registrar_Musco(id, value) {

    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == "Masculino") {
        if (this.idade <= 29) {
          if (value['flexoes'] <= 16) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 21) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 28) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 39) {
          if (value['flexoes'] <= 11) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 16) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 21) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 49) {
          if (value['flexoes'] <= 9) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 12) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 16) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 59) {
          if (value['flexoes'] <= 6) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 9) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 12) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade >= 60) {
          if (value['flexoes'] <= 4) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 7) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 10) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        }
      } else {
        if (this.idade <= 29) {
          if (value['flexoes'] <= 9) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 14) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 20) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 39) {
          if (value['flexoes'] <= 7) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 12) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 19) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 49) {
          if (value['flexoes'] <= 4) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 10) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 14) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade <= 59) {
          if (value['flexoes'] <= 1) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 6) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 10) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        } else if (this.idade >= 60) {
          if (value['flexoes'] <= 1) this.nivel_musculo = "Baixa"
          else if (value['flexoes'] <= 4) this.nivel_musculo = "Abaixo da média"
          else if (value['flexoes'] <= 11) this.nivel_musculo = "Média"
          else this.nivel_musculo = "Acima da média"
        }

      }
      this.db.database.ref('testes/' + id + '/musculo')
        .set({
          flexoes: value['flexoes'],
          musculo_funcional: this.nivel_musculo
        })

    })
    if (this.idade > 50) {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          muscoesqueletica2: {
            checked: "true"
          },
          subir_descer: {
            checked: "false"
          }
        })
    } else {
      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          muscoesqueletica2: {
            checked: "true"
          },
          aerobica1: {
            checked: "false"
          }
        })
    }
  }

  Registrar_aero(id, value) {
    this.usuarioRef = this.db.object('usuarios/' + id + "/dados");
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      this.now = Date.now().toString();
      let dob = new Date(dados['dob'])
      let a = Math.abs(Date.now() - dob.getTime())
      this.idade = Math.floor((a / (1000 * 3600 * 24)) / 365);
      if (dados['sexo'] == 'Masculino') {
        if (this.idade <= 29) {
          // h 20-29
          //y=-20x+396 alta
          //y=-20.83x +470  acima da media
          //y=-20x+520 media
          //y=-20x+580 abaixo da média
          //baixa
          if (value['batimentos'] <= -20 * value['caminhada'] + 396) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20.83 * value['caminhada'] + 470) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 580) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else if (this.idade <= 39) {// h 30-39
          //y=-20x+396 alta
          //=-22.22 x+486.66  acima da media
          //y=-20.408 x+522.04 media
          //y=-21.75x+607 abaixo da média
          //baixa

          if (value['batimentos'] <= -20 * value['caminhada'] + 396) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -22.22 * value['caminhada'] + 486.66) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20.408 * value['caminhada'] + 522.04) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -21.75 * value['caminhada'] + 607) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else if (this.idade <= 49) {


          // h 40-49
          //y=-22.22x+ 422.22  alta
          //y=-20x+460  acima da media
          //y=-20x+520 media
          //y=-20x+570 abaixo da média
          //baixa
          if (value['batimentos'] <= -22.22 * value['caminhada'] + 422.22) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 570) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else {
          // h 50-59
          //y=--22.5x+415 alta
          //y=-20x+460  acima da media
          //y=-21.73x+547.82  media
          //y=-17.5x+515 abaixo da média
          //baixa
          if (value['batimentos'] <= -22.5 * value['caminhada'] + 415) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -21.73 * value['caminhada'] + 547.82) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -17.5 * value['caminhada'] + 515) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        }
      } else { //feminino
        if (this.idade <= 29) {
          // f 20-29
          //y=-19.79 x+412.91  alta
          //y=-20x+460 acima da media
          //y=-20x+500 media
          //y=-17.5x+500 abaixo da média
          //baixa
          if (value['batimentos'] <= -19.79 * value['caminhada'] + 412.91) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 500) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -17.5 * value['caminhada'] + 500) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else if (this.idade <= 39) {
          // f 30-39
          //y=-22.5x+435 alta
          //=--20x+460  acima da media
          //y=--20x+500 media
          //y=-17.5 + 500 abaixo da média
          //baixa

          if (value['batimentos'] <= -22.5 * value['caminhada'] + 435) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 460) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 500) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -17.5 * value['caminhada'] + 500) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else if (this.idade <= 49) {


          // f 40-49
          //y=-20x+400  alta
          //y=--13.88x+344.44  acima da media
          //y=-13.88 x+372.22  media
          //y=--18.78x+513.75  abaixo da média
          //baixa
          if (value['batimentos'] <= -20 * value['caminhada'] + 400) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -13.88 * value['caminhada'] + 344.44) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -13.88 * value['caminhada'] + 372.44) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -18.78 * value['caminhada'] + 513.75) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        } else {
          // h 50-59
          //y=-20x+400 alta
          //y=-20x+440  acima da media
          //y=-20x+480  media
          //y=--20x+520 abaixo da média
          //baixa
          if (value['batimentos'] <= -20 * value['caminhada'] + 400) this.nivel_aero = "Alta"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 440) this.nivel_aero = "Acima da média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 480) this.nivel_aero = "Média"
          else if (value['batimentos'] <= -20 * value['caminhada'] + 520) this.nivel_aero = "Abaixo da média"
          else this.nivel_aero = "Baixa"
        }
      }

      this.db.database.ref('questionario/' + id + "/questionarios")
        .update({
          aerobica2: {
            checked: "true"
          }
        })
      this.db.database.ref('testes/' + id + '/aerobico')
        .update({
          tempo: value['caminhada'],
          batimentos: value['batimentos'],
          nivel: this.nivel_aero
        })
    })
  }

  checarAntro(value) {
    if (this.db.database.ref('questionario/' + value + "/questionarios/antropometria1").toString() == 'true') {
      return true
    } else {
      return false
    }
  }


  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.senha)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }

  RegistrarExercicio(value) {
    this.db.database.ref('exercicio/')
      .child(value['nome']).set({
        nome: value['nome'],
        descricao: value['descricao'],
        video: value['video']
      })
  }

  pegarProgresso(id) {
    this.usuarioRef = this.db.object('/progresso_usuario/' + id);
    return this.usuarioRef;
  }
  setProgressoInicial(id) {
    console.log(id)
    console.log("setando progresso inicial")
    this.usuarioRef = this.db.object('testes/' + id);
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      console.log(dados)
      this.nivel_aero = dados['aerobico']['nivel']
      this.nivel_condicionamento_fisico = dados['antropometria']['condicionamento_fisico']
      this.nivel_flexibilidade = dados['flexibilidade']['flexibilidade']
      this.nivel_musculo = dados['musculo']['musculo_funcional']
      let treinos = []; //aerobia,flex,muscular
      if (this.nivel_condicionamento_fisico == "azul") treinos = [2, 2, 1]
      if (this.nivel_condicionamento_fisico == "verde") treinos = [4, 3, 2]
      if (this.nivel_condicionamento_fisico == "amarelo") treinos = [4, 4, 3]
      if (this.nivel_condicionamento_fisico == "vermelho") treinos = [5, 4, 3]

      this.db.database.ref('progresso_usuario/')
        .child(id).set({
          semana: 1,
          nivel_aero: this.nivel_aero,
          nivel_flex: this.nivel_flexibilidade,
          nivel_musculo: this.nivel_musculo,
          max_aero: treinos[0],
          max_flex: treinos[1],
          max_musc: treinos[2],
          atual_aero: 0,
          atual_flex: 0,
          atual_musc: 0,
        })
    })
  }
  getTreino2(id, tipo) {



  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
formatDate2(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      minutes = d.getMinutes();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day,minutes].join('-');
}
  getTreino(tipo, nivel, semana) {
    console.log(semana)
    this.usuarioRef2 = this.db.object('/rotinas/' + tipo + '/' + 'nivel ' + nivel + '/semana ' + semana + '/Exercicios');
    console.log(this.usuarioRef2)
    return this.usuarioRef2
  }
  async presentAlert(tipo) {
    let msg = "<h1>Parabéns!!!! </h1><br><h2>O seu treino diário de "+tipo +" foi cumprido com sucesso. Pode descançar por enquanto mas continue se esforçando!</h2>"
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      message: msg,
      buttons: [
      ],
    });

    await alert.present();
  }

  SetTreino(id, tipo) {
    this.presentAlert(tipo)
    let c = 0
    console.log('setando treino')
    this.usuarioRef = this.db.object('/progresso_usuario/' + id);
    if (tipo == 'aerobico') {
      c = 0
      this.usuarioRef.snapshotChanges().subscribe(res => {
        if (c) return
        const dados = res.payload.toJSON()
        let x = dados['atual_aero'] + 1
        let z =new Date();
          let h = this.formatDate(z)
        this.db.database.ref('progresso_usuario/' + id)
          .update({
            atual_aero: x,
            dia_aero: h
          })
        c++;
        console.log('kkaa')

      })
    }
    if (tipo == 'flexibilidade') {
      c = 0
      this.usuarioRef.snapshotChanges().subscribe(res => {
        if (c) return
        const dados = res.payload.toJSON()
        let x = dados['atual_flex'] + 1
        let z =new Date();
        let h = this.formatDate(z)
        this.db.database.ref('progresso_usuario/' + id)
          .update({
            atual_flex: x,
            dia_flex: h
          })
        c++
      })
    }
    if (tipo == 'muscular') {
      c = 0

      this.usuarioRef.snapshotChanges().subscribe(res => {
        if (c) return
        const dados = res.payload.toJSON()
        let x = dados['atual_musc'] + 1
        let z =new Date();
        let h = this.formatDate(z)
        this.db.database.ref('progresso_usuario/' + id)
          .update({
            atual_musc: x,
            dia_musc: h
          })
        c++
      })
    }
    let d = 0;
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()
      if (dados['atual_aero'] == dados['max_aero'] && dados['atual_flex'] == dados['max_flex'] && dados['atual_musc'] == dados['max_musc']) {
        if (d) return
        let sem = dados['semana'] + 1
        if(sem = 7) sem = 1;
        this.db.database.ref('progresso_usuario/' + id)
          .update({
            semana: sem,
            atual_flex: 0,
            atual_musc: 0,
            atual_aero: 0
          })
          let z =new Date();
          let h = this.formatDate(z)
          console.log(h,id)
          console.log(dados)
        this.db.database.ref('treinos_realizados/'+id+'/')
        .child(h).set({
          data_realizada: h,
          semana: sem-1,
          nivel_aero: dados['nivel_aero'],
          nivel_flex: dados['nivel_flex'],
          nivel_musculo: dados['nivel_musculo'],
          max_aero: dados['max_aero'],
          max_flex: dados['max_flex'],
          max_musc: dados['max_musc'],
          atual_aero: dados['atual_aero'],
          atual_flex: dados['atual_flex'],
          atual_musc: dados['atual_musc'],
          cor: "tertiary"
        })
        d++;
        console.log('kk')
      }

    })

  }
  getTreino_realizado(id) {    
    this.usuarioRef2 = this.db.object('/treinos_realizados/' + id);
    console.log(this.usuarioRef2)
    return this.usuarioRef2
  }
  getTreino_realizado2(id,data) {    
    this.usuarioRef2 = this.db.object('/treinos_realizados/' + id +'/'+data);
    console.log(this.usuarioRef2)
    return this.usuarioRef2
  }
  setTreino_realizado(id){
    console.log('treino-realizado')

    let d = 0;
    this.usuarioRef.snapshotChanges().subscribe(res => {
      const dados = res.payload.toJSON()   
        if (d) return
        let sem = dados['semana'] + 1
          let z =new Date();
          let h = this.formatDate(z)
          console.log(h,id)
          console.log(dados)
        let cor = "warning"        
        this.db.database.ref('treinos_realizados/'+id+'/')
        .child(h).set({
          data_realizada: h,
          semana: sem-1,
          nivel_aero: dados['nivel_aero'],
          nivel_flex: dados['nivel_flex'],
          nivel_musculo: dados['nivel_musculo'],
          max_aero: dados['max_aero'],
          max_flex: dados['max_flex'],
          max_musc: dados['max_musc'],
          atual_aero: dados['atual_aero'],
          atual_flex: dados['atual_flex'],
          atual_musc: dados['atual_musc'],
          cor: cor
        })
        d++;
        console.log('treino-realizado cadastrado')
      
    })
  }

}
