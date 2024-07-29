import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLadiesComponent } from './view-ladies.component';

describe('ViewLadiesComponent', () => {
  let component: ViewLadiesComponent;
  let fixture: ComponentFixture<ViewLadiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLadiesComponent]
    });
    fixture = TestBed.createComponent(ViewLadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
