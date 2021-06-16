import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizardatosempresaComponent } from './actualizardatosempresa.component';

describe('ActualizardatosempresaComponent', () => {
  let component: ActualizardatosempresaComponent;
  let fixture: ComponentFixture<ActualizardatosempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizardatosempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizardatosempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
