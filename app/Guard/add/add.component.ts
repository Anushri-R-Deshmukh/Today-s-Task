import { Component, OnInit } from "@angular/core";

class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}

let employee = new Employee("Anu", "Deshmukh", "Front-end Developer");
console.log(employee.getFullName());
console.log(employee.describe());

//-------------------------------
class Car {
  Color: string;
  constructor(color: string) {
    this.Color = color;
  }
}
class Audi extends Car {
  Price: number;
  constructor(color: string, price: number) {
    super(color);
    this.Price = price;
  }
  display(): void {
    console.log("Color of Audi car: " + this.Color);
    console.log("Price of Audi car: " + this.Price);
  }
}
let obj = new Audi(" Black", 8500000);
obj.display();

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
