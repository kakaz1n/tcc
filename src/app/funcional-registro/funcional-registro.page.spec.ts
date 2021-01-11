import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncionalRegistroPage } from './funcional-registro.page';

describe('FuncionalRegistroPage', () => {
  let component: FuncionalRegistroPage;
  let fixture: ComponentFixture<FuncionalRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionalRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
