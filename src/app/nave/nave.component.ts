import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  value= "";
  naves: any;
  totalDeNaves= 0;
  pageSize = 10;
  pageIndex = 0;
  pageEvent!: PageEvent;

  constructor(private http: HttpClient, private Swapi: ApiService) {}


  handlePageEvent(e: PageEvent) {

    this.getNaves(this.value, e.pageIndex);
    this.pageEvent = e;

  }

  getNaves(search:string, page:number){
    this.Swapi.getNaves(this.value, page+1).subscribe( res => {
      this.naves = res.results
      this.totalDeNaves = res.count;
      this.pageIndex =page;
    });
    console.log(this.naves);
  }



  ngOnInit() {
    this.getNaves("", 0);
  }
  displayedColumns: string[] = ['name', 'model', 'manufacturer','crew', 'starship_class'];
}
