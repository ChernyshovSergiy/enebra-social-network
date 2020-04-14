import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNewsFeedsComponent } from './timeline-news-feeds.component';

describe('TimelineNewsFeedsComponent', () => {
  let component: TimelineNewsFeedsComponent;
  let fixture: ComponentFixture<TimelineNewsFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineNewsFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineNewsFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
