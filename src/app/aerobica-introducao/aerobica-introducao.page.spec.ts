import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AerobicaIntroducaoPage } from './aerobica-introducao.page';

describe('AerobicaIntroducaoPage', () => {
  let component: AerobicaIntroducaoPage;
  let fixture: ComponentFixture<AerobicaIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerobicaIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AerobicaIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
