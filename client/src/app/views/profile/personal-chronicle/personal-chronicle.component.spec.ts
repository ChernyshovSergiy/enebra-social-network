import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChronicleComponent } from './personal-chronicle.component';

describe('PersonalChronicleComponent', () => {
  let component: PersonalChronicleComponent;
  let fixture: ComponentFixture<PersonalChronicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalChronicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChronicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
