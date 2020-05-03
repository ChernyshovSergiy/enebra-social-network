import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFeedInformComponent } from './timeline-feed-inform.component';

describe('TimelineFeedInformComponent', () => {
  let component: TimelineFeedInformComponent;
  let fixture: ComponentFixture<TimelineFeedInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFeedInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFeedInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
