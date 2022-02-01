import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bullet } from '../shared/model/bullet.model';
import { BulletListService } from './service/bullet-list.service';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css'],
})
export class BulletListComponent implements OnInit, OnDestroy {
  bullets: Bullet[];
  private bulletChangeSub: Subscription;

  constructor(private bulletListService: BulletListService) {}

  ngOnInit(): void {
    this.bullets = this.bulletListService.getBullets();
    this.bulletChangeSub = this.bulletListService.bulletsChanged.subscribe(
      (bullets: Bullet[]) => (this.bullets = bullets)
    );
  }

  onEditBullet(index: number) {
    this.bulletListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.bulletChangeSub.unsubscribe();
  }
}
