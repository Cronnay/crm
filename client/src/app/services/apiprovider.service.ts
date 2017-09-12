import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiproviderService {

  constructor(public http: Http) { }
  
  getAllCustomers() {
    return this.http.get("http://localhost/customer").map(res => res.json());
  }
  getCustomer(id){
    return this.http.get(`http://localhost/customer/${id}`).map(res => res.json());
  }
}
