import { Component } from '@angular/core';
import { Atm } from '../model/Atm';
import { AtmService } from '../atm.service';

@Component({
  selector: 'app-create-atm',
  templateUrl: './create-atm.component.html',
  styleUrl: './create-atm.component.css'
})
export class CreateAtmComponent {

  atm= new Atm('','','','','');


  constructor(private atmService:AtmService){
  
  }
  createAtm(){
    console.log(JSON.stringify(this.atm));
    this.atmService.createAtm(this.atm).subscribe(
      data=>{
        console.log(JSON.stringify(data))
    
      })
  } 
}
