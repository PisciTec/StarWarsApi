import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  title = "Filmes";
  value= "Jedi";
  filmes: any;

  constructor(private http: HttpClient, private Swapi: ApiService) {}

  getFilmes(search:string){
    this.Swapi.getFilmes(this.value).subscribe( res => this.filmes = res.results);
    console.log(search);
  }

  ngOnInit() {
    this.getFilmes("");
  }
  displayedColumns: string[] = ['title', 'director', 'producer','episode_id', 'url'];
}
