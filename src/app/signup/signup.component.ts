import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName: string
  middleName: string
  lastName: string
  email: string
  dob: number
  contact: number


  constructor() { }

  ngOnInit() {
  }

  submit(){
  console.log(this.firstName)
  console.log(this.middleName)
  console.log(this.lastName)
  console.log(this.email)
  console.log(this.dob)
  console.log(this.contact)
  }

}
