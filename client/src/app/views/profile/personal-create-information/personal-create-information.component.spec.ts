import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCreateInformationComponent } from './personal-create-information.component';

describe('PersonalCreateInformationComponent', () => {
  let component: PersonalCreateInformationComponent;
  let fixture: ComponentFixture<PersonalCreateInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCreateInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCreateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
