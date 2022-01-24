import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css'],
})
export class CharacterItemComponent implements OnInit {
  @Input() character: Character;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {}

  onSelected() {
    this.characterService.characterSelected.emit(this.character);
  }
}
