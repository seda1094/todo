import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWorkplaceComponent } from './join-workplace.component';

describe('JoinWorkplaceComponent', () => {
  let component: JoinWorkplaceComponent;
  let fixture: ComponentFixture<JoinWorkplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinWorkplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
