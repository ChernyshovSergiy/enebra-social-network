import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationCoAuthorComponent } from './innovation-co-author.component';

describe('InnovationCoAuthorComponent', () => {
  let component: InnovationCoAuthorComponent;
  let fixture: ComponentFixture<InnovationCoAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationCoAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationCoAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
