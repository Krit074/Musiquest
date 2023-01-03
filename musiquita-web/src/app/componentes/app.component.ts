import { Component } from '@angular/core';
import { GeneroMusicalService } from '../servicios/generoMusical.service';
import { GeneroMusical } from '../model/generoMusical';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  listaGeneros: GeneroMusical[];

  constructor(
    private generoMusicalService: GeneroMusicalService) {
    this.title = 'Musiquest';
    const gif = document.getElementById('loadingScreen');

    if (gif != null) {
      gif.setAttribute('hidden', 'true');
    }
  }

  ngOnInit(){
    this.generoMusicalService.findAll().subscribe(data => {
      this.listaGeneros = data;
    })
  }
}
