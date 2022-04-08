import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, DataService } from './data.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Data {
  userId:number,
    id:number,
    title: string,
    completed:boolean
}

const ELEMENT_DATA: Data[] = [
 /* { "userId": 1,"id": 1,"title": "delectus aut autem","completed": false},
  { "userId": 1, "id": 2,"title": "quis ut nam facilis et officia qui","completed": false},
  {"userId": 1,"id": 3,"title": "fugiat veniam minus","completed": false},
  { "userId": 1,"id": 4,"title": "et porro tempora","completed": true},*/
];
const formData =[
  { "userId": 1,"id": 1,"title": "delectus aut autem","completed": false},
  { "userId": 1, "id": 2,"title": "quis ut nam facilis et officia qui","completed": false},
  {userId: '3', id: '1', title: 'vxcvbvb', completed: 'true'}

];

@Component({
  selector: 'app-dis-table',
  templateUrl: './dis-table.component.html',
  styleUrls: ['./dis-table.component.css']
})
export class DisTableComponent implements OnInit {
  registerForm!:FormGroup;
  
  //dataSource:any[] =[];
  columnsToDisplay = ['id', 'userId','title', 'completed'];
  dataSource = new MatTableDataSource(formData);
  //dataSource = this.formData;
  constructor(private service : DataService, private fb:FormBuilder){

    //this.service.getData().then(data => {
      //this.dataSource = data;
  //  });
  }
  /*----------form create-------*/
  createForm(){
    this.registerForm = this.fb.group(
      {
    userId:'',
    id:'',
    title: '',
    completed:''

      }
    
    );
    }

  ngOnInit(){
    this.createForm();
   // this.getAllUser();
  // this.service.getData().then(data => {
   // this.dataSource = data;
 // });
  }
  /*--------get all user data ---------*/
getAllUser(){
  this.service.getUsers().subscribe((response) => {
  this.dataSource = response;
  
  })
}
/* ---- When user click on submit button then added user data in MatTable----*/
onSubmit(){
console.log(this.registerForm.value);
formData.push(this.registerForm.value);
//this.dataSource=formData;

//formData.push({userId: '3', id: '1', title: 'vxcvbvb', completed: 'true'});
this.dataSource = new MatTableDataSource(formData);

console.log(formData);
}

}
