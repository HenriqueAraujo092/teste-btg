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
  comics: any;
  series: any;
  stories: any;
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
      this.comics = this.characterSelected[0].comics.items;
      this.series = this.characterSelected[0].series.items;
      this.stories = this.characterSelected[0].stories.items;
      console.log(this.characterSelected);
      console.log(this.comics);
    })
  }

}
