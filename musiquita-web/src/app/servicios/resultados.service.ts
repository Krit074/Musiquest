import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultados } from '../model/resultados';
import { environment } from 'src/environments/environment';

@Injectable()
export class ResultadosService {

  private resultadosUrl: string;

  constructor(private http: HttpClient) {
    this.resultadosUrl = environment.urlBase + "resultados";
  }

  public findAll(): Observable<Resultados[]>{
    return this.http.get<Resultados[]>(this.resultadosUrl);
  }

  public save(resultados: Resultados){
    return this.http.post<Resultados>(this.resultadosUrl, resultados);
  }
}
