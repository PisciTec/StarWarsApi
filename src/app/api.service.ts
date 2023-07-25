import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RetornoAPI<T> {
  count:    number;
  next:     null;
  previous: null;
  results:  T[];
}

export interface Filme {
  title:         string;
  episode_id:    number;
  opening_crawl: string;
  director:      string;
  producer:      string;
  release_date:  Date;
  characters:    string[];
  planets:       string[];
  starships:     string[];
  vehicles:      string[];
  species:       string[];
  created:       Date;
  edited:        Date;
  url:           string;
}

export interface Nave {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 any[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url: string = 'https://swapi.dev/api';
  constructor(private http: HttpClient) {}

  getFilmes(search:string): Observable<RetornoAPI<Filme>> {
    return this.http.get<RetornoAPI<Filme>>(search != "" ?this.url.concat(`/films/?search=${search}`):this.url)
  }

  getNaves(search:string, page:Number): Observable<RetornoAPI<Nave>> {
    return this.http.get<RetornoAPI<Nave>>(this.url+ "/starships/?page="+ page)
  }
}
