import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatTableDataSource,_MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


export interface users {
  [x: string]: any;
  id:number;
  name: string;
  age: number;
  department: string;
  gender: string;
}
//const formData: users[] = [
 // { name: 'Hydrogen', age:23, department:'CSE', gender:'female'},]

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm:any = FormGroup;
  formData: users[] = [
   { id:1, name: 'Anu', age:23, department:'CSE', gender:'female'},]
 submitted: boolean = false;
 //dataSource = new MatTableDataSource< Element[] >;
 //displayedColumns: string[] = [ 'name', 'age', 'department', 'gender','action'];
  //dataSource = this.formData;
  departments = [
    { id: 1, value: 'CSE' },
    { id: 2, value: 'ESE' },
    { id: 3, value: 'MECE' }];
    
    isUpdate: boolean = false;    
    selectedIndex:any;  
    constructor(private fb:FormBuilder, private toastr:ToastrService) {

  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        age: ['', [Validators.required]],
        gender: ['Male', Validators.required],
        department: ['',Validators.required],

      }
    
    );
    }
  
  //----------Submit----------
  onSubmit(){
    this.submitted = true;
    /*console.log(this.registerForm.value);
 this.formData.push(this.registerForm.value);
 console.log(this.formData);
this.registerForm.reset();*/
console.log('Your form data : ', this.registerForm.value);

if(this.isUpdate){
  this.formData[this.selectedIndex]=this.registerForm.value;
  this.toastr.info('Record edit successfully', 'Data Updated');

}else{
this.formData.push(this.registerForm.value);
this.toastr.success('Record added successfully', 'Data Submit');
}
this.isUpdate=false;
this.registerForm.reset();
}




 //----------Clear----------
   
 /*onClear() {
    this.registerForm.reset();
  }*/

  //----------Edit----------
 /* onEdit(index:any){
    //console.log('data::::', data);
    console.log('index:::', this.formData[index]);
    this.registerForm.patchValue(this.formData[index]);
  //  this.registerForm.patchValue(this.formData[data]);

}*/
//------update or edit data------
onUpdate(data:any,index:any){
  console.log('data:::', data);
  console.log('index:::', this.formData[index]);
  this.isUpdate=true;
  this.selectedIndex = index;
  this.registerForm.patchValue(this.formData[index]);

}
  //----------Delete----------

  onDelete(index:any){
    
    this.formData.splice(index,1);
    this.toastr.warning('Record delete successfully', 'Data Delete');
    //alert('Are you shure, you want to delete data');
  }
}








