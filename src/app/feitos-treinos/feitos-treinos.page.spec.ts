import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeitosTreinosPage } from './feitos-treinos.page';

describe('FeitosTreinosPage', () => {
  let component: FeitosTreinosPage;
  let fixture: ComponentFixture<FeitosTreinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeitosTreinosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeitosTreinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
