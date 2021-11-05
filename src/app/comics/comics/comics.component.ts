import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics$: any;

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comicsService.all().subscribe(comics => {
      this.comics$ = comics;
      this.comics$ = this.comics$.data.results
      console.log(this.comics$);
    })
  }

}
