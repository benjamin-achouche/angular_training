import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Character } from '../model/character.model';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {
  id: number;
  editMode = false;
  characterForm: FormGroup;

  get controls() {
    return (<FormArray>this.characterForm.get('bullets')).controls;
  }

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.characterService.updateCharacter(this.id, this.characterForm.value);
    } else {
      this.characterService.addCharacter(this.characterForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddBullet() {
    (<FormArray>this.characterForm.get('bullets')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
    }))
  }

  onDeleteBullet(index: number) {
    (<FormArray>this.characterForm.get('bullets')).removeAt(index);
  }

  private initForm() {
    let characterName = '';
    let characterImgPath = '';
    let characterDescription = '';
    let characterBullets = new FormArray([]);

    if (this.editMode) {
      const character = this.characterService.getCharacter(this.id);
      characterName = character.name;
      characterImgPath = character.imagePath;
      characterDescription = character.description;

      if (character['bullets']) {
        for (let bullet of character.bullets) {
          characterBullets.push(new FormGroup({
            'name': new FormControl(bullet.name, Validators.required),
            'amount': new FormControl(bullet.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }))
        }
      }
    }

    this.characterForm = new FormGroup({
      'name': new FormControl(characterName, Validators.required),
      'imagePath': new FormControl(characterImgPath, Validators.required),
      'description': new FormControl(characterDescription, Validators.required),
      'bullets': characterBullets
    })
  }
}
