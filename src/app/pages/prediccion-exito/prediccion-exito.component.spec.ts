import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediccionExitoComponent } from './prediccion-exito.component';

describe('PrediccionExitoComponent', () => {
  let component: PrediccionExitoComponent;
  let fixture: ComponentFixture<PrediccionExitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrediccionExitoComponent]
    });
    fixture = TestBed.createComponent(PrediccionExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
