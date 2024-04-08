import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  standalone: true,
  imports: [],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.scss'
})
export class ExperienceDetailsComponent {

  @Input() empresa:string = '';
  @Input() logo:string = '';
  @Input() tareasRealizadas:string = '';
  @Input() logorsConseguidos:string = '';
}
