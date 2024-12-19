import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViabilidadComponent } from './viabilidad.component';

describe('ViabilidadComponent', () => {
  let component: ViabilidadComponent;
  let fixture: ComponentFixture<ViabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViabilidadComponent]
    });
    fixture = TestBed.createComponent(ViabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
