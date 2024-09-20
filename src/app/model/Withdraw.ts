export class Withdraw{
    cardno:string;
    pin:string;
   amount:number;
    constructor(cardno:string,pin:string,amount:number){
        this.cardno=cardno;
        this.pin=pin;
        this.amount=amount;
    }
}