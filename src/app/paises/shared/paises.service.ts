import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private readonly uri: string;

  constructor(private http: HttpClient) { 
    this.uri = "https://restcountries.com/v3.1/region/Americas";
  }

  traerPaises(): Observable<any> {
    return this.http.get(this.uri);
  }
}
