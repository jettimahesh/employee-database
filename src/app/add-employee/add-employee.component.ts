import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  // constructor (private newEmploye:EmployeeService){}

  public employeeForm:FormGroup = new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    company:new FormControl(),
    role:new FormControl(),
    package:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    }),
    workmode:new FormControl(),
    hike:new FormArray([]),
    gender:new FormControl()
  })

  get hikesFormarray(){
    return this.employeeForm.get('hike') as FormArray;
  }
  addHike(){
    this.hikesFormarray.push(
      new FormGroup({
        year:new FormControl(),
        percentage:new FormControl()
        })
    )
  }

  deleteHike(i:number){
    this.hikesFormarray.removeAt(i);
  }

constructor( private newEmploye:EmployeeService){

  this.employeeForm.get('workmode')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='remote'){
        this.employeeForm.addControl('wifibill', new FormControl());
        this.employeeForm.removeControl('travelc');
      } else{
        this.employeeForm.addControl('travelc', new FormControl);
        this.employeeForm.removeControl('wifibill');
      }
    }
  )
}

  newemploye(){
    this.newEmploye.getAddEmployee(this.employeeForm.value).subscribe(
      (data:any)=>{
        alert("create")
      },
      (error:any)=>{
        alert("error")
      }
    )
    console.log(this.employeeForm.value)
  }
}
