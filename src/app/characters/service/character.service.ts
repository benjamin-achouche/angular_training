import { EventEmitter, Injectable } from '@angular/core';
import { Bullet } from 'src/app/shared/model/bullet.model';
import { Character } from '../model/character.model';

@Injectable()
export class CharacterService {
  private characters: Character[] = [
    new Character(
      'Leon S. Kennedy',
      'RPD Officer',
      'https://i.pinimg.com/originals/68/a3/fb/68a3fbe5772a70c2fc09855ff768ecd5.jpg',
      [new Bullet('9mm Handgun Ammo', 14), new Bullet('Shotgun Shells', 3)]
    ),
    new Character(
      'Claire Redfield',
      "Chris's Badass Sister",
      'https://i.pinimg.com/236x/a5/28/b0/a528b0204eb7c61b8631f77349b6c442.jpg',
      [
        new Bullet('Large-caliber Handgun Ammo', 9),
        new Bullet('Acid Rounds', 2),
        new Bullet('9mm Handgun Ammo', 11),
      ]
    ),
  ];

  getCharacter(id: number) {
    return this.characters[id];
  }

  getCharacters() {
    return this.characters.slice();
  }
}
