import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WokplaceListComponent } from './wokplace-list.component';

describe('WokplaceListComponent', () => {
  let component: WokplaceListComponent;
  let fixture: ComponentFixture<WokplaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokplaceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WokplaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
