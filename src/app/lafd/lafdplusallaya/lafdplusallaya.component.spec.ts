import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafdplusallayaComponent } from './lafdplusallaya.component';

describe('LafdplusallayaComponent', () => {
  let component: LafdplusallayaComponent;
  let fixture: ComponentFixture<LafdplusallayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafdplusallayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafdplusallayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
