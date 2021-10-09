import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../_models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  baseUrl='https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.baseUrl);
    
  }

}
