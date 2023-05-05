import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexquranComponent } from './indexquran.component';

describe('IndexquranComponent', () => {
  let component: IndexquranComponent;
  let fixture: ComponentFixture<IndexquranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexquranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexquranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
