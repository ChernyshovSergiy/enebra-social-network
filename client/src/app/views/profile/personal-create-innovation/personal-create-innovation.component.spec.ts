import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCreateInnovationComponent } from './personal-create-innovation.component';

describe('PersonalCreateInnovationComponent', () => {
  let component: PersonalCreateInnovationComponent;
  let fixture: ComponentFixture<PersonalCreateInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCreateInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCreateInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
