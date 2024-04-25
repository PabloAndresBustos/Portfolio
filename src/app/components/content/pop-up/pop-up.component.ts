import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ViewsService } from 'app/services/views.service';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit{

  viewsService = inject(ViewsService)

  ngOnInit(): void {
    this.viewsService.lenguaje()
  }
}
