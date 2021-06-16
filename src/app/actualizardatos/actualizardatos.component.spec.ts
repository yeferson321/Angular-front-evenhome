import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizardatosComponent } from './actualizardatos.component';

describe('ActualizardatosComponent', () => {
  let component: ActualizardatosComponent;
  let fixture: ComponentFixture<ActualizardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizardatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
