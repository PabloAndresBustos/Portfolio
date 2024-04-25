import { 
  Component, 
  model, 
  HostListener, 
  ElementRef, 
  ViewChild, 
  AfterViewInit,
  inject,
  OnInit,
  NgModule
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon'
import { AboutMeComponent } from '../about-me/about-me.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FadeInOutDirective } from 'app/components/directives/fadeIn/fade-in-out.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatIconModule, 
    AboutMeComponent, 
    PopUpComponent, 
    FadeInOutDirective,
    FontAwesomeModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements AfterViewInit, OnInit {

  viewsServices = inject(ViewsService)

/*   changeLanguje(){
    this.viewsServices.languajeSelect.update( value => value = !value);
    this.viewsServices.lenguaje()
  } */

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
  @ViewChild('linkedin') linkedin!: ElementRef;
  @ViewChild('github') github!: ElementRef;


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

  /* Redireccion a GitHub y LinkedIn */
  linkedInDir:string = 'https://www.linkedin.com/in/pipablo/';
  githubDir:string = 'https://github.com/PabloAndresBustos';

  @HostListener('click', ['$event.target']) onClick(target: any): void{

    if(this.linkedin.nativeElement.contains(target)){
      window.open(this.linkedInDir, '_blank');
    }

    if(this.github.nativeElement.contains(target)){
      window.open(this.githubDir, '_blank');
    }
  }

  /* Animacion de las letras */
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

  ngOnInit(): void {
    this.viewsServices.lenguaje()
  }
}
