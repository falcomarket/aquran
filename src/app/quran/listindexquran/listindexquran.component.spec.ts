import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListindexquranComponent } from './listindexquran.component';

describe('ListindexsuraComponent', () => {
  let component: ListindexquranComponent;
  let fixture: ComponentFixture<ListindexquranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListindexquranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListindexquranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
