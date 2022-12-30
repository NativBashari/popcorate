import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()

export class MovieService{

    constructor(private httpClient: HttpClient){

    }
    getById(id: number){
        let queryParams= new HttpParams();
        queryParams = queryParams.append("api_key", environment.APIKey);
        queryParams.append('language', 'en-US');
        return this.httpClient.get(`${environment.baseApiUrl}/movie/${id}?${queryParams}`)
    }
    getMovieImages(id: number){
        return this.httpClient.get(`${environment.baseApiUrl}/movie/${id}/images?api_key=${environment.APIKey}`); 
    }
    getMovieReviews(id: number){
        return this.httpClient.get(`${environment.baseApiUrl}/movie/${id}/reviews?api_key=${environment.APIKey}`)
    }
    searchMovies(query:string){
        return this.httpClient.get(`${environment.baseApiUrl}/search/movie?api_key=${environment.APIKey}&language=en-US&query=${query}`);
    }
}
export default MovieService;