import {
  ApplicationRef,
  EnvironmentInjector,
  Injectable,
  createComponent,
  ComponentRef
} from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private envInjector: EnvironmentInjector
  ) {}

  open(component: any, data?: any): void {
    const modalRef: ComponentRef<ModalComponent> = createComponent(ModalComponent, {
      environmentInjector: this.envInjector
    });

    // Set modal content and data
    modalRef.instance.component = component;
    modalRef.instance.data = data;

    // Mount the modal in the DOM
    const domElem = modalRef.location.nativeElement;
    document.body.appendChild(domElem);
    this.appRef.attachView(modalRef.hostView);

    // Clean up when closed
    const cleanup = () => {
      this.appRef.detachView(modalRef.hostView);
      domElem.remove();
    };

    modalRef.instance.closed.subscribe(cleanup);
  }
}
