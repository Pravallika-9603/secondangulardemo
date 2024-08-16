import { Component } from '@angular/core';
import { Restaurent } from '../model/Restaurent';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrl: './restaurent.component.css'
})
export class RestaurentComponent {
  restaurent=new Restaurent('',new Address('','','','',''),new Rating(0,''));
  addRestaurent():void{
    console.log("a")
  }
}
