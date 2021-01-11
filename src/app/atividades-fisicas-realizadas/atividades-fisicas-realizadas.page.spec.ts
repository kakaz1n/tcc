import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtividadesFisicasRealizadasPage } from './atividades-fisicas-realizadas.page';

describe('AtividadesFisicasRealizadasPage', () => {
  let component: AtividadesFisicasRealizadasPage;
  let fixture: ComponentFixture<AtividadesFisicasRealizadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesFisicasRealizadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadesFisicasRealizadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
