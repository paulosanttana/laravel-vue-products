
## Definições Vue JS / Estados do Vue Js

**Data**
Também conhecido como model, é a parte mais básica de um componente, é uma das primeiras coisas que você aprende a manipular, nos famosos hello world de 2-way data-binding.
Uma característica dos componentes do Vue.js é a maneira como as informações de data ficam disponíveis, diretamente na instância do componente (this) sem intermediários.

**Computed** 
É uma maneira fantástica de criar um dado a partir de outros dados. São inúmeras as situações e possibilidades.
Ficam acessiveis diretamente no compoente (this), funcionando extamente como data, existe até a possibilidade de 
ter um setter para modificar seus valores.

**Props**
Props é a maneira que usamos para enviar um valor para um componente. Esses valores ficam disponíveis no componente, e passam a funcionar como data, porém não é possível modificar seus valores.

Props são one-way-bind, eles são valores “somente leitura”. Um componente não pode modificar props diretamente, ele deve enviar eventos ao componente superior (pai) que se encarregará de modificar este valor, modificando assim o estado da prop em questão.

## Store

[Data Store (Vuex)](https://blog.codecasts.com.br/estados-com-vue-js-data-computed-props-e-store-d8c6da4627ca)
Vuex, Redux e similares são baseados na proposta do Flux, que por sua vez é uma arquitetura pautada no Single Source of Truth (fonte única da verdade).

Varias definições dentro do Store
- State
- Mutations
- Actions
- Getters


**Two Way Data Binding**
a proposta principal do Two Way Data Binding é automatizar esse trafego de dados, de tal forma que o desenvolvedor não precise mais criar handlers no DOM para atualizar o Javascript e vice versa. Assim, quando um valor no DOM mudar, o Javascript responsável por aquele DOM também vai será atualizado com o respectivo valor automaticamente sem precisar adicionar qualquer handler
View seria o DOM e Model seria o Javascript responsável por controlar o fluxo de dados para o DOM.



