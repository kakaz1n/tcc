import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreinoIniciarPage } from './treino-iniciar.page';

describe('TreinoIniciarPage', () => {
  let component: TreinoIniciarPage;
  let fixture: ComponentFixture<TreinoIniciarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoIniciarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoIniciarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
