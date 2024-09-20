import { Component } from '@angular/core';

import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {

  constructor(private loanserachchservice:LoansearchService){

  }

  accountnumber:string='';
  searchAccount(){
    console.log("loan component"+JSON.stringify(this.accountnumber));
    this.loanserachchservice.searchAccount(this.accountnumber).subscribe(
    data=>{
      console.log(JSON.stringify(data));
    }
  )

  }
}

