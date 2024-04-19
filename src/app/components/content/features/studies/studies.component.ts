import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [MatIconModule, CardsDetailsComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent implements OnInit {

  studiesList:any;

  http = inject(HttpClient);

  getStudies():void {
    this.http.get<any>('/assets/interface/studies/studies.JSON')
    .subscribe( data => {
      this.studiesList = data
    })
  }

  ngOnInit(): void {
    this.getStudies();
  }

}
