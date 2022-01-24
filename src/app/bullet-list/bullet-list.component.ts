import { Component, OnInit } from '@angular/core';
import { Bullet } from '../shared/model/bullet.model';
import { BulletListService } from './service/bullet-list.service';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css'],
})
export class BulletListComponent implements OnInit {
  bullets: Bullet[];

  constructor(private bulletListService: BulletListService) {}

  ngOnInit(): void {
    this.bullets = this.bulletListService.getBullets();
    this.bulletListService.bulletsChanged.subscribe(
      (bullets: Bullet[]) => (this.bullets = bullets)
    );
  }
}
