import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {

  @Listen('click',{ capture: true})
  handleAddClick(ev: Event) {
    ev.preventDefault() // Para evtar de recarregar a página toda ao clicar no button
    console.log('Adicionando....');
  }

  render() {
    return (
     <form>
      <input></input>
      <button>Adicionar</button>
     </form>
    );
  }

}
