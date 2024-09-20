export class Atm{
    cardno:string;
    pin:string;
    cvv:string;
    expiry:string;
    accountNumber:string;
    constructor(cardno:string,pin:string,cvv:string,expiry:string,accountNumber:string){
        this.cardno=cardno;
        this.pin=pin;
        this.cvv=cvv;
        this.expiry=expiry;
        this.accountNumber=accountNumber;
    }
} 