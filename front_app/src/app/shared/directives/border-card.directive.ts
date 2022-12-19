import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[borderCard]',
})
export class BorderCardDirective {
  private defaultColor: string = '#7CA3F6';
  private defaultHeight: number = 200;
  private defaultWidth: number = 350;

  constructor(private element: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setWidth(this.defaultWidth);
    this.setBorder(this.defaultColor);
  }

  @Input('borderCard') borderColor!: string;

  private setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }
  private setHeight(height: number) {
    this.element.nativeElement.style.height = `${height} px`;
  }
  private setWidth(width: number) {
    this.element.nativeElement.style.width = `${width} px`;
  }
}
