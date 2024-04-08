import { Injectable, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  hideShowLanding = model<boolean>(true);

}
