import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()

export class DiscoverList{
    currentYear: number ;
    constructor(private HttpClient: HttpClient){
        this.currentYear = new Date().getFullYear();
    }

    getMostPopular(){
  
        return this.HttpClient.get(`${environment.baseApiUrl}/discover/movie?sort_by=popularity.desc&api_key=${environment.APIKey}`);
    }
  //  https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=40f1e733a4d35be7b5b4a395b82ab18e
    getHighestRated(){
        return this.HttpClient.get(`${environment.baseApiUrl}/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${environment.APIKey}`);
    }
    getKidsMovies(){
        return this.HttpClient.get(`${environment.baseApiUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${environment.APIKey}`);
    }
    getMoviesReleasedThisYear(){
        return this.HttpClient.get(`${environment.baseApiUrl}/discover/movie?api_key=${environment.APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.currentYear}&with_watch_monetization_types=flatrate`)
    }
}
export default DiscoverList;