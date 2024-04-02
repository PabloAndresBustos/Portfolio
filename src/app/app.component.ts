import { Component, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content/content.component';
import { ViewsService } from './services/views.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public showLanding = inject(ViewsService);

  /* Barra lateral */
  sideBarShow:boolean = false;
  sideBarChange = viewChild.required(ContentComponent);
  
}
