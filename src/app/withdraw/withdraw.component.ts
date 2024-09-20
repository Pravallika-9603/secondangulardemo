import { Component } from '@angular/core';
import { WithdrawServiceService } from '../withdraw-service.service';
import { Withdraw } from '../model/Withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  withdraw= new Withdraw('','',0);
  constructor(private withdrawServiceService:WithdrawServiceService){
  
  }
  withdrawAmount(){
    console.log(JSON.stringify(this.withdraw));
    this.withdrawServiceService.withdrawAmount(this.withdraw).subscribe(
      data=>{
        console.log(JSON.stringify(data))
      })
  }
}
