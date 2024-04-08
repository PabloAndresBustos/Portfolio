import { bootstrapApplication } from '@angular/platform-browser';
import{provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
