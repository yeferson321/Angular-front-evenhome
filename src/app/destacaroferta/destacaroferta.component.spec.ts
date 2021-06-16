import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacarofertaComponent } from './destacaroferta.component';

describe('DestacarofertaComponent', () => {
  let component: DestacarofertaComponent;
  let fixture: ComponentFixture<DestacarofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestacarofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
