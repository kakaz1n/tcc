import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuscoesqueleticoRegistroPage } from './muscoesqueletico-registro.page';

describe('MuscoesqueleticoRegistroPage', () => {
  let component: MuscoesqueleticoRegistroPage;
  let fixture: ComponentFixture<MuscoesqueleticoRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscoesqueleticoRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuscoesqueleticoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
