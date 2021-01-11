import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncionalIntroducaoPage } from './funcional-introducao.page';

describe('FuncionalIntroducaoPage', () => {
  let component: FuncionalIntroducaoPage;
  let fixture: ComponentFixture<FuncionalIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionalIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
