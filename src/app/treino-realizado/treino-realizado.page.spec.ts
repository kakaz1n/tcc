import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreinoRealizadoPage } from './treino-realizado.page';

describe('TreinoRealizadoPage', () => {
  let component: TreinoRealizadoPage;
  let fixture: ComponentFixture<TreinoRealizadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoRealizadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoRealizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
