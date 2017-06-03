import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:buscar', component: SearchComponent },
    { path: 'movie/:pagina/:id', component: MovieComponent },
    { path: '**', redirectTo: 'home' }
];

export const ROUTER = RouterModule.forRoot(ROUTERS);