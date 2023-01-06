import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class GenresService{
    constructor(private httpClient: HttpClient){

    }

    getGenresList(){
        return this.httpClient.get(`${environment.baseApiUrl}/genre/movie/list?api_key=${environment.APIKey}&language=en-US`)
    }
    getMoviesFromGerne(id: number, page:number){
        return this.httpClient.get(`${environment.baseApiUrl}/discover/movie?api_key=${environment.APIKey}&language=en-US&sort_by=popularity.desc&with_genres=${id}&with_watch_monetization_types=flatrate&page=${page}`);
    }

}
export default GenresService;
