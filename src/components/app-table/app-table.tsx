import { h } from '@stencil/core';

// É um componente funcional (corpo dele é diferente dos demais)
// a maneira de usar é diferente.
// const TableComponent = (props, children) => (
export const TableComponent = (_, children) => (
  <div class="minhas-tarefas">
    {children}
  </div>
)