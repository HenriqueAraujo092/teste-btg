import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../model/characters';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters$: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.all().subscribe(characters => {
      this.characters$ = characters;
      this.characters$ = this.characters$.data.results
      console.log(this.characters$);
    })
  }

}
