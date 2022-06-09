import { Component, OnInit } from '@angular/core';
import { customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer;

  customers:customer[]=[
  {customerNo:1,name:'arti',address:"",city:'ahmedabad'},
  {customerNo:2,name:'umang',address:"",city:'ahmedabad'},
  {customerNo:3,name:'yatri',address:"",city:'ahmedabad'},
  {customerNo:4,name:'meera',address:"",city:'ahmedabad'},]


}
