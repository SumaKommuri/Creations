import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  option: number
  multiplication: String[] =[];

  constructor() { }

  ngOnInit() {
  }

  multiply(){
    this.multiplication =[]
  for(let i=1;i<=10;i++){
  this.multiplication.push(this.option +'*'+i+'='+this.option*i)
  }
  console.log(this.multiplication)
  }

}
