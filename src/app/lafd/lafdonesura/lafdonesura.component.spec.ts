import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafdonesuraComponent } from './lafdonesura.component';

describe('LafdonesuraComponent', () => {
  let component: LafdonesuraComponent;
  let fixture: ComponentFixture<LafdonesuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafdonesuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafdonesuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
