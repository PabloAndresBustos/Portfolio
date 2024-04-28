import { AfterViewInit, 
         Component,
         ElementRef,
         HostListener,
         OnInit,
         QueryList,
         ViewChildren,
         inject,
         model } from '@angular/core';
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
export class SideBarComponent implements AfterViewInit, OnInit {

  viewsServices = inject(ViewsService)

  @ViewChildren('item') items!: QueryList<ElementRef>;

  /* Visibildada del SideBar */
  menu = model<boolean>(true);
  width!:number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowSize()
  }

  @HostListener('click', ['$event'])
  itemClick(event: any){
    if(this.items.toArray()
      .some(item => event.target === item.nativeElement) && this.width <= 912){
      this.menu.update(value => value = false)
    }
  }

  windowSize(){
    this.width = window.innerWidth;
    if (this.width >= 912) {
      this.menu.update(value => value = true)
    }else{
      this.menu.update(value => value = false)
    }
  }

  hideShowMenu() {
    this.menu.update(value => value = !value);
  }

  hideShow() {
    this.viewsServices.hideShowLanding.update((value) => value = !value);
  }

  showHome() {
    this.viewsServices.hideShowLanding.update((value) => value = true);
  }

  ngOnInit(): void {
    this.viewsServices.lenguaje()
  }

  ngAfterViewInit(): void {
    this.windowSize();
  }
}
