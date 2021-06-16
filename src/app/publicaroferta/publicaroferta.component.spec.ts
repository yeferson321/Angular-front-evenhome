import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarofertaComponent } from './publicaroferta.component';

describe('PublicarofertaComponent', () => {
  let component: PublicarofertaComponent;
  let fixture: ComponentFixture<PublicarofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
