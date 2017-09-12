import { ApiproviderService } from './../../services/apiprovider.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  customers: Observable<any>;
  constructor(private _http: ApiproviderService) {
    this.customers = this._http.getAllCustomers();
  }

  ngOnInit() {
  }

}
