import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  characterPage = 'Character Page';
  bulletListPage = 'Bullet List Page';
  currentPage: string = this.characterPage;

  title = 'myProject';

  onPageSelected(page: string) {
    this.currentPage = page;
  }
}
