import { Component, h, Host, State } from '@stencil/core';
import { TableComponent } from '../app-table/app-table';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class TodoComponent {

  @State() tasks: string[] = [];

  handleAdd = (ev: CustomEvent) => {
    // console.log('Filho me chamou');
    // this.tasks.push(ev.detail);
    this.tasks = [
      ... this.tasks,
      ev.detail
    ];

  }

  render() {
    // Host substitui a div no Stencil
    return (
     <Host> 
      <app-form onAddTask={this.handleAdd}></app-form>
      <TableComponent>
        <ul>
          {this.tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </TableComponent>
      
     </Host>
    );
  }

}
