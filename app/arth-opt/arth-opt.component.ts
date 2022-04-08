import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-arth-opt',
  templateUrl: './arth-opt.component.html',
  styleUrls: ['./arth-opt.component.css']
})
export class ArthOptComponent implements OnInit {

  num1!:number;
  num2!:number;
  result!:number;
  isAdded:boolean=false;
  isSubtract:boolean=false;
  isMul:boolean=false;
  isDivide:boolean=false;
  onSubmitForm:boolean=false;
  
  
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  

  /*-------------Addition function----------*/
addNum(){
  this.result = this.num1 + this.num2;
 //this.toastr.success('Addition of two number', 'Addition');
//console.log('add::::',this.result);
 this.isAdded=true;
 this.onSubmitForm=false;
}
  
/*-------------subtraction function----------*/


subNum(){
  this.result = this.num1 - this.num2;
// this.toastr.warning('Subtraction of two number', 'Subtraction');
 this.isSubtract=true;
 this.onSubmitForm=false;
//console.log('sub::::',this.result);
}

  /*-------------Multiplication function----------*/

mulNum(){
  this.result = this.num1 * this.num2;
 //this.toastr.info('Multiplication of two number', 'Multiplication ');
this.isMul=true;
this.onSubmitForm=false;
//console.log('mul:::',this.result);

}

  /*-------------Division function----------*/

divNum(){
  this.result = this.num1 / this.num2;
// this.toastr.error('Division of two number', 'Division');
this.isDivide=true;
this.onSubmitForm=false;
//console.log('div:::',this.result);

}

  /*-------------Submit function
  
  ----------*/

onSubmit(){
  
 this.onSubmitForm=true;

/*-------------Addition function----------*/
   if(this.isAdded==true){
  
  console.log('add::::',this.result);
  this.isAdded=false;
  this.toastr.success('Addition of two number', 'Addition');

}

/*-------------Subtraction function----------*/

 else if(this.isSubtract==true){

  console.log('sub::::',this.result);
  this.isSubtract=false
  this.toastr.warning('Subtraction of two number', 'Subtraction');


 }

/*-------------Multiplication function----------*/

else if(this.isMul==true){
  
  console.log('mul::::',this.result);
  this.isMul=false
  this.toastr.info('Multiplication of two number', 'Multiplication ');

}
  
/*-------------Division function----------*/

 else if(this.isDivide==true){
  
  console.log('div::::',this.result);
  this.toastr.error('Division of two number', 'Division');

}

}

}

