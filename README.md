# UC13-Aula 13

### Alunos: Igor Pereira de Araújo e Pedro Rodrigues  
### Professor: Thiago Nogueira

## README: Componente Menu e DishDetail

Este projeto adiciona um novo componente chamado DishdetailComponent ao aplicativo React, que exibe os detalhes de um prato selecionado. Abaixo está o passo a passo das modificações realizadas.

## Objetivos e Resultados

1. **Criar DishdetailComponent**: Foi adicionado um novo componente para exibir os detalhes de um prato selecionado.
2. *Atualizar Visualização*: A visualização do DishdetailComponent foi modificada para utilizar um componente de cartão do Reactstrap.
3. *Exibir Comentários*: A visualização foi atualizada para exibir a lista de comentários sobre o prato, utilizando uma lista sem estilo do Bootstrap.

## Passo a Passo

### Tarefa 1: Adicionar DishdetailComponent

1. *Criar o Componente*:
    - Foi criada a função DishDetail em um arquivo chamado DishdetailComponent.js, localizado na pasta components.
    - A função DishDetail foi exportada para ser importada no arquivo MenuComponent.js.

2. *Substituir o Cartão*:
    - O cartão que exibia o prato selecionado na visualização do MenuComponent foi substituído pelo DishdetailComponent.
    - As informações do prato selecionado foram passadas como props para o DishdetailComponent.

3. *Configurar Renderização*:
    - Foi retornado um div da função render(), utilizando a classe de linha do Bootstrap para posicionar o conteúdo.
    - Os detalhes do prato foram exibidos em um cartão e a lista de comentários foi apresentada lado a lado para telas médias a extragrandes.
    - Para telas XS e SM, os elementos foram empilhados verticalmente.

### Tarefa 2: Adicionar Componente de Cartão

1. **Implementar renderDish()**:
    - Foi adicionada a função renderDish(), que recebe o prato como parâmetro e retorna o código JSX necessário para exibir os detalhes do prato em um cartão do Reactstrap.
    - O cartão foi configurado com os seguintes elementos:
        - **Título (CardTitle): Exibe o nome do prato.
        - **Descrição (CardText): Exibe a descrição do prato.

2. *Verificação do Prato*:
    - Foi implementada uma verificação para garantir que o prato fornecido fosse válido (não null) antes de renderizar o cartão:
        - Se o prato for null, um div vazio é retornado.
        - Se o prato for válido, a função renderDish() é utilizada para exibir os detalhes no cartão.

### Tarefa 3: Exibir Comentários

1. **Implementar renderComments()**:
    - Foi adicionada a função renderComments(), que recebe a matriz de comentários como parâmetro e exibe cada comentário.
    - A classe de lista sem estilo do Bootstrap foi utilizada para formatar a lista de comentários.
    - Cada comentário foi exibido em duas linhas: uma linha para o comentário e outra para o nome do autor e a data de publicação.
    - Um cabeçalho h4 com a palavra "Comments" foi adicionado para identificar a seção de comentários.

