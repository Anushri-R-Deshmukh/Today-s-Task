import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { MatTable } from "@angular/material/table";

export interface Data {
  id: number;
  name: string;
  phone: number;
  email: any;
  age: number;
  gender: string;
  city: string;
}
const formData = [
  {
    id: 1,
    name: "anu",
    phone: 7397966620,
    email: "a@gmail.com",
    age: 23,
    gender: "female",
    city: "hyd",
  },
  {
    id: 1,
    name: "anuj",
    phone: 7397965570,
    email: "ab@gmail.com",
    age: 28,
    gender: "male",
    city: "pune",
  },
];

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  registerForm!: FormGroup;
  city = [
    { id: 1, value: "Hyderabad" },
    { id: 2, value: "Pune" },
    { id: 3, value: "Mumbai" },
    { id: 4, value: "Nagpur" },
    { id: 5, value: "Vijaywada" },
    { id: 6, value: "Delhi" },
    { id: 7, value: "Amravati" },
  ];
  submitted: boolean = false;
  isUpdate: boolean = false;
  selectedIndex: any;

  columnsToDisplay = [
    "id",
    "name",
    "phone",
    "email",
    "age",
    "gender",
    "city",
    "action",
  ];
  dataSource = new MatTableDataSource(formData);
  constructor(private fb: FormBuilder, private tostr: ToastrService) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      age: ["", [Validators.required]],
      city: ["", [Validators.required]],
      gender: ["Male", Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.isUpdate) {
      formData[this.selectedIndex] = this.registerForm.value;
      this.dataSource = new MatTableDataSource(formData);

      this.tostr.info("Data update successfully", "Data Updated");
    } else {
      console.log(this.registerForm.value);
      formData.push(this.registerForm.value);
      this.dataSource = new MatTableDataSource(formData);
      console.log(formData);
      this.tostr.success("Data submit successfully", "Data Updated");
    }
    this.isUpdate = false;
    this.registerForm.reset();
  }

  onUpdate(index: any) {
    //console.log('data:::', data);
    console.log("index:::", formData[index]);
    this.isUpdate = true;
    this.selectedIndex = index;
    this.registerForm.patchValue(formData[index]);
    this.dataSource = new MatTableDataSource(formData);
  }
  //----------Delete----------

  onDelete(id: number) {
    formData.splice(id, 1);
    this.dataSource = new MatTableDataSource(formData);

    this.tostr.warning("Data delete successfully", "Data Delete");
    //alert('Are you shure, you want to delete data');
    console.log(formData);
  }
}
