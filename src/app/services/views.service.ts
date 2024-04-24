import { HttpClient } from '@angular/common/http';
import { Injectable, inject, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  http = inject(HttpClient)
  
  hideShowLanding = model<boolean>(true);

  languajeSelect = model<boolean>(true);

  interface:any;

  lenguaje(){
    this.http.get<any>('/assets/interface/languaje/interface.JSON')
    .subscribe(data => {
      if(this.languajeSelect()){
        this.interface = data.idiomas.espaniol
      }else{
        this.interface = data.idiomas.ingles
      }
    })
  }

}
