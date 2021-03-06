import { Bullet } from 'src/app/shared/model/bullet.model';

export class Character {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public bullets: Bullet[]
  ) {}
}
