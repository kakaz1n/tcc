import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirDescerPage } from './subir-descer.page';

describe('SubirDescerPage', () => {
  let component: SubirDescerPage;
  let fixture: ComponentFixture<SubirDescerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirDescerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirDescerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
