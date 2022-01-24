import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bullet } from '../../shared/model/bullet.model';
import { BulletListService } from '../service/bullet-list.service';

@Component({
  selector: 'app-bullet-edit',
  templateUrl: './bullet-edit.component.html',
  styleUrls: ['./bullet-edit.component.css'],
})
export class BulletEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private bulletListService: BulletListService) {}

  ngOnInit(): void {}

  onAddBullet() {
    const bulletName = this.nameInputRef.nativeElement.value;
    const bulletAmount = this.amountInputRef.nativeElement.value;

    const newBullet = new Bullet(bulletName, bulletAmount);

    this.bulletListService.addBullet(newBullet);
  }
}
