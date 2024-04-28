import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { HttpClient } from '@angular/common/http';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [MatIconModule, CardsDetailsComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent implements OnInit {

  viewsServices = inject(ViewsService)

  ngOnInit(): void {
    this.viewsServices.lenguaje()
    this.viewsServices.reload()
  }

}
