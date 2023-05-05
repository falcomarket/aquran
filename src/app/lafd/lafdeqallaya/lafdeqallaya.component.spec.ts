import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LafdeqallayaComponent } from './lafdeqallaya.component';

describe('LafdeqallayaComponent', () => {
  let component: LafdeqallayaComponent;
  let fixture: ComponentFixture<LafdeqallayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LafdeqallayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LafdeqallayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
