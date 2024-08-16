import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  @Input()
  
  inputData:string='';

  maskData: string='******';

  constructor() { }

  @HostListener("mouseenter")
  mouseEnter(){
    console.log("Enter")
  }


  @HostListener("mouseleave")
  mouseOut(){
    console.log("leave")
  }
  

}
