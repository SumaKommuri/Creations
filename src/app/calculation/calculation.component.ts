import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})

export class CalculationComponent implements OnInit {

  /*calculationForm = new FormGroup({
    num1: new FormControl(''),
    num2: new FormControl(''),
    result: new FormControl(''),
    option: new FormControl('')
  });*/

  calculationForm = this.fb.group({
    num1:['', Validators.required],
    num2:['', Validators.required],
    result:[''],
    option:['', Validators.required]
});

 /* num1: number
  num2: number
  result: number
  option: string*/

constructor(private fb: FormBuilder) { }

ngOnInit() {
  }

calculate(){
console.log(this.calculationForm);
let val = this.calculationForm.get('option').value
if(this.calculationForm.controls.option.value=="divide"){
this.calculationForm.patchValue({
  result: this.calculationForm.get('num1').value/this.calculationForm.get('num2').value})
  }
if(val=="multiply"){
this.calculationForm.patchValue({
  result: this.calculationForm.get('num1').value*this.calculationForm.get('num2').value})
  }
if(val=="add"){
this.calculationForm.patchValue({
  result: this.calculationForm.get('num1').value+this.calculationForm.get('num2').value})
  }
if(val=="subtract"){
this.calculationForm.patchValue({
  result: this.calculationForm.get('num1').value-this.calculationForm.get('num2').value})
  }
}

  onReset(){
  this.calculationForm.reset()
  }


 /* calculate(){
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
  }*/



}
