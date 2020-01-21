import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { LanguageComponent } from './language/language.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'language', component: LanguageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
