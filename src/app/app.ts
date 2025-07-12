import { Component } from '@angular/core';
import { ModalService } from './components/modal/modal.service';
import { Component2 } from './components/component2/component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Custom-Modal';

  constructor(private modal: ModalService) {}
  public openModal(): void {
    this.modal.open(Component2, { message: 'Hello from Item'});
  }
}
