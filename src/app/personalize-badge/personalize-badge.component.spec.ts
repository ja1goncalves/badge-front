import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizeBadgeComponent } from './personalize-badge.component';

describe('PersonalizeBadgeComponent', () => {
  let component: PersonalizeBadgeComponent;
  let fixture: ComponentFixture<PersonalizeBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizeBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
