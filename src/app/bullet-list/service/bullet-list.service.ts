import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Bullet } from 'src/app/shared/model/bullet.model';

@Injectable()
export class BulletListService {
  bulletsChanged = new Subject<Bullet[]>();
  startedEditing = new Subject<number>();

  private bullets: Bullet[] = [
    new Bullet('9mm Handgun Ammo', 7),
    new Bullet('.50AE Magnum Ammo', 4),
  ];

  getBullet(index: number) {
    return this.bullets[index];
  }

  getBullets() {
    return this.bullets.slice();
  }

  addBullet(bullet: Bullet) {
    this.bullets.push(bullet);
    this.bulletsChanged.next(this.bullets.slice());
  }

  addBullets(bullets: Bullet[]) {
    this.bullets.push(...bullets);
    this.bulletsChanged.next(this.bullets.slice());
  }
  
  updateBullet(bullet: Bullet, index: number) {
    this.bullets[index] = bullet;
    this.bulletsChanged.next(this.bullets.slice());
  }
  
  deleteBullet(index: number) {
    this.bullets.splice(index, 1);
    this.bulletsChanged.next(this.bullets.slice());
  }
}
