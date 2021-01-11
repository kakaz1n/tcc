import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtividadeFisicaPage } from './atividade-fisica.page';

describe('AtividadeFisicaPage', () => {
  let component: AtividadeFisicaPage;
  let fixture: ComponentFixture<AtividadeFisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeFisicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadeFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
