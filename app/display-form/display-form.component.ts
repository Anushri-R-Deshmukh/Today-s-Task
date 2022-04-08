import { DataSource } from "@angular/cdk/collections";
import { Component, OnInit, ViewChild } from "@angular/core";
import { UserModule } from "../user/user.module";
import { Userdata } from "../reactive-form/user.module";
import { MatTableDataSource } from "@angular/material/table";
import { CommonService } from "../common.service";
import * as _ from "lodash";
import { MatPaginator } from "@angular/material/paginator";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-display-form",
  templateUrl: "./display-form.component.html",
  styleUrls: ["./display-form.component.css"],
})
export class DisplayFormComponent implements OnInit {
  @ViewChild("registerForm", { static: false })
  registerForm: any = FormGroup;

  userData: any = Userdata;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "name",
    "age",
    "department",
    "gender",
    "actions",
  ];
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;
  submitted = false;

  departments = [
    { id: 1, value: "CSE" },
    { id: 2, value: "ESE" },
    { id: 3, value: "MECE" },
  ];
  constructor(private cmnService: CommonService, private fb: FormBuilder) {
    this.userData = {} as Userdata;
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      gender: ["Male", Validators.required],
      department: ["", Validators.required],
    });
  }
  date(e: { target: { value: string | number | Date } }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get("dob").setValue(convertDate, {
      onlyself: true,
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllUsers();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
  }
  getAllUsers() {
    this.cmnService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  editItem(element: any) {
    this.userData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.registerForm.resetForm();
  }

  deleteItem(id: string) {
    this.cmnService.deleteItem(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
      console.log(this.dataSource.data);
    });
  }
  onClear() {
    this.registerForm.reset();
  }
}
