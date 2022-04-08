import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit, Optional } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AddressService } from "../address.service";

@Component({
  selector: "app-model-popup",
  templateUrl: "./model-popup.component.html",
  styleUrls: ["./model-popup.component.css"],
})
export class ModelPopupComponent implements OnInit {
  // data: any;
  formData: any[] = [];
  subscription: Subscription;
  title = "this is a model";
  image!: File;
  resData: any;
  selectedFile: any = null;
  uploadForm: FormGroup;
  name: string | Blob;
  url: any = [];
  obj: any = {
    application: "1234",
    id: 1,
    name: "anu",
  };
  myVal: boolean = false;
  index: any;
  previews: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private address: AddressService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModelPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formData = data.pageValue;
    // this.uploadForm = this.createGroup();
  }
  // createGroup(): any {
  //   const group = this.fb.group({});
  //   this.formData.forEach((control) =>
  //     group.addControl(control.name, this.fb.control("", [Validators.required]))
  //   );
  //   return group;
  // }

  ngOnInit(): void {
    this.address.getMessage().subscribe((data) => {
      this.formData.push(data);
      console.log("::::::::::::", this.formData);
    });
    this.uploadForm = this.fb.group({
      name: new FormControl("", Validators.required),
      file: this.fb.array([], [Validators.required]),
    });
    // this.uploadForm = this.fb.group({
    //   datas: [""],
    // });
  }
  incomeproof: any;
  addressproof: any;

  onFileChange(event: any, index: number) {
    const file: FormArray = this.uploadForm.get("file") as FormArray;
    console.log(index);
    const target = event.target as HTMLInputElement;
    // if (target.files && target.files.length > 0) {
    for (var i = 0; i < event.target.files.length; i++) {
      file.push(new FormControl(event.target.files[0].name));
      this.selectedFile = event.target.files[0].name;
      console.log(this.selectedFile);
    }
  }
  newValue: any;
  public delet(i: number) {
    // if (files.length > 0) {
    //   const file = files.item(0).splice(files.length - 1);
    //   console.log(`fileChanged2 ${file.name}, ${file.type}, ${file.size}`);
    // }
    this.newValue.splice(i);
  }
  // submit() {
  //   console.log(this.uploadForm.value.file);
  // }:any
  reset(element: any) {
    element.value = "";
  }
  onClose(response: boolean) {
    this.dialogRef.close(response);
  }

  deleteItem(index: any) {
    this.selectedFile.splice(index, 1);
  }
  submit() {
    this.obj["files"] = this.uploadForm.value;
    console.log(this.obj);
  }
  files: any = [];

  // onFileChange(event: any, val: any, index: number) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     for (let i = 0; i < this.formData.length; i++) {
  //       if (this.formData[i].name === val) {
  //         this.formData[i].imageUrl = file;
  //         this.formData[i].imageName = file.name;
  //       }
  //       // var reader = new FileReader();

  //       // reader.readAsDataURL(event.target.files[0]); // read file as data url

  //       // reader.onload = (event) => {
  //       //   // called once readAsDataURL is completed
  //       //   // this.url = event.target.result;
  //       //   this.selectedFile = event.target.result;
  //     }
  //   }
  // }
}
