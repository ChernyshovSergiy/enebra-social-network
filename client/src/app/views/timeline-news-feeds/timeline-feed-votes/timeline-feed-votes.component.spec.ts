import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFeedVotesComponent } from './timeline-feed-votes.component';

describe('TimelineFeedVotesComponent', () => {
  let component: TimelineFeedVotesComponent;
  let fixture: ComponentFixture<TimelineFeedVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFeedVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFeedVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
