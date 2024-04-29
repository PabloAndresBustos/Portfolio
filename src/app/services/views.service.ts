import { HttpClient } from '@angular/common/http';
import { HostListener, Injectable, inject, model } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  http = inject(HttpClient)

  redirect = inject(Router)

  router = model<boolean>(true);
  
  hideShowLanding = model<boolean>(true);

  languajeSelect = model<boolean>(true);

  interface:any;

  @HostListener('window:beforeunload', ['$event'])
  resetViews(){
    this.hideShowLanding.set(false)
    this.router.set(true)
  }

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
