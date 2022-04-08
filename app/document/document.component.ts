import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DocumentService } from "../document.service";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"],
})
export class DocumentComponent implements OnInit {
  response: any = [
    {
      proof: "Income",
      data: [
        {
          id: "1",
          name: "bankStatement",
          no: "1234",
        },
        {
          id: "2",
          name: "paySlip",
          no: "5678",
        },
        {
          id: "3",
          name: "form16",
          no: "9101",
        },
      ],
      isChecked: true,
    },
    {
      proof: "address",
      data: [
        {
          id: "1",
          name: "aadhar",
          no: "5667",
        },
        {
          id: "2",
          name: "ration",
          no: "3236",
        },
        {
          id: "3",
          name: "license",
          no: "9893",
        },
      ],
      isChecked: false,
    },
    {
      proof: "Education",
      data: [
        {
          id: "1",
          name: "X Memo",
          no: "4343",
        },
        {
          id: "2",
          name: "Inter Memo",
          no: "6767",
        },
        {
          id: "3",
          name: "B.Tech Memo",
          no: "9890",
        },
      ],
      isChecked: false,
    },
  ];
  form: FormGroup;
  submitted = false;
  // userData: any;
  // formData: any;
  // isChecke: false;

  constructor(
    private documentService: DocumentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      allData: ["", [Validators.required]],
    });
    // this.getAllData();
  }

  // getAllData() {
  //   this.documentService.getData().subscribe((response) => {
  //     this.userData = response;
  //   });
  // }
  submit() {
    console.log(this.form.value);
  }
  onChecked(item: any, event: any) {
    // let { checked, value } = event.target;
    // if (checked) {
    //   this.form.value;
    // } else {
    //   // this.address.clearMessages();
    //   // let index = this.preAddressForm.value.indexOf(this.preAddressForm.value);
    //   // if (index !== 1) this.preAddressForm.value.splice(index, 1);
    // }
  }
}
