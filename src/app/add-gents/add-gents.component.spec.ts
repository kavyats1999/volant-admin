import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGentsComponent } from './add-gents.component';

describe('AddGentsComponent', () => {
  let component: AddGentsComponent;
  let fixture: ComponentFixture<AddGentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGentsComponent]
    });
    fixture = TestBed.createComponent(AddGentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
