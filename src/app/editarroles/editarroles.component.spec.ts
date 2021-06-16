import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolesComponent } from './editarroles.component';

describe('EditarrolesComponent', () => {
  let component: EditarrolesComponent;
  let fixture: ComponentFixture<EditarrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
