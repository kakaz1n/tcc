import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExercicioPage } from './exercicio.page';

describe('ExercicioPage', () => {
  let component: ExercicioPage;
  let fixture: ComponentFixture<ExercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
