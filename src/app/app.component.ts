import { Component } from '@angular/core';
import { register } from 'module';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  fullNameFromChild:String=' ';
  
  title = 'secondangulardemo';
  
  constructor(private router:Router,private userregisterService:UserregisterService){

  
    this.userregisterService.userNameBehaviour.subscribe(
      data=>{
        this.fullNameFromChild=data;
        console.log("from appcomponenet bsubs")
      }
    )
  }
submit(){
  console.log("from regiter")
  

}
login(){
  console.log("from login")
 
 
}
forget(){
  console.log("from forgot")
  this.router.navigate(['/login'])
}
}
