import { Component, Input, OnInit } from '@angular/core';
import { BulletListService } from 'src/app/bullet-list/service/bullet-list.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;

  constructor(private bulletListService: BulletListService) {}

  ngOnInit(): void {}

  onAddToBulletList() {
    this.bulletListService.addBullets(this.character.bullets);
  }
}
