import { Component } from '@angular/core';
import { register } from 'module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondangulardemo';
  
submit(){
  console.log("from regiter")

}
login(){
  console.log("from login")
}
forget(){
  console.log("from forgot")
}
}
