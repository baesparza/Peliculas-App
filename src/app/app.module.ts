import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Router
import { ROUTER } from './app.router';

// Services
import { TmdbService } from './services/tmdb.service';

// Pipes
import { BackdropPathPipe } from './pipes/backdrop-path.pipe';
import { PosterPathPipe } from './pipes/poster-path.pipe';

// Directives
import { ActiveTagDirective } from './directives/active-tag.directive';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BackdropPathPipe,
    PosterPathPipe,
    ActiveTagDirective,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ROUTER,
    ReactiveFormsModule
  ],
  providers: [
    TmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
