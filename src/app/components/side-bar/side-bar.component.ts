import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewsService } from 'app/services/views.service';
import { WidthExpandDirective } from '../directives/expand/width-expand.directive';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterOutlet, WidthExpandDirective],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {

  @ViewChild('welcome') welcome!: ElementRef;
  @ViewChildren('item') items!: QueryList<ElementRef>;

  /* Visibildada del SideBar */
  menu = model<boolean>(true);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    console.log(width)
    if (width >= 912) {
      this.menu.set(true)
    }

    if (width <= 1364) {
      this.menu.set(false)
    }
  }

  @HostListener('click', ['$event'])
  clickItem(event: any) {
    if(event.target === this.welcome.nativeElement ||
      this.items.toArray().some(item => event.target === item.nativeElement)
    ){
      this.menu.update(value => value = !value)
    }
  }

  viewsServices = inject(ViewsService)


  hideShowMenu() {
    this.menu.update(value => value = !value);
  }

  public showLanding = inject(ViewsService);

  hideShow() {
    this.showLanding.hideShowLanding.update((value) => value = false);
  }

  showHome() {
    this.showLanding.hideShowLanding.update((value) => value = true);
  }

  ngOnInit(): void {
    this.viewsServices.lenguaje()
  }
}
