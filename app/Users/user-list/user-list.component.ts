import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  phone: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'John', phone: 123456789, email: 'john@gmail.com'},
  {id: 2, name: 'Bob', phone: 234567789, email: 'bob@gmail.com'},
  {id: 3, name: 'Sam', phone: 3452634353, email: 'sam@gmail.com'},
 
];


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() {
    console.log('User-list module loaded')
   }

  ngOnInit(): void {
  }

}
