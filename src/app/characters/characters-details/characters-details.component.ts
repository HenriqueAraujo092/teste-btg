import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterSelected: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.characters().subscribe(characterSelected => {
      this.characterSelected = characterSelected;
      this.characterSelected = this.characterSelected.data.results
      console.log(this.characterSelected);
    })
  }

}
