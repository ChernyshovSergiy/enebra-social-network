import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBlockchainComponent } from './personal-blockchain.component';

describe('PersonalBlockchainComponent', () => {
  let component: PersonalBlockchainComponent;
  let fixture: ComponentFixture<PersonalBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
