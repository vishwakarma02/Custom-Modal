import { Component, Inject } from '@angular/core';
import { MODAL_DATA } from '../modal-v/modal.token';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {
  constructor(@Inject(MODAL_DATA) public data: any) {}
}
