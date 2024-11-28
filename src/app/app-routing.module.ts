import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent, children:[
  {path:'addemployee',component:AddEmployeeComponent},
{path:'employeedata',component:EmployeeDataComponent},
{path:'home',component:HomeComponent}
]},
{path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
