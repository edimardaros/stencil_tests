import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoComponent {

  @State() tasks: string[] = [];

  render() {
    // Host substitui a div no Stencil
    return (
     <Host> 
      <app-form></app-form>
      <ul>
        {this.tasks.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
     </Host>
    );
  }

}
