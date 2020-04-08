import { Component, OnInit } from '@angular/core';
import { teachers } from '../constants/faculty-constants';
import { subjects } from '../constants/subject-const';

@Component({
  selector: 'app-faculty-work',
  templateUrl: './faculty-work.component.html',
  styleUrls: ['./faculty-work.component.scss']
})
export class FacultyWorkComponent implements OnInit {

  public teacherList = teachers;
  public subjectList = subjects;
  public assignSubject: any = {};
  public selectedIndex;
  constructor() { }

  ngOnInit(): void {
    this.assignSubject = [...this.teacherList];
  }


  // admin change any selected teacher and here assignment of subects
  assign(teacherName) {
    this.subjectList.map((id: any) => delete id.isSelected ? id.isSelected : undefined)
    this.selectedIndex = this.teacherList.findIndex(selectedId => selectedId.id === teacherName)
    this.teacherList[this.selectedIndex].assignedSubjects.map((assign: any) => {
      this.subjectList.map((id: any) => {
        if (id.id === assign.id) {
          return id.isSelected = true;
        }
      })
    })
  }

  // subjects changes it will update teacher list array
  change(event, name) {
    if (event.checked) {
      this.teacherList[this.selectedIndex].assignedSubjects.push(name)
    } else {
      let index = this.teacherList[this.selectedIndex].assignedSubjects.findIndex(id => id === name.id)
      this.teacherList[this.selectedIndex].assignedSubjects.splice(index, 1)
    }
  }

  // assign new object to assign subject
  onSubmit(event) {
    this.assignSubject = this.teacherList;
    this.subjectList.map((id: any) => delete id.isSelected ? id.isSelected : undefined)
  }


  // event from faculty list
  updateSubject(event) {
    this.assign(event.id);
    this.assignSubject.id = event.id;
  }

}
