import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGentsComponent } from './edit-gents.component';

describe('EditGentsComponent', () => {
  let component: EditGentsComponent;
  let fixture: ComponentFixture<EditGentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGentsComponent]
    });
    fixture = TestBed.createComponent(EditGentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
