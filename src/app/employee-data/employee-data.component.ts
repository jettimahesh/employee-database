import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent {

  employees:any=[];
  term:string = "";

  column:string="";
  order:string="";

  page:number= 0 ;
  limit:number = 0 ;

constructor(private employeeData:EmployeeService) { 
  employeeData.getEmployeeData().subscribe(
    (data:any)=>{
      this.employees=data;
      console.log(this.employees)
    },
    (error:any)=>{
      alert("internal error")
    }
  )
}
delete(id:string){
  this.employeeData.getDeleteEmpoyee(id).subscribe(
    (data:any)=>{
      alert("DELETED")
      location.reload()
    },
    (error:any)=>{
      alert("internal error")
    }
  )
}
search(){
  this.employeeData.getSearch(this.term).subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (error:any)=>{
      alert("internal error")
    }
  )

}

sort(){
  this.employeeData.getSort(this.column, this.order).subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}
pagination(){
  this.employeeData.getpaged(this.limit, this.page).subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (err:any)=>{
      alert("internal error")
    }   
  )

}
}
