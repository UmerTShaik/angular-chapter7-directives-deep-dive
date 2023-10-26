import { Directive , TemplateRef, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
//Creating cusotm structural directive
  @Input() set appUnless(condition: boolean){//still property is set whenever property changes outside
      if(!condition){
        this.vcRef.createEmbeddedView(this.templateRef) // show embed in dom when true
      }else{
        this.vcRef.clear();//Remove template from dom when false
      }
  }

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { //take teamplate and then to show in vcRef

  }

}
