import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncluirExercicioPage } from './incluir-exercicio.page';

describe('IncluirExercicioPage', () => {
  let component: IncluirExercicioPage;
  let fixture: ComponentFixture<IncluirExercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirExercicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncluirExercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
