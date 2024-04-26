import { Component, Input, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-cards-details',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.scss'
})
export class CardsDetailsComponent implements OnInit {

  viewsServices = inject(ViewsService)

  @Input() logo:string = '';
  @Input() title:boolean = true;
  @Input() titleText:string = "";
  @Input() tareasRealizadas:string = '';
  @Input() logorsConseguidos:string = '';
  @Input() startDate:string = '';
  @Input() endDate:string = '';
  @Input() certificate:boolean = false;
  @Input() certificado:string = "";
  @Input() dates:boolean = true;
  @Input() download:string = "";
  @Input() buttonName:string = "";
  @Input() pictures:boolean = true;
  @Input() picturesLink:string = "";

  ngOnInit(): void {
    this.viewsServices.lenguaje()
  }
}
