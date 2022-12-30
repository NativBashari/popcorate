import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverGenrePageComponent } from 'src/Pages/discover-genre-page/discover-genre-page.component';
import { DiscoverPageComponent } from 'src/Pages/discover-page/discover-page.component';
import { MoviePageComponent } from 'src/Pages/movie-page/movie-page.component';
import { SearchResultsPageComponent } from 'src/Pages/search-results-page/search-results-page.component';

const routes: Routes = [
  {path: '' , component: DiscoverPageComponent},
  {path: 'genre/:id', component: DiscoverGenrePageComponent},
  {path: 'movie/:id', component: MoviePageComponent},
  {path: 'searchResults/:query', component: SearchResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
