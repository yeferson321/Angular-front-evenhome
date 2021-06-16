import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaridiomaComponent } from './editaridioma.component';

describe('EditaridiomaComponent', () => {
  let component: EditaridiomaComponent;
  let fixture: ComponentFixture<EditaridiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaridiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaridiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
