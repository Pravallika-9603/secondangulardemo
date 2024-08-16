import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''
  };
  UserRegisterService: any;
  submitForm(form:any):void{
    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe((response: any)=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },(error: any)  => {
      console.log(" saved error "+JSON.stringify(error));
    });
    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }
  
}
