import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { AddressService } from "../address.service";
import { ModelPopupComponent } from "../model-popup/model-popup.component";
import { ModelPopupsService } from "../model-popups.service";
import { atLeastOneCheckboxCheckedValidator } from "./checkbox.validator";
@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"],
})
export class DocsComponent implements OnInit {
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
  checked: boolean = false;
  dialogRef: MatDialogRef<any>;
  indexArray: any[];
  checkValidity: boolean;
  selectedValue: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modalPopupService: ModelPopupsService,
    private address: AddressService,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group(
      {
        datas: this.fb.array([]),
      }

      // atLeastOneCheckboxCheckedValidator()
    );
  }
  employeeFormArray() {
    return this.fb.group({
      isChecked: [false],
      id: ["", Validators.required],
      name: ["", Validators.required],
      no: ["", Validators.required],
    });
  }

  onCheckboxChange(e: any, index: number, index1: number) {
    const datas: FormArray = this.form.get("datas") as FormArray;

    if (e.target.checked) {
      datas.push(new FormControl(e.target.value));
      this.checked = true;
    } else {
      const index = datas.controls.findIndex((x) => x.value === e.target.value);
      datas.removeAt(index);
      this.checked = false;
    }

    // this.validation();
    // this.atListOneCheckboxSelected();
  }
  // onCheckboxChange(e: any, index: number, index1: number) {
  //   if (e.target.checked === true) {
  //     this.selectedValue?.push(e.name);
  //   } else {
  //     const index = this.selectedValue?.filter((x: any) => {
  //       x.indexOf(e.name);
  //     });
  //     index?.removeAt(index);
  //   }

  //   this.validation();
  //   // this.atListOneCheckboxSelected();
  // }

  // validation() {
  //   this.indexArray = [];
  //   for (let index = 0; index < this.response.length; index++) {
  //     for (
  //       let index1 = 0;
  //       index1 < this.response[index].data.length;
  //       index1++
  //     ) {
  //       for (let j = 0; j < this.selectedValue?.length; j++) {
  //         if (
  //           this.selectedValue[j].name ===
  //           this.response[index].data[index1].name
  //         ) {
  //           this.indexArray.push(this.selectedValue);
  //         }
  //       }
  //     }
  //   }
  //   this.checkValidity = this.response.every((data: any, i: number) =>
  //     this.indexArray.includes(i)
  //   );

  //   console.log("indx2", this.indexArray);
  // }

  submit(user: any) {
    console.log(this.form.value.datas);
    const dialogRef = this.dialog.open(ModelPopupComponent, {
      width: "550px",
      backdropClass: "custom-dialog-backdrop-class",
      panelClass: "custom-dialog-panel-class",
      data: { pageValue: this.form.value.datas },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
      this.form.value.datas = result.data;
    });
    // this.dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result);
    // });
    this.address.sendMessage(this.form.value.datas);
    this.response.isChecked = true;
  }
  public atListOneCheckboxSelected() {
    if (this.indexArray.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // get ordersFormArray() {
  //   return this.form.controls.datas as FormArray;
  // }
  ngOnInit(): void {
    // this.form = this.fb.group({
    //   datas: new FormArray([]),
    // });
    // this.addCheckboxesToForm();
  }
  // private addCheckboxesToForm() {
  //   this.response.forEach(() =>
  //     this.ordersFormArray.push(new FormControl(false))
  //   );
  // }

  // submit() {
  //   const selectedOrderIds = this.form.value.datas
  //     .map((checked: any, i: any) => (checked ? this.response[i].id : null))
  //     .filter((v: any) => v !== null);
  //   console.log(selectedOrderIds);
  // }
}
