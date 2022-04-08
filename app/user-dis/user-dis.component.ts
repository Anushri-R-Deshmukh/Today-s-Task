import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../dis-table/data.service';


export interface Data {

userId:number,
id:number,
title: string,
completed:boolean
}

const ELEMENT_DATA: Data[] = [

];
@Component({
  selector: 'app-user-dis',
  templateUrl: './user-dis.component.html',
  styleUrls: ['./user-dis.component.css']
})
export class UserDisComponent implements OnInit {


  //dataSource:any[] =[];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  columnsToDisplay = ['id', 'userId','title', 'completed'];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.service.getUsers().subscribe((response) => {
    this.dataSource = response;
    
    });
  }

}
