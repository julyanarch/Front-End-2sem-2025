# Desafio Arrays | Aula 01

## Descrição

Este repositório contém uma lista de exercícios para praticar e consolidar os conhecimentos sobre **Arrays** em JavaScript. Os desafios abordam conceitos importantes como criação, acesso, manipulação, e métodos de transformação de arrays.

---

## Desafios

### 1. Criação e Acesso
- Crie um array chamado `frutas` com as seguintes strings: `'Maçã'`, `'Banana'`, `'Morango'`.
- Imprima no console o primeiro e o último elemento do array usando `[]` e a propriedade `length`.

### 2. Adicionar e Remover Elementos
- Adicione a fruta `'Laranja'` ao final do array `frutas` usando `push()`.
- Remova o primeiro elemento do array `frutas` usando `shift()`.
- Imprima o array modificado para verificar as alterações.

### 3. Verificar Tipo
- Crie uma variável `x` com o valor `[1, 2, 3]` e uma variável `y` com o valor `'Hello'`.
- Use o método `Array.isArray()` para verificar se `x` e `y` são arrays. Imprima os resultados no console.

### 4. Transformação com `map()`
- Crie um array de números `numeros = [10, 20, 30, 40]`.
- Use `map()` para criar um novo array onde cada número seja o dobro do valor original. Imprima o novo array.

### 5. Filtragem com `filter()`
- Crie um array de idades `idades = [15, 22, 18, 35, 12, 45]`.
- Use `filter()` para criar um novo array contendo apenas as idades maiores ou iguais a 18. Imprima o resultado.

### 6. Redução com `reduce()`
- Crie um array de preços `precos = [5.50, 12.00, 8.75, 15.25]`.
- Use `reduce()` para calcular o valor total da soma de todos os preços. Imprima o valor total.

### 7. Manipulação com `splice()`
- Crie um array `animais = ['Cachorro', 'Gato', 'Elefante', 'Leão']`.
- Use `splice()` para remover o `'Elefante'` e adicionar `'Girafa'` e `'Hipopótamo'` em sua posição. Imprima o array final.

### 8. Combinando Métodos
- Crie um array de objetos `produtos = [{nome: 'Laptop', preco: 1200}, {nome: 'Mouse', preco: 25}, {nome: 'Teclado', preco: 75}]`.
- Use `filter()` para encontrar produtos com preço acima de 50.
- Em seguida, use `map()` no resultado para obter um novo array contendo apenas os nomes desses produtos. Imprima o array de nomes.

### 9. Busca e Verificação
- Crie um array de strings `usuarios = ['Ana', 'João', 'Maria', 'Pedro']`.
- Use `find()` para encontrar e imprimir o primeiro usuário cujo nome começa com a letra 'M'.
- Use `some()` para verificar se existe algum usuário chamado 'João' no array. Imprima o resultado.

### 10. Ordenação com `sort()`
- Crie um array de números `numerosDesordenados = [8, 2, 11, 4, 1]`.
- Use `sort()` com uma função de comparação para ordenar os números de forma crescente. Imprima o array ordenado.
  - (Dica: O `sort()` para números precisa de uma função de comparação `(a, b) => a - b`).

---
