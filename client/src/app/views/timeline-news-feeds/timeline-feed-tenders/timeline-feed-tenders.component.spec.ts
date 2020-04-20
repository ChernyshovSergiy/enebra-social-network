import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFeedTendersComponent } from './timeline-feed-tenders.component';

describe('TimelineFeedTendersComponent', () => {
  let component: TimelineFeedTendersComponent;
  let fixture: ComponentFixture<TimelineFeedTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFeedTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFeedTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
