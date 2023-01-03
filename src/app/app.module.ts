import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import MovieService from 'src/Services/MovieService.service';
import ImagesService from 'src/Services/Images.service';
import { MoviesListComponent } from '../components/movies-list/movies-list.component';
import { DiscoverPageComponent } from '../Pages/discover-page/discover-page.component';
import DiscoverList from 'src/Services/DiscoverList.service';
import GenresService from 'src/Services/GenresService.service';
import { DiscoverGenrePageComponent } from '../Pages/discover-genre-page/discover-genre-page.component';
import { MoviePageComponent } from '../Pages/movie-page/movie-page.component';
import { MovieGaleryComponent } from '../components/movie-galery/movie-galery.component';
import { ReviewItemComponent } from '../components/review-item/review-item.component';
import { ReviewsListComponent } from '../components/reviews-list/reviews-list.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchMovieComponent } from '../components/search-movie/search-movie.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsPageComponent } from '../Pages/search-results-page/search-results-page.component';
import { GenresListComponent } from '../components/genres-list/genres-list.component';
import { MovieOverviewComponent } from '../components/movie-overview/movie-overview.component';
import { MoviesGridComponent } from '../components/movies-grid/movies-grid.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MovieTabsComponent } from '../components/movie-tabs/movie-tabs.component';




@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesListComponent,
    DiscoverPageComponent,
    DiscoverGenrePageComponent,
    MoviePageComponent,
    MovieGaleryComponent,
    ReviewItemComponent,
    ReviewsListComponent,
    HeaderComponent,
    SearchMovieComponent,
    SearchResultsPageComponent,
    GenresListComponent,
    MovieOverviewComponent,
    MoviesGridComponent,
    FooterComponent,
    MovieTabsComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [MovieService, ImagesService, DiscoverList,GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
