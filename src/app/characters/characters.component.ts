import { Component, OnInit } from '@angular/core';
import { Character } from './model/character.model';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService],
})
export class CharactersComponent implements OnInit {
  selectedCharacter: Character;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.characterSelected.subscribe(
      (character: Character) => (this.selectedCharacter = character)
    );
  }
}
