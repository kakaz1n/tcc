import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinaisSintomasPage } from './sinais-sintomas.page';

describe('SinaisSintomasPage', () => {
  let component: SinaisSintomasPage;
  let fixture: ComponentFixture<SinaisSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinaisSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinaisSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
