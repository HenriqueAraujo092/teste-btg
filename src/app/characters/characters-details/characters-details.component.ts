import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterSelected: any;
  id: any = '';

  constructor(private charactersService: CharactersService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.charactersService.characters(this.id).subscribe(characterSelected => {
      this.characterSelected = characterSelected;
      this.characterSelected = this.characterSelected.data.results
      console.log(this.characterSelected);
    })
  }

}
