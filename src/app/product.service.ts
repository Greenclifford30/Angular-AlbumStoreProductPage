import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _ablumUrl = '../assets/album.json';
  response: any;
  constructor(private _http: HttpClient) {}

  getAlbum(id: number): Observable<any> {

     return this._http.get<any>(this._ablumUrl).pipe(
       map((res: Response) => {
         return res;
       }
       ));
  }
}
