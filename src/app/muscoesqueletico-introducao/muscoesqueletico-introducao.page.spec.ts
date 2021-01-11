import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuscoesqueleticoIntroducaoPage } from './muscoesqueletico-introducao.page';

describe('MuscoesqueleticoIntroducaoPage', () => {
  let component: MuscoesqueleticoIntroducaoPage;
  let fixture: ComponentFixture<MuscoesqueleticoIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscoesqueleticoIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuscoesqueleticoIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
