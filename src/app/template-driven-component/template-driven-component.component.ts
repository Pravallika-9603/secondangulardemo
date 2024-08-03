import { Component } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {
 
  constructor(private UserRegisterService:UserregisterService){

  }



  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''
  };
  submitForm(form:any):void{
    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe(response=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },error  => {
      console.log(" saved error "+JSON.stringify(error));
    });
    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }
  }

