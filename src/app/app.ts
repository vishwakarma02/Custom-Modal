import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './components/modal-v/modal.service';
import { Item } from './components/item/item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Custom-Modal';

  constructor(private modal: ModalService) {}
  public openModal(): void {
    this.modal.open(Item, { message: 'Hello from Item'});
  }
}
