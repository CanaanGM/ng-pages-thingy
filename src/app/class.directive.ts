import { Directive , ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {


  constructor(private element: ElementRef) { 
  }
  
  @Input('appClass') set className(classes: any) {
    for(let key in classes) 
    {
      if(classes[key]) this.element.nativeElement.classList.add(key)
      else this.element.nativeElement.classList.remove(key)
    }
  }
}
