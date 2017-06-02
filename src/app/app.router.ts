import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:id', component: SearchComponent },
    { path: '**', redirectTo: 'home' }
];

export const ROUTER = RouterModule.forRoot(ROUTERS);