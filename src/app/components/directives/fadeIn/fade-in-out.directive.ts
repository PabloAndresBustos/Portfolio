import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, OnInit, inject} from '@angular/core';

@Directive({
  selector: '[fadeInOut]',
  standalone: true
})
export class FadeInOutDirective implements OnInit{

  elementRef: ElementRef = inject(ElementRef);
  builder:  AnimationBuilder = inject(AnimationBuilder);
  
  private player = this.builder.build([
    style({opacity: 0}),
    animate('0.5s ease-in', style({opacity:1}))
  ]).create(this.elementRef.nativeElement);

  ngOnInit(): void {
    
    this.player.play()

  }

  /* 
      elementRef: ElementRef = inject(ElementRef);
  builder:  AnimationBuilder = inject(AnimationBuilder);
  
  private player = this.builder.build([
    trigger('opanClose', [
      state('open', style({
        opacity: 1
      })),
      state('close', style({
        opacity: 0
      })),
      transition('close => open', [animate('0.5s')]),
      transition('open => close', [animate('0.5s')]),
    ])
  ]).create(this.elementRef.nativeElement);

  private openElement(){
    this.player.play();
  }

  private closeElement(){
    this.player.reset();
  }

  @HostListener('click') open(){
    this.openElement()
  }

  @HostListener('click') close(){
    this.closeElement()
  }
  */

}
