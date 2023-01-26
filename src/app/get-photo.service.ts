import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashResponse } from './unsplash-response'


@Injectable({
  providedIn: 'root'
})
export class GetPhotoService {

  constructor(private http: HttpClient) { }
  

  //Search Foto
  getPhoto(term: string, numOfPic: string){
    return this.http.get<UnsplashResponse>(`https://api.unsplash.com/search/photos?query=${term}&per_page=${numOfPic}`, {
      headers:{
          Authorization: 'Client-ID DTg2SvwJ9H4t-ABFJXaqkyiMQfe2IdHA6Jsn0J95pdc'
        }
    })
  }

}
