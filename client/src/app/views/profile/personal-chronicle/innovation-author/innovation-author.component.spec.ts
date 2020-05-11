import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationAuthorComponent } from './innovation-author.component';

describe('InnovationAuthorComponent', () => {
  let component: InnovationAuthorComponent;
  let fixture: ComponentFixture<InnovationAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
