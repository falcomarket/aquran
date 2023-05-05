import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarindexquranComponent } from './navbarindexquran.component';

describe('NavbarindexsuraComponent', () => {
  let component: NavbarindexquranComponent;
  let fixture: ComponentFixture<NavbarindexquranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarindexquranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarindexquranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
