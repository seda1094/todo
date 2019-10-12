import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WokplaceListItemComponent } from './wokplace-list-item.component';

describe('WokplaceListItemComponent', () => {
  let component: WokplaceListItemComponent;
  let fixture: ComponentFixture<WokplaceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokplaceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WokplaceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
