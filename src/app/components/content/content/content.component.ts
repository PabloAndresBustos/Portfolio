import { 
  Component, 
  model, 
  HostListener, 
  ElementRef, 
  ViewChild, 
  AfterViewInit
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon'
import { AboutMeComponent } from '../about-me/about-me.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FadeInOutDirective } from 'app/components/directives/fadeIn/fade-in-out.directive';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatIconModule, AboutMeComponent, PopUpComponent, FadeInOutDirective],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements AfterViewInit {

  popUpShow = model<boolean>(false);

  showPopUp(){
    this.popUpShow.update((value) => value = !value)
    
  }

  /* Dispocsicion del texto al rededor de la fotografia */
  @ViewChild('text') text!: ElementRef;
  skillText: string = '';
  letterArray: string[] = [];

  /* Animando el nombre y fotorgrafia */
  @ViewChild('name') name!: ElementRef;
  @ViewChild('circles') circles!: ElementRef;


  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event) {
    const scroll = window.scrollY;
    const opacity = 0.3 - scrollY / window.innerHeight;
    this.name.nativeElement.style.transform = `translateX(${scroll * 1.5}px)`;
    
    if (scroll == 0) {
      this.name.nativeElement.style.opacity = 1;
      this.circles.nativeElement.style.opacity = 1;
    } else {
      this.name.nativeElement.style.opacity = opacity.toString();
      this.circles.nativeElement.style.opacity = opacity.toString();
    }
  }

  ngAfterViewInit(): void {
    this.skillText = this.text.nativeElement.innerHTML;

    this.letterArray = this.skillText.split('');

    this.text.nativeElement.textContent = '';

    const radius = 150;

    for (let i = 0; i < this.letterArray.length; i++) {
      const span = document.createElement('span');
      span.textContent = this.letterArray[i];
      span.classList.add('letter');

      /* Calcular posición de los span alrededor del círculo */
      const angle = (Math.PI / (this.letterArray.length - 1)) * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      this.text.nativeElement.appendChild(span);

      /* Aplicar estilos de posición y transformación */
      span.style.transform = `rotate(${i + 10}deg)`;
      span.style.position = 'absolute';
      span.style.width = '30px';
      span.style.height = '45px';
      span.style.transformOrigin = 'center center';
      span.style.textAlign = 'center';
      span.style.left = `calc(27.5% + ${x}px)`;
      span.style.top = `calc(47% + ${y}px)`;
      span.style.transform = `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg)`;
    }
  }
}
