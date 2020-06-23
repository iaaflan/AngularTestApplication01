import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  baseURL: string = `https://jsonplaceholder.typicode.com/`;
  constructor(private http: HttpClient) {}
  getAlbums() {
    return this.http.get(this.baseURL+'albums');
  }
  getPhotos(albumId) {
    return this.http.get(this.baseURL+`photos?albumId=${albumId}`);
  }

}
