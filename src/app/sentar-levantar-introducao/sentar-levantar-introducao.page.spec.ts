import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentarLevantarIntroducaoPage } from './sentar-levantar-introducao.page';

describe('SentarLevantarIntroducaoPage', () => {
  let component: SentarLevantarIntroducaoPage;
  let fixture: ComponentFixture<SentarLevantarIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentarLevantarIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentarLevantarIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
