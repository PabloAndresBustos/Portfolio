import { Component, OnInit, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content/content.component';
import { ViewsService } from './services/views.service';
import { LanguajeComponent } from './components/languaje/languaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, ContentComponent, LanguajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public showLanding = inject(ViewsService);

  /* Barra lateral */
  sideBarShow:boolean = false;
  sideBarChange = viewChild.required(ContentComponent);

  ngOnInit(): void {
    window.addEventListener('popstate', ()=>{
      this.showLanding.hideShowLanding.update(value =>  value = !value)
    })
  }
  
}
