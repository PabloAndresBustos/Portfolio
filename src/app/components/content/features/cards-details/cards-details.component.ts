import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.scss'
})
export class CardsDetailsComponent {

  //certificate:boolean = false;

  @Input() logo:string = '';
  @Input() tareasRealizadas:string = '';
  @Input() logorsConseguidos:string = '';
  @Input() startDate:string = '';
  @Input() endDate:string = '';
  @Input() certificate:boolean = false;
  @Input() certificado:string = "";

}
