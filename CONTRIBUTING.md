# Padrões para o Front :)

## Componentes

- Ao iniciar o desenvolvimento de uma nova _feature_, pensar na criação de componentes que possam ser reutilizados.

## Storage

- Utilizar o _localstorage_ para manter apenas o _token_ do usuário logado.

## Formulário

- Campos obrigatórios com (\*)
- Botão de (Próximo) ou (Salvar) desabilitado enquanto o formulário não estiver completo
- Blur do campo exibir como (Vermelho) quando obrigatório
- Exibir o toast com a mensagem do backend de validação. A estrutura é:

```js
    {
        statusCode: 409,
        message: "CPF já cadastrado",
        path: /users,
    }
```

- Usar o [VeeValidate](https://vee-validate.logaretm.com/v3/) como validação padrão dos formulários.
- Os formulários anteriores serão alterados conforme o avanço das sprints

## Chamadas para a API

- Toda chamada para a API deverá ser feita na camada _service_ utilizando as _Actions_ do vuex.

## Edição de recursos

- Ao editar as informações de um recurso, enviar apenas o(s) campo(s) que estão sendo editados. Utilizar sempre o método _PATH_ para o envio da requisição.

## Estilos

- Antes de desenvolver as páginas e/ou componentes, verificar a existêcia dos estilos na pasta _stylesheets_.
