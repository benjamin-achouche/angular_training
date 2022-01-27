import { Component } from '@angular/core';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService],
})
export class CharactersComponent {
}
