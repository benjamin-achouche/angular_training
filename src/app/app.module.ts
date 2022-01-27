import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterItemComponent } from './characters/character-list/character-item/character-item.component';
import { BulletListComponent } from './bullet-list/bullet-list.component';
import { BulletEditComponent } from './bullet-list/bullet-edit/bullet-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BulletListService } from './bullet-list/service/bullet-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterItemComponent,
    BulletListComponent,
    BulletEditComponent,
    DropdownDirective,
    CharacterStartComponent,
    CharacterEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [BulletListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
