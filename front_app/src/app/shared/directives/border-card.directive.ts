import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[borderCard]',
})
export class BorderCardDirective {
  private defaultColor: string = '#7CA3F6';
  private defaultHeight: number = 20;
  private defaultLength: number = 20;

  constructor(private element: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setLength(this.defaultLength);
    this.setBorder(this.defaultColor);
  }

  @Input('borderCard') borderColor!: string;

  private setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }
  private setHeight(height: number) {
    this.element.nativeElement.style.height = `${height} em`;
  }
  private setLength(length: number) {
    this.element.nativeElement.style.length = `${length} em`;
  }
}
