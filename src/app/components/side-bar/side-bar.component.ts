import { Component, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  /* Visibildada del SideBar */
  menu:boolean = false;

  hideShowMenu(){
    this.menu = !this.menu;
  }

  public showLanding = inject(ViewsService);

  hideShow() {
    this.showLanding.hideShowLanding.update((value) => value = false);
  }

  showHome() {
    this.showLanding.hideShowLanding.update((value) => value = true);
  }
}
