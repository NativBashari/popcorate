import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ImagesService{

    constructor(private httpClient: HttpClient){

    }
    getById(id:number){
        let queryParams= new HttpParams();
        queryParams = queryParams.append("api_key", environment.APIKey);
        return this.httpClient.get(`${environment.baseApiUrl}/movie/${id}/images?${queryParams}`);
    }

}
export default ImagesService; 