import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreQuestionarioPage } from './pre-questionario.page';

describe('PreQuestionarioPage', () => {
  let component: PreQuestionarioPage;
  let fixture: ComponentFixture<PreQuestionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreQuestionarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreQuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
