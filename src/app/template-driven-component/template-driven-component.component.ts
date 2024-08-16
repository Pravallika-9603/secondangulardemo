import { Component, EventEmitter, Output, output } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {

 @Output()
 userNameEmitter : EventEmitter<string>=new EventEmitter();
  subject=new Subject<String>();

  constructor(private UserRegisterService:UserregisterService){
    this.subject.subscribe(data=>{
      console.log("from subject subscriber "+data)
  })

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
    this.subject.next("subject in angular"+this.userDetails.name);

     this.userNameEmitter.emit(this.userDetails.name);

    var response= this.UserRegisterService.saveUser(this.userDetails)
    response.subscribe(response=>{
      console.log("From Subscriber of observable"+JSON.stringify(response))

    },error  => {
      console.log(" saved error "+JSON.stringify(error));
    });
    console.log("registration is inprogress"+JSON.stringify(this.userDetails));
  }
  }

