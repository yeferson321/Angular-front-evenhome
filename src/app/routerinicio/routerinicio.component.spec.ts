import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterinicioComponent } from './routerinicio.component';

describe('RouterinicioComponent', () => {
  let component: RouterinicioComponent;
  let fixture: ComponentFixture<RouterinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
