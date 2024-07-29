import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLadiesComponent } from './edit-ladies.component';

describe('EditLadiesComponent', () => {
  let component: EditLadiesComponent;
  let fixture: ComponentFixture<EditLadiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLadiesComponent]
    });
    fixture = TestBed.createComponent(EditLadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
