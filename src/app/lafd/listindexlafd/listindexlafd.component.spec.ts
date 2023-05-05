import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListindexlafdComponent } from './listindexlafd.component';

describe('ListindexlafdComponent', () => {
  let component: ListindexlafdComponent;
  let fixture: ComponentFixture<ListindexlafdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListindexlafdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListindexlafdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
