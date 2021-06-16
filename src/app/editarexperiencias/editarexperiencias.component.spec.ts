import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarexperienciasComponent } from './editarexperiencias.component';

describe('EditarexperienciasComponent', () => {
  let component: EditarexperienciasComponent;
  let fixture: ComponentFixture<EditarexperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarexperienciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarexperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
