import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassord',
  templateUrl: './forgotpassord.component.html',
  styleUrl: './forgotpassord.component.css'
})
export class ForgotpassordComponent {

  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''
  };
  
}
