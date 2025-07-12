// modal/modal.component.ts
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
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    .modal-content {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 1rem;
      border-radius: 8px;
      z-index: 1001;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    }
  `]
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
