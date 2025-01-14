import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoComponent } from './assignment-two.component';

describe('AssignmentTwoComponent', () => {
  let component: AssignmentTwoComponent;
  let fixture: ComponentFixture<AssignmentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
