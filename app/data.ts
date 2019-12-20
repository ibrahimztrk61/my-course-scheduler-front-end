export class User {
  id: number;
  name: string;
  surname: string;
  grade: number;
  term: number;
  email: string;
  password: string;
  faculty: string;
  department: string;
  userType: string;
}


export class Course {
  id: number;
  title: string;
  code: string;
  crn: number;
  building: string;
  room: string;
  grade: number;
  term: number;
  isMandatory: boolean;
  lecturer: User;
  times: CourseTime[];
}

export class CourseTime {
  id: number;
  startTime: number;
  endTime: number;
  day: string;
}

export class TimeOfScheduler {
  startTime: number;
  monday: Course;
  tuesday: Course;
  wednesday: Course;
  thursday: Course;
  friday: Course;
}
