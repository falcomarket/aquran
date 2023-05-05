import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarindexlafdComponent } from './navbarindexlafd.component';

describe('NavbarindexlafdComponent', () => {
  let component: NavbarindexlafdComponent;
  let fixture: ComponentFixture<NavbarindexlafdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarindexlafdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarindexlafdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
