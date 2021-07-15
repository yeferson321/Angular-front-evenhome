import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcusuarioComponent } from './vcusuario.component';

describe('VcusuarioComponent', () => {
  let component: VcusuarioComponent;
  let fixture: ComponentFixture<VcusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
