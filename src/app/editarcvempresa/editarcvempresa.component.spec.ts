import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcvempresaComponent } from './editarcvempresa.component';

describe('EditarcvempresaComponent', () => {
  let component: EditarcvempresaComponent;
  let fixture: ComponentFixture<EditarcvempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcvempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcvempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
