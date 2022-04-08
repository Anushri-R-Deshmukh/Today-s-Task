import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Userdata } from "../reactive-form/user.module";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-reg-reactive-form",
  templateUrl: "./reg-reactive-form.component.html",
  styleUrls: ["./reg-reactive-form.component.css"],
})
export class RegReactiveFormComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  registerForm: any = FormGroup;
  userData: any = Userdata;
  dataSource = new MatTableDataSource<any>(this.userData);
  displayedColumns: string[] = [
    "id",
    "name",
    "age",
    "phone",
    "email",
    "address",
    "city",
    "gender",
    "actions",
  ];
  isEditMode = false;
  submitted = false;
  pageSize: number = 5;
  city = [
    { id: 1, value: "Amravati" },
    { id: 2, value: "Nagpur" },
    { id: 3, value: "Hyderabad" },
    { id: 3, value: "Vijayawada" },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.createForm();
  }
  date(e: { target: { value: string | number | Date } }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get("dob").setValue(convertDate, {
      onlyself: true,
    });
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      gender: ["Male", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      dob: ["", Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    // this.userData(this.registerForm.value);
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
