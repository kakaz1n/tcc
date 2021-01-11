import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaExerciciosPage } from './lista-exercicios.page';

describe('ListaExerciciosPage', () => {
  let component: ListaExerciciosPage;
  let fixture: ComponentFixture<ListaExerciciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExerciciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaExerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
