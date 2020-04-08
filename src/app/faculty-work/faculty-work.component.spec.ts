import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyWorkComponent } from './faculty-work.component';

describe('FacultyWorkComponent', () => {
  let component: FacultyWorkComponent;
  let fixture: ComponentFixture<FacultyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
