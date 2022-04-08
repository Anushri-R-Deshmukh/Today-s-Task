import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddressService } from "../address.service";
import { ModelPopupComponent } from "../model-popup/model-popup.component";

@Component({
  selector: "app-docs-data",
  templateUrl: "./docs-data.component.html",
  styleUrls: ["./docs-data.component.css"],
})
export class DocsDataComponent implements OnInit {
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
      isChecked: false,
    },
    {
      proof: "address",
      data: [
        {
          id: "4",
          name: "aadhar",
          no: "5667",
        },
        {
          id: "5",
          name: "ration",
          no: "3236",
        },
        {
          id: "6",
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
          id: "7",
          name: "X Memo",
          no: "4343",
        },
        {
          id: "8",
          name: "Inter Memo",
          no: "6767",
        },
        {
          id: "9",
          name: "B.Tech Memo",
          no: "9890",
        },
      ],
      isChecked: false,
    },
  ];
  selectedResValuve: any[] = [];
  indexArray: any[] = [];
  checkvalidity: boolean;
  selectedItems = false;
  constructor(private dialog: MatDialog, private address: AddressService) {}

  ngOnInit(): void {
    this.validation();
  }

  getSelectedValue(val: any, data: any, index1: number) {
    // console.log(val);
    // console.log(index1);
    // // console.log(val.target.checked);
    // if (val.target.checked == true) {
    //   // console.log(index1);
    //   // console.log(data.id);
    //   this.indexArray.push(data.id);
    //   // console.log(this.indexArray);
    // } else {
    //   // let a = this.selectedResValuve.indexOf(this.response[index].data[index1]);
    //   this.indexArray.splice(data.id, 1);
    // }
    // console.log(data.id);
    // console.log(this.indexArray);
    if (val.target.checked == true) {
      this.indexArray.push(data.name);
    } else {
      this.indexArray.splice(this.indexArray.indexOf(data.name), 1);
    }
    console.log(this.indexArray);
    // this.selectedItems = data?.forin((val1: any, i: number) => {
    //   this.indexArray.findIndex((val2: any, i) => val1.id === val2);
    //   console.log(val1);
    // });
    for (let res in data) {
      if (res == "name") {
        this.selectedItems =
          this.indexArray.length >= 3 &&
          this.indexArray.some((x) => x == data[res]);
        console.log(data[res]);
        console.log(this.indexArray);
      }
    }
    // this.selectedItems = this.response[index1].data.some(
    //   (x: any, i: number) => x.id == this.indexArray[i]
    // );

    console.log(this.selectedItems);
  }
  validation() {
    // for (let index = 0; index < this.response.length; index++) {
    //   for (
    //     let index1 = 0;
    //     index1 < this.response[index].data.length;
    //     index1++
    //   ) {
    //     for (let j = 0; j < this.selectedResValuve.length; j++) {
    //       if (
    //         this.selectedResValuve[j].name ===
    //         this.response[index].data[index1].name
    //       ) {
    //         this.indexArray.push(index);
    //       }
    //     }
    //   }
    // }
    console.log("indx2", this.indexArray);
    this.checkvalidity = this.response.data.some(
      (data: any, index: number) => data.isChecked === true
    );
  }

  // atListOneCheckboxSelected() {
  //   if (this.selectedResValuve.length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  openDialog() {
    // this.dialog.open(ModelPopupComponent, {
    //   width: "600px",
    //   data: { proof: this.selectedResValuve, arr: this.response },
    // });

    console.log(this.indexArray);
    const dialogRef = this.dialog.open(ModelPopupComponent, {
      width: "550px",
      backdropClass: "custom-dialog-backdrop-class",
      panelClass: "custom-dialog-panel-class",
      data: { pageValue: this.indexArray },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
      this.indexArray = result.data;
    });
    // this.dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result);
    // });
    this.address.sendMessage(this.indexArray);
    this.response.isChecked = true;
  }
}
