import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarformacionComponent } from './editarformacion.component';

describe('EditarformacionComponent', () => {
  let component: EditarformacionComponent;
  let fixture: ComponentFixture<EditarformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
