import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreinosRealizadosPage } from './treinos-realizados.page';

describe('TreinosRealizadosPage', () => {
  let component: TreinosRealizadosPage;
  let fixture: ComponentFixture<TreinosRealizadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinosRealizadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreinosRealizadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
