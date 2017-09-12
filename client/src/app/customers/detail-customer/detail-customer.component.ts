import { ApiproviderService } from './../../services/apiprovider.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {
  customer: any;
  constructor(private _http: ApiproviderService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this._http.getCustomer( this.route.snapshot.params['id']).subscribe( customer => this.customer = customer.custdetail);
  }
}
