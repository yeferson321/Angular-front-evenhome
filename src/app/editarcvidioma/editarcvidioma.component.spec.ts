import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcvidiomaComponent } from './editarcvidioma.component';

describe('EditarcvidiomaComponent', () => {
  let component: EditarcvidiomaComponent;
  let fixture: ComponentFixture<EditarcvidiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcvidiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcvidiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
