import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {

  @State() task: string = '';
  @Event() addTask: EventEmitter;
  
  //@Listen('click',{ capture: true})
  handleSubmite = (ev: Event) => {
    ev.preventDefault() // Para evtar de recarregar a página toda ao clicar no button
    console.log('Adicionando....');
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = '';
    }
  }

  handleInput = (ev: Event) => {
    const field = ev.target as HTMLInputElement;
    // console.log(field.value);
    this.task = field.value;
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmite}>
          <input onInput={this.handleInput}
                value={this.task}
          ></input>
          <button>Adicionar</button>
        </form>
      </Host>
    );
  }

}
