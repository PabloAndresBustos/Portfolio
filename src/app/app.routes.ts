import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'experience', loadComponent: () =>
            import('./components/content/features/experience/experience.component')
                .then(ce => ce.ExperienceComponent)
    },
    {
        path: 'studies', loadComponent: () =>
            import('./components/content/features/studies/studies.component')
                .then(cs => cs.StudiesComponent)
    },
    {
        path: 'contact', loadComponent: () =>
            import('./components/content/features/contact/contact.component')
                .then(cc => cc.ContactComponent)
    }

    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    /* { path: '**', redirectTo: '/', pathMatch: 'full' }, */
];
