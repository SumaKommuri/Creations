import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {



  num1: number
  num2: number
  result: number
  option: string

constructor() { }

ngOnInit() {
  }

  calculate(){
  if(this.option=="divide")
  this.result= this.num1/this.num2
if(this.option=="multiply")
  this.result= this.num1*this.num2
if(this.option=="add")
  this.result= this.num1+this.num2
if(this.option=="subtract")
  this.result= this.num1-this.num2
  }


  onReset(){
  this.num1=null
  this.num2=null
  this.result=null
  this.option=null
  }



}
