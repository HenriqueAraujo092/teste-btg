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

  constructor(private charactersService: CharactersService) {
    // this.characters = this.charactersService.list();
    this.characters$ = this.charactersService.list().subscribe(characters => this.characters$ = characters);
    console.log('aqui >>>')
    console.log(this.characters$)
  }

  ngOnInit() {
  }

}
