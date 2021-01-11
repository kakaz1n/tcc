import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AerobicaRegistroPage } from './aerobica-registro.page';

describe('AerobicaRegistroPage', () => {
  let component: AerobicaRegistroPage;
  let fixture: ComponentFixture<AerobicaRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerobicaRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AerobicaRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
