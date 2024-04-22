import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [MatIconModule, CardsDetailsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent implements OnInit{


  proyectList:any;

  nameButton:string = "Repositorio"

  http = inject(HttpClient) 

  getProyectos(){
    this.http.get<any>('/assets/interface/proyects/proyects.JSON')
    .subscribe(data => {this.proyectList = data});
  }

  ngOnInit(): void {
    this.getProyectos();
  }

}
