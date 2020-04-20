import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFeedInnovComponent } from './timeline-feed-innov.component';

describe('TimelineFeedInnovComponent', () => {
  let component: TimelineFeedInnovComponent;
  let fixture: ComponentFixture<TimelineFeedInnovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFeedInnovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFeedInnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
