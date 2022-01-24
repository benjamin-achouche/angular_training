import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  characterPage = 'Character Page';
  bulletListPage = 'Bullet List Page';

  @Output() pageSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    this.pageSelected.emit(page);
  }
}
