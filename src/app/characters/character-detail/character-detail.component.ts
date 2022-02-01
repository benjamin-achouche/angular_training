import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BulletListService } from 'src/app/bullet-list/service/bullet-list.service';
import { Character } from '../model/character.model';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  id: number;

  constructor(private characterService: CharacterService, private bulletListService: BulletListService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.character = this.characterService.getCharacter(this.id);
      }
    )
  }

  onAddToBulletList() {
    this.bulletListService.addBullets(this.character.bullets);
  }

  onDeleteCharacter() {
    this.characterService.deleteCharacter(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onUsingNavigateInsteadOfRouterLink() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
