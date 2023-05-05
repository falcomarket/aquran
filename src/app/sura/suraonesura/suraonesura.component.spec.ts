import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraonesuraComponent } from './suraonesura.component';

describe('SuraonesuraComponent', () => {
  let component: SuraonesuraComponent;
  let fixture: ComponentFixture<SuraonesuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuraonesuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuraonesuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
