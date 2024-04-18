import { Component, Input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WidthExpandDirective } from 'app/components/directives/expand/width-expand.directive';

@Component({
  selector: 'app-experience-details',
  standalone: true,
  imports: [MatIconModule, WidthExpandDirective],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.scss'
})
export class ExperienceDetailsComponent {

  @Input() empresa:string = '';
  @Input() logo:string = '';
  @Input() tareasRealizadas:string = '';
  @Input() logorsConseguidos:string = '';
  @Input() startDate:string = '';
  @Input() endDate:string = '';
}
