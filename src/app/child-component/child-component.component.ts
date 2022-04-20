import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../parent-component/parent-component.component';
import { Pizza } from '../parent-component/parent-component.component';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()
  objects!: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

getKeys(obj:any){
  return Object.keys(obj);
  
}


}
