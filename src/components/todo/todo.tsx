import { h, Component } from '@stencil/core'

@Component({
  tag: 'app-todo',
  styleUrl: './todo.css',
  shadow: true
})
export class TodoComponent {
  render() {
    return <h3>Todo Componente</h3>
  }
}