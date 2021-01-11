import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnexoPage } from './anexo.page';

describe('AnexoPage', () => {
  let component: AnexoPage;
  let fixture: ComponentFixture<AnexoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnexoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnexoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
