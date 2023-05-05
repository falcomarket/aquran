import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexlafdComponent } from './indexlafd.component';

describe('IndexlafdComponent', () => {
  let component: IndexlafdComponent;
  let fixture: ComponentFixture<IndexlafdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexlafdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexlafdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
