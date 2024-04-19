import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [MatIconModule, RouterLink],
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
  @Input() buttonName:string = "";

}
