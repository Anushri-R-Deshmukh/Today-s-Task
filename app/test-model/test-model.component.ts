import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-test-model",
  templateUrl: "./test-model.component.html",
  styleUrls: ["./test-model.component.css"],
})
export class TestModelComponent implements OnInit {
  selectedFile: any;
  ngOnInit(): void {}
  myFiles: string[] = [];

  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    file: new FormControl("", [Validators.required]),
  });

  constructor(private http: HttpClient) {}

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
      this.selectedFile = event.target.files[i];
    }
  }
  submit() {
    const formData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file[]", this.myFiles[i]);
    }

    this.http
      .post("http://localhost:3000/comments", formData)
      .subscribe((res) => {
        console.log(res);
        alert("Uploaded Successfully.");
      });
  }
}
