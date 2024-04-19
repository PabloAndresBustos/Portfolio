import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [MatIconModule, CardsDetailsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {

  proyectList:any;

  nameButton:string = "Repositorio"

}
