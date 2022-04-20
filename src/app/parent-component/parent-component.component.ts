
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  employees: Array<Employee> = new Array();
  pizzas: Array<Pizza> = new Array();

  constructor() { }

  ngOnInit(): void {
  }
  addEmpolyee($event: any) {
    let id = $event.target['id'].value;
    let name = $event.target['name'].value;
    let salary = $event.target['salary'].value;
    let employee = new Employee(id, name, salary);
    this.employees.push(employee);
    alert("employee information added");
    return false;
  }

  addPizza($event: any) {
    let size = $event.target['size'].value;
    let type = $event.target['type'].value;
    let price = $event.target['price'].value;
    let pizza = new Pizza(size, type, price);
    this.pizzas.push(pizza);
    alert("pizzas information added");
    return false;
  }
}
export class Employee {
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this._salary = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  constructor(private _id: number, private _name: string, private _salary: number) { }
}

export class Pizza {
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
  public get size(): string {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
  }
  constructor(private _size: string, private _type: string, private _price: number) { }
}


