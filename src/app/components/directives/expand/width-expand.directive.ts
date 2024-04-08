import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[Expand]',
  standalone: true
})
export class WidthExpandDirective implements OnInit{

  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder.build([
    style({ width: '0%'}),
    animate('0.3s ease-in', style({with: '80%'}))
  ]).create(this.elementRef.nativeElement);

  ngOnInit(): void {
    this.player.play()
  }

}
