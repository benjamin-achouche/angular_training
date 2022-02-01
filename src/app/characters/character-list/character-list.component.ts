import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from '../model/character.model';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: Character[];

  charactersChangedSub: Subscription;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
    this.charactersChangedSub = this.characterService.charactersChanged.subscribe((characters: Character[]) => this.characters = characters);
  }

  ngOnDestroy(): void {
    this.charactersChangedSub.unsubscribe();
  }
}
