import { Component, OnInit, inject } from '@angular/core';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceDetailsComponent, HttpClientModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{

  text:any;

  http = inject(HttpClient)

  languaje:boolean = true

  getExperience():void {
    this.http.get<any>('/assets/text/experience/experience.JSON')
    .pipe(tap(data => console.log(data)))
    .subscribe(data => {
                        this.text = data;
                        console.log(this.text)
                      })
  }

  ngOnInit(): void {
   this.getExperience();
  }
}
