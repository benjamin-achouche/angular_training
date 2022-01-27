import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Bullet } from 'src/app/shared/model/bullet.model';

@Injectable()
export class BulletListService {
  bulletsChanged = new Subject<Bullet[]>();

  private bullets: Bullet[] = [
    new Bullet('9mm Handgun Ammo', 7),
    new Bullet('.50AE Magnum Ammo', 4),
  ];

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
}
