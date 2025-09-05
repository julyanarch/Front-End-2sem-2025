# Desafio Prático DOM - To-Do List

## Descrição

Este é um desafio prático de manipulação do DOM utilizando JavaScript. O objetivo é modificar uma lista de tarefas (To-Do List) simples, alterando o título da página, adicionando um novo item à lista e marcando um item como "concluído". O foco principal é entender como manipular o DOM de maneira dinâmica e interagir com elementos HTML usando JavaScript.

## Requisitos

1. **Alterar o título da página**: Mudar de "Lista de Tarefas" para "Minha Lista de Tarefas Dinâmica".
2. **Adicionar um novo item à lista**: Inserir o item "Estudar JavaScript DOM" na lista de tarefas.
3. **Marcar o primeiro item como concluído**: Adicionar a classe CSS chamada `concluído` ao primeiro item da lista, fazendo-o aparecer como "concluído" (com texto riscado e cor cinza).

## Estrutura Inicial do Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Desafio DOM</title>
    <style>
        .concluído {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <h1 id="titulo">Lista de Tarefas</h1>
    <ul id="lista-tarefas">
        <li>Comprar pão</li>
        <li>Pagar a conta de luz</li>
        <li>Passear com o cachorro</li>
        <li>Levar um chocolate para o professor =D </li>
    </ul>
</body>
</html>
