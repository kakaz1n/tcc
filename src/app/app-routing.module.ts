import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'make-appointment',
    loadChildren: () => import('./make-appointment/make-appointment.module').then( m => m.MakeAppointmentPageModule)
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'pre-questionario',
    loadChildren: () => import('./pre-questionario/pre-questionario.module').then( m => m.PreQuestionarioPageModule)
  },
  {
    path: 'sinais-sintomas',
    loadChildren: () => import('./sinais-sintomas/sinais-sintomas.module').then( m => m.SinaisSintomasPageModule)
  },
  {
    path: 'estado-historico',
    loadChildren: () => import('./estado-historico/estado-historico.module').then( m => m.EstadoHistoricoPageModule)
  },
  {
    path: 'atividade-fisica',
    loadChildren: () => import('./atividade-fisica/atividade-fisica.module').then( m => m.AtividadeFisicaPageModule)
  },
  {
    path: 'atividades-fisicas-realizadas',
    loadChildren: () => import('./atividades-fisicas-realizadas/atividades-fisicas-realizadas.module').then( m => m.AtividadesFisicasRealizadasPageModule)
  },
  {
    path: 'confirmacao',
    loadChildren: () => import('./confirmacao/confirmacao.module').then( m => m.ConfirmacaoPageModule)
  },
  {
    path: 'treino-iniciar',
    loadChildren: () => import('./treino-iniciar/treino-iniciar.module').then( m => m.TreinoIniciarPageModule)
  },
  {
    path: 'pega-imagem',
    loadChildren: () => import('./pega-imagem/pega-imagem.module').then( m => m.PegaImagemPageModule)
  },
  {
    path: 'cloud-list',
    loadChildren: () => import('./cloud-list/cloud-list.module').then( m => m.CloudListPageModule)
  },
  {
    path: 'orientacoes-gerais',
    loadChildren: () => import('./orientacoes-gerais/orientacoes-gerais.module').then( m => m.OrientacoesGeraisPageModule)
  },
  {
    path: 'antropometria-introducao',
    loadChildren: () => import('./antropometria-introducao/antropometria-introducao.module').then( m => m.AntropometriaIntroducaoPageModule)
  },
  {
    path: 'antropometria-registro',
    loadChildren: () => import('./antropometria-registro/antropometria-registro.module').then( m => m.AntropometriaRegistroPageModule)
  },
  {
    path: 'flexibilidade-introducao',
    loadChildren: () => import('./flexibilidade-introducao/flexibilidade-introducao.module').then( m => m.FlexibilidadeIntroducaoPageModule)
  },
  {
    path: 'flexibilidade-registro',
    loadChildren: () => import('./flexibilidade-registro/flexibilidade-registro.module').then( m => m.FlexibilidadeRegistroPageModule)
  },
  {
    path: 'funcional-introducao',
    loadChildren: () => import('./funcional-introducao/funcional-introducao.module').then( m => m.FuncionalIntroducaoPageModule)
  },
  {
    path: 'muscoesqueletico-introducao',
    loadChildren: () => import('./muscoesqueletico-introducao/muscoesqueletico-introducao.module').then( m => m.MuscoesqueleticoIntroducaoPageModule)
  },
  {
    path: 'muscoesqueletico-registro',
    loadChildren: () => import('./muscoesqueletico-registro/muscoesqueletico-registro.module').then( m => m.MuscoesqueleticoRegistroPageModule)
  },
  {
    path: 'aerobica-introducao',
    loadChildren: () => import('./aerobica-introducao/aerobica-introducao.module').then( m => m.AerobicaIntroducaoPageModule)
  },
  {
    path: 'subir-descer',
    loadChildren: () => import('./subir-descer/subir-descer.module').then( m => m.SubirDescerPageModule)
  },
  {
    path: 'subir-descer-registro',
    loadChildren: () => import('./subir-descer-registro/subir-descer-registro.module').then( m => m.SubirDescerRegistroPageModule)
  },
  {
    path: 'aerobica-registro',
    loadChildren: () => import('./aerobica-registro/aerobica-registro.module').then( m => m.AerobicaRegistroPageModule)
  },
  {
    path: 'funcional-registro',
    loadChildren: () => import('./funcional-registro/funcional-registro.module').then( m => m.FuncionalRegistroPageModule)
  },
  {
    path: 'sentar-levantar-introducao',
    loadChildren: () => import('./sentar-levantar-introducao/sentar-levantar-introducao.module').then( m => m.SentarLevantarIntroducaoPageModule)
  },
  {
    path: 'sentar-levantar-registro',
    loadChildren: () => import('./sentar-levantar-registro/sentar-levantar-registro.module').then( m => m.SentarLevantarRegistroPageModule)
  },
  {
    path: 'incluir-exercicio',
    loadChildren: () => import('./incluir-exercicio/incluir-exercicio.module').then( m => m.IncluirExercicioPageModule)
  },
  {
    path: 'lista-exercicios',
    loadChildren: () => import('./lista-exercicios/lista-exercicios.module').then( m => m.ListaExerciciosPageModule)
  },
  {
    path: 'exercicio/:id',
    loadChildren: () => import('./exercicio/exercicio.module').then( m => m.ExercicioPageModule)
  },
  {
    path: 'treinos',
    loadChildren: () => import('./treinos/treinos.module').then( m => m.TreinosPageModule)
  },
  {
    path: 'treino/:treino',
    loadChildren: () => import('./treino/treino.module').then( m => m.TreinoPageModule)
  },
  {
    path: 'treino/:treino/:semana/:data',
    loadChildren: () => import('./treino/treino.module').then( m => m.TreinoPageModule)
  },
  {
    path: 'treinos-realizados',
    loadChildren: () => import('./treinos-realizados/treinos-realizados.module').then( m => m.TreinosRealizadosPageModule)
  },
  {
    path: 'feitos-treinos',
    loadChildren: () => import('./feitos-treinos/feitos-treinos.module').then( m => m.FeitosTreinosPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'treino-realizado/:data',
    loadChildren: () => import('./treino-realizado/treino-realizado.module').then( m => m.TreinoRealizadoPageModule)
  },
  {
    path: 'anexo',
    loadChildren: () => import('./anexo/anexo.module').then( m => m.AnexoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }