import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntropometriaIntroducaoPage } from './antropometria-introducao.page';

describe('AntropometriaIntroducaoPage', () => {
  let component: AntropometriaIntroducaoPage;
  let fixture: ComponentFixture<AntropometriaIntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntropometriaIntroducaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntropometriaIntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
