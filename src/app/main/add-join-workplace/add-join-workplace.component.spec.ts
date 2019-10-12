import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoinWorkplaceComponent } from './add-join-workplace.component';

describe('AddJoinWorkplaceComponent', () => {
  let component: AddJoinWorkplaceComponent;
  let fixture: ComponentFixture<AddJoinWorkplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJoinWorkplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoinWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
