import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OccasionService } from "../occasion.service";

@Component({
  selector: "app-occasion",
  templateUrl: "./occasion.component.html",
  styleUrls: ["./occasion.component.css"],
})
export class OccasionComponent implements OnInit {
  registerForm: any = FormGroup;
  userData: any;
  submitted: boolean = false;
  demo: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private occasion: OccasionService
  ) {}
  date(e: { target: { value: string | number | Date } }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get("date").setValue(convertDate, {
      onlyself: true,
    });
  }
  // let diffTime = Math.abs(
  //   new Date().valueOf() - new Date(e.target.value).valueOf()
  // );
  // let days = diffTime / (24 * 60 * 60 * 1000);
  // let hours = (days % 1) * 24;
  // let minutes = (hours % 1) * 60;
  // let secs = (minutes % 1) * 60;
  // [days, hours, minutes, secs] = [
  //   Math.floor(days),
  //   Math.floor(hours),
  //   Math.floor(minutes),
  //   Math.floor(secs),
  // ];

  // console.log(days + "d", hours + "h", minutes + "m", secs + "s");
  // }
  occasions = [
    { id: 1, value: "Birthday" },
    { id: 2, value: "Wedding" },
    { id: 3, value: "Wedding Anniversary" },
    { id: 4, value: "Work Anniversary" },
    { id: 5, value: "Vacation memory" },
  ];

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      occasion: ["", [Validators.required]],
      date: ["", Validators.required],
    });
  }
  getAllData() {
    this.occasion.getData().subscribe((res: any) => {
      this.userData = res;
    });
  }

  onSubmit(data: any) {
    this.submitted = true;
    this.occasion.postData(data).subscribe((res: any) => {
      this.getAllData();
    });
    // this.userData(this.registerForm.value);
    console.log(this.registerForm.value);
    this.registerForm.reset();
    this.router.navigate(["/event-dis"]);
  }
}
