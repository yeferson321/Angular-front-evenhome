import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarimgComponent } from './editarimg.component';

describe('EditarimgComponent', () => {
  let component: EditarimgComponent;
  let fixture: ComponentFixture<EditarimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
