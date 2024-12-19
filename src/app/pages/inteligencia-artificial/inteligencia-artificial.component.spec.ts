import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaArtificialComponent } from './inteligencia-artificial.component';

describe('InteligenciaArtificialComponent', () => {
  let component: InteligenciaArtificialComponent;
  let fixture: ComponentFixture<InteligenciaArtificialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteligenciaArtificialComponent]
    });
    fixture = TestBed.createComponent(InteligenciaArtificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
