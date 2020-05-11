import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTinelineSettingsComponent } from './personal-tineline-settings.component';

describe('PersonalTinelineSettingsComponent', () => {
  let component: PersonalTinelineSettingsComponent;
  let fixture: ComponentFixture<PersonalTinelineSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTinelineSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTinelineSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
