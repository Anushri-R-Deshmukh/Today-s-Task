import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css']
})
export class CmpOneComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    console.log(this.model);
    localStorage.setItem ('data', JSON.stringify(this.model));
  }
}
