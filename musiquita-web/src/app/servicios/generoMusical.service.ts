import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneroMusical } from '../model/generoMusical';
import { environment } from 'src/environments/environment';

@Injectable()
export class GeneroMusicalService {

  private generoMusicalUrl: string;

  constructor(private http: HttpClient) {
    this.generoMusicalUrl = environment.urlBase + 'encuesta';
  }

  public findAll(): Observable<GeneroMusical[]> {
    return this.http.get<GeneroMusical[]>(this.generoMusicalUrl);
  }

  public save(generoMusical: GeneroMusical){
    return this.http.post<GeneroMusical>(this.generoMusicalUrl, generoMusical);
  }
}
