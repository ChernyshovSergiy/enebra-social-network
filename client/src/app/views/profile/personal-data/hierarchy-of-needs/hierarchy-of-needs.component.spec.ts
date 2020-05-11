import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyOfNeedsComponent } from './hierarchy-of-needs.component';

describe('HierarchyOfNeedsComponent', () => {
  let component: HierarchyOfNeedsComponent;
  let fixture: ComponentFixture<HierarchyOfNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyOfNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyOfNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
