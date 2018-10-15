import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})

export class LabelComponent  {

  constructor() { }
  /*@Input()
  condition: boolean
  @Input()
  message: string

  x=10
  y=20*/

  @Input()
  required: boolean
  @Input()
  propertyName: string
  @Input()
  question: boolean
  @Input()
  modal: string

}
