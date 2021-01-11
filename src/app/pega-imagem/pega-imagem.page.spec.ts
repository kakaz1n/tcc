import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PegaImagemPage } from './pega-imagem.page';

describe('PegaImagemPage', () => {
  let component: PegaImagemPage;
  let fixture: ComponentFixture<PegaImagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegaImagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PegaImagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
