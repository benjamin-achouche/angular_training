import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Bullet } from '../../shared/model/bullet.model';
import { BulletListService } from '../service/bullet-list.service';

@Component({
  selector: 'app-bullet-edit',
  templateUrl: './bullet-edit.component.html',
  styleUrls: ['./bullet-edit.component.css'],
})
export class BulletEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') bulletListForm: NgForm; 
  
  bulletEditSub: Subscription;
  editMode = false;
  editedBulletIndex: number;
  editedBullet: Bullet;
  
  constructor(private bulletListService: BulletListService) {}

  ngOnInit(): void {
    this.bulletEditSub = this.bulletListService.startedEditing.subscribe((index: number) => {
      this.editedBulletIndex = index;
      this.editMode = true;
      this.editedBullet = this.bulletListService.getBullet(index);
      this.bulletListForm.setValue({
        name: this.editedBullet.name,
        amount: this.editedBullet.amount
      })
    });
  }

  onAddBullet() {
    const value = this.bulletListForm.value;
    const newBullet = new Bullet(value.name, value.amount);
    this.bulletListService.addBullet(newBullet);

    this.onClear();
  }

  onUpdateBullet() {
    const value = this.bulletListForm.value;
    const newBullet = new Bullet(value.name, value.amount);
    this.bulletListService.updateBullet(newBullet, this.editedBulletIndex);

    this.onClear();
  }
  
  onDelete() {
    this.bulletListService.deleteBullet(this.editedBulletIndex);
    this.onClear();
  }
  
  onClear() {
    this.editMode = false;
    this.bulletListForm.reset();
  }

  ngOnDestroy(): void {
    this.bulletEditSub.unsubscribe();
  }
}
