import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLadiesComponent } from './add-ladies.component';

describe('AddLadiesComponent', () => {
  let component: AddLadiesComponent;
  let fixture: ComponentFixture<AddLadiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLadiesComponent]
    });
    fixture = TestBed.createComponent(AddLadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
