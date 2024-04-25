import { Component, inject } from '@angular/core';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-languaje',
  standalone: true,
  imports: [],
  templateUrl: './languaje.component.html',
  styleUrl: './languaje.component.scss'
})
export class LanguajeComponent {

  viewsServices = inject(ViewsService)

  changeLanguje(){
    this.viewsServices.languajeSelect.update( value => value = !value);
    this.viewsServices.lenguaje()
  }

}
