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

  getSort(column: string, order: string): Observable<any> {
    return this.http.get(
      `https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy=${column}&order=${order}`
    );
  }
  getpaged(limit: number, page: number): Observable<any> {
    return this.http.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit=" + limit + "&page=" + page);
  }
  getAddEmployee(data:any):Observable<any>{
    return this.http.post("https://6572df5d192318b7db412dfe.mockapi.io/employees", data)
  }
}
