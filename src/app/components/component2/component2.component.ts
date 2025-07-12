// component2.component.ts
import { Component, Inject } from '@angular/core';
import { MODAL_DATA } from '../modal/modal.token';

@Component({
  standalone: true,
  selector: 'app-component2',
  template: `
    <h2>I am inside the modal!</h2>
    <p>Data received: {{ data.message }}</p>
  `
})
export class Component2 {
  constructor(@Inject(MODAL_DATA) public data: any) {}
}
