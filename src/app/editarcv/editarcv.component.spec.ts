import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcvComponent } from './editarcv.component';

describe('EditarcvComponent', () => {
  let component: EditarcvComponent;
  let fixture: ComponentFixture<EditarcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
