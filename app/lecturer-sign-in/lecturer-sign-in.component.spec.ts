import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerSignInComponent } from './lecturer-sign-in.component';

describe('LecturerSignInComponent', () => {
  let component: LecturerSignInComponent;
  let fixture: ComponentFixture<LecturerSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
