import { Component, OnInit } from '@angular/core';
import { Resultados } from 'src/app/model/resultados';
import { TablaResultado } from 'src/app/model/tablaResultado';
import { ResultadosService } from 'src/app/servicios/resultados.service';
import { AppComponent } from '../app.component';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{

  resultados: Resultados[];
  tablaResultado = new Array<TablaResultado>();

  constructor(
    private app: AppComponent,
    private resultadosService: ResultadosService){
      Chart.register(...registerables);
  }

  ngOnInit(){
    this.resultadosService.findAll().subscribe(data => {
      this.resultados = data;

      for(var i =0; i < this.app.listaGeneros.length ; i++){
        var tabla = new TablaResultado();
        tabla.cantidad = 0;
        tabla.genero = this.app.listaGeneros[i].nombre;
        this.tablaResultado.push(tabla);
      }

      this.buscarResultados();

      var chr = document.getElementById("myChart") as HTMLCanvasElement;
      new Chart(chr, {
        type: 'bar',
        data: {
          labels: this.tablaResultado.map(row => row.genero),
          datasets:[
            {
              backgroundColor: "black",
              label: 'Resultados Encuesta',
              data: this.tablaResultado.map(row => row.cantidad)
            }
          ]
        }
      }
      )

    })



  }

  buscarResultados(){
    for(var i =0; i < this.resultados.length ; i++){
      for(var j=0; j < this.tablaResultado.length; j++){
        if(this.resultados[i].genero.match(this.tablaResultado[j].genero)){
          this.tablaResultado[j].cantidad++;
          break;
        }
      }
    }

    this.tablaResultado.sort((a, b) => b.cantidad - a.cantidad);
  }


}
