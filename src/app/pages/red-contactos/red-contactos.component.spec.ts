import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedContactosComponent } from './red-contactos.component';

describe('RedContactosComponent', () => {
  let component: RedContactosComponent;
  let fixture: ComponentFixture<RedContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedContactosComponent]
    });
    fixture = TestBed.createComponent(RedContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
