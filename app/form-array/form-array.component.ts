import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
form!:FormGroup;
  
  constructor(private fb:FormBuilder, private controls:AbstractControl) { }

  create(){
  this.form=this.fb.group({
  name:'',
  lession: this.fb.array([])
})
  }
  ngOnInit(): void {
    this. create();
  }
get lession(){
  return this.form.controls['lession'] as FormArray;
}

addLession(){
  const lessionForm = this.fb.group({
 title:['', Validators.required],
 level:['', Validators.required]
 
  });
  this.lession.push(lessionForm);
}
deleteLession(index:number){
  this.lession.removeAt(index);
}

}
