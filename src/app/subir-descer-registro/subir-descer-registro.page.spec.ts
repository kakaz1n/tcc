import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirDescerRegistroPage } from './subir-descer-registro.page';

describe('SubirDescerRegistroPage', () => {
  let component: SubirDescerRegistroPage;
  let fixture: ComponentFixture<SubirDescerRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirDescerRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirDescerRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
