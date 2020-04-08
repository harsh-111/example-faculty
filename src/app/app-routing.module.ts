import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyWorkComponent } from './faculty-work/faculty-work.component';


const routes: Routes = [
  {
    path: 'faculty-assignment',
    component: FacultyWorkComponent
  },
  {
    path: '**',
    redirectTo: 'faculty-assignment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
