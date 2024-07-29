import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrensComponent } from './view-childrens.component';

describe('ViewChildrensComponent', () => {
  let component: ViewChildrensComponent;
  let fixture: ComponentFixture<ViewChildrensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildrensComponent]
    });
    fixture = TestBed.createComponent(ViewChildrensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
