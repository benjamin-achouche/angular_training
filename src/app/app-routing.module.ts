import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BulletListComponent } from "./bullet-list/bullet-list.component";
import { CharacterDetailComponent } from "./characters/character-detail/character-detail.component";
import { CharacterEditComponent } from "./characters/character-edit/character-edit.component";
import { CharacterStartComponent } from "./characters/character-start/character-start.component";
import { CharactersComponent } from "./characters/characters.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: "characters", component: CharactersComponent, children: [
    {path: '', component: CharacterStartComponent},
    {path: 'new', component: CharacterEditComponent},
    {path: ':id', component: CharacterDetailComponent},
    {path: ':id/edit', component: CharacterEditComponent},
  ]},
  {path: "bullet-list", component: BulletListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}