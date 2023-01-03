import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroMusical } from 'src/app/model/generoMusical';
import { Resultados } from 'src/app/model/resultados';
import { ResultadosService } from 'src/app/servicios/resultados.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {

  resultado: Resultados;
  resultados: Resultados[];
  listaGeneros: GeneroMusical[];

  hayErrorEmail = false;
  hayErrorGenero = false;

  constructor(
    private app: AppComponent,
    private route: ActivatedRoute,
    private router: Router,
    private resultadosService: ResultadosService
  ) {
    this.resultado = new Resultados();
  }


  ngOnInit(){
    this.listaGeneros = this.app.listaGeneros;
  }

  onSubmit(){
    this.validaciones();
    if(!this.hayErrorEmail && !this.hayErrorGenero){
      this.resultadosService.save(this.resultado).subscribe(result => this.irAResultados());
    }
  }

  irAResultados(){
    this.resultadosService.findAll().subscribe(data => {
      this.resultados = data;
    })
    this.router.navigate(['/resultados']);
  }

  validaciones(){
    if(this.esVacio(this.resultado.email)){
      this.hayErrorEmail = true;
    } else {
      this.hayErrorEmail = false;
    }
    if(this.esVacio(this.resultado.genero)){
      this.hayErrorGenero = true;
    } else {
      this.hayErrorGenero = false;
    }
  }


  esVacio(valor: any){
    return valor == null || valor == undefined || valor.toString().trim() == "" || valor.toString().trim().length == 0
  }
}
