import {Directive, Input, ElementRef} from '@angular/core';
declare let $;

/**
 * @Directive EnsureAuthorizeComponent
 * @description component to manage the role
 * @tickets PO-597
 */
@Directive({
  selector: '[ensure-authorized]',
})
export class EnsureAuthorizeComponent {
  @Input() accessToken: string;
  constructor(private elementRef: ElementRef) {}

  /**
   * @method ngOnInit
   * @description function to initialize the data and set the header
   * @tickets: PO-597
   */
  ngOnInit(){
    let allTokens = JSON.parse(localStorage.getItem('customerInfo')).Tokens;
    if (allTokens.indexOf(this.accessToken) === -1) {
      this.elementRef.nativeElement.remove();
    }
  }
}
