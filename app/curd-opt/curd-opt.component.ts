import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { CurdOptService } from "../curd-opt.service";

@Component({
  selector: "app-curd-opt",
  templateUrl: "./curd-opt.component.html",
  styleUrls: ["./curd-opt.component.css"],
})
export class CurdOptComponent implements OnInit {
  registerForm!: FormGroup;
  allUsers: any;
  isEdit: boolean = false;
  usersObj = {
    name: "",
    mobile: "",
    email: "",
    designation: "",
    id: "",
  };

  constructor(
    private fb: FormBuilder,
    private tostr: ToastrService,
    private cdService: CurdOptService
  ) {}
  ngOnInit(): void {
    this.getLatestUser();
  }

  onSubmit(formObj: any) {
    console.log(formObj);
    this.cdService.CreateUser(formObj).subscribe((response) => {
      console.log("user data has been added successfully");
      this.getLatestUser();
    });
  }

  getLatestUser() {
    this.cdService.getAllUser().subscribe((response) => {
      this.allUsers = response;
    });
  }
  editUser(user: any) {
    this.isEdit = true;
    this.usersObj = user;
  }
  deleteUsers(user: any) {
    this.cdService.deleteUser(user).subscribe(() => {
      this.getLatestUser();
    });
  }

  updateUsers() {
    this.isEdit = !this.isEdit;
    this.cdService.updateUser(this.usersObj).subscribe(() => {
      this.getLatestUser();
    });
  }
}
