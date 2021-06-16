import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhabilidadesComponent } from './editarhabilidades.component';

describe('EditarhabilidadesComponent', () => {
  let component: EditarhabilidadesComponent;
  let fixture: ComponentFixture<EditarhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
