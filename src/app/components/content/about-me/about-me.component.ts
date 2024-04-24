import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  viewsServices = inject(ViewsService)

  ngOnInit(): void {
    this.viewsServices.lenguaje();
  }

}
