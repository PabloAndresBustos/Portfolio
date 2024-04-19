import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FadeInOutDirective } from 'app/components/directives/fadeIn/fade-in-out.directive';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CardsDetailsComponent, 
    HttpClientModule, 
    FadeInOutDirective, 
    MatIconModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{

  experienceList:any;

  http = inject(HttpClient)

  languaje:boolean = true

  getExperience():void {
    this.http.get<any>('/assets/interface/experience/experience.JSON')
    .subscribe(data => {
                        this.experienceList = data;
                      })
  }

  ngOnInit(): void {
   this.getExperience();
  }
}
