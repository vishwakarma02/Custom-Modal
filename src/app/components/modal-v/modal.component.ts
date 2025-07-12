import {
  Component,
  Input,
  Output,
  EventEmitter,
  Injector,
  inject,
  EnvironmentInjector,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODAL_DATA } from './modal.token';


@Component({
  standalone: true,
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal-content" (click)="$event.stopPropagation()">
      <ng-container
        *ngComponentOutlet="component; injector: customInjector"
      ></ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() component!: any;
  @Input() data: any;
  @Output() closed = new EventEmitter<void>();

  private ei = inject(EnvironmentInjector);

  get customInjector(): Injector {
    return Injector.create({
      providers: [{ provide: MODAL_DATA, useValue: this.data }],
      parent: this.ei
    });
  }

  close() {
    this.closed.emit();
  }
}
