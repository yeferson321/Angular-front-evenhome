import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navempresa1Component } from './navempresa1.component';

describe('Navempresa1Component', () => {
  let component: Navempresa1Component;
  let fixture: ComponentFixture<Navempresa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navempresa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navempresa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
