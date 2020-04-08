import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit, OnChanges {

  @Input() teacherList;
  @Output() teacherSubject: EventEmitter<any> = new EventEmitter();
  public assignList : any = {};
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    this.assignList = this.teacherList;
  }


  // assign when updated teacherlist object 
  ngOnChanges() {
    this.assignList = this.teacherList;

  }

  // emit with selected teacher details
  updateSubjects(event) {
    this.teacherSubject.emit(event)
  }
}
