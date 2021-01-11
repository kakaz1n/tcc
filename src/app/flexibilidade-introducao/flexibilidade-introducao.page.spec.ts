import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlexibilidadeIntroducaoPage } from './flexibilidade-introducao.page';

describe('FlexibilidadeIntroducaoPage', () => {
  let component: FlexibilidadeIntroducaoPage;
  let fixture: ComponentFixture<FlexibilidadeIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibilidadeIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlexibilidadeIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
