import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeData():Observable<any>{
    return this.http.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }

  getDeleteEmpoyee(id:string):Observable<any>{
    return this.http.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/" +id)
  }

  getSearch(term:string):Observable<any>{
    return this.http.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term)
  }
}