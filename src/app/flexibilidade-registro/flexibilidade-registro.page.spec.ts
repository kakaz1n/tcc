import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlexibilidadeRegistroPage } from './flexibilidade-registro.page';

describe('FlexibilidadeRegistroPage', () => {
  let component: FlexibilidadeRegistroPage;
  let fixture: ComponentFixture<FlexibilidadeRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibilidadeRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlexibilidadeRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
