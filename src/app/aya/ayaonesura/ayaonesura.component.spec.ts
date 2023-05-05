import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyaonesuraComponent } from './ayaonesura.component';

describe('AyaonesuraComponent', () => {
  let component: AyaonesuraComponent;
  let fixture: ComponentFixture<AyaonesuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyaonesuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyaonesuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
