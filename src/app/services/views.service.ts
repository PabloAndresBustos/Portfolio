import { Injectable, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor() { }

  hideShowLanding = model<boolean>(true);

}
