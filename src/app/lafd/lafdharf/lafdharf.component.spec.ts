import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafdharfComponent } from './lafdharf.component';

describe('LafdharfComponent', () => {
  let component: LafdharfComponent;
  let fixture: ComponentFixture<LafdharfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafdharfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafdharfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
