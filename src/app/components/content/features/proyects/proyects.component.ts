import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { HttpClient } from '@angular/common/http';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [MatIconModule, CardsDetailsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent implements OnInit{

  viewsServices = inject(ViewsService)

  ngOnInit(): void {
    this.viewsServices.lenguaje()
    this.viewsServices.reload()
  }

}
