import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SentarLevantarRegistroPage } from './sentar-levantar-registro.page';

describe('SentarLevantarRegistroPage', () => {
  let component: SentarLevantarRegistroPage;
  let fixture: ComponentFixture<SentarLevantarRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentarLevantarRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SentarLevantarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
