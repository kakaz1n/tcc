import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntropometriaRegistroPage } from './antropometria-registro.page';

describe('AntropometriaRegistroPage', () => {
  let component: AntropometriaRegistroPage;
  let fixture: ComponentFixture<AntropometriaRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntropometriaRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntropometriaRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
