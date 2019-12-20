import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerScheduleComponent } from './lecturer-schedule.component';

describe('LecturerScheduleComponent', () => {
  let component: LecturerScheduleComponent;
  let fixture: ComponentFixture<LecturerScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
