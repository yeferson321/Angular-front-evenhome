import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacvComponent } from './visualizacv.component';

describe('VisualizacvComponent', () => {
  let component: VisualizacvComponent;
  let fixture: ComponentFixture<VisualizacvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
