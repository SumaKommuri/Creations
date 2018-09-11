import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  constructor() { }
  @Input()
  condition: boolean
  @Input()
  message: string
  x=10
  y=20



  ngOnInit() {
  }

}
