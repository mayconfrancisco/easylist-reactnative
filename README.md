# EasyList ReactNative (Mobile)

### Objetivos e detalhes do projeto

Esta é uma POC para testar o desenvolvimento em React Native em conjunto com Redux, Redux-Saga e Redux-Sauce (com DuckPattern).
Pequenos equívocos de interface (UI/UX) podem ser observados, como por exemplo a falta de Loading em algumas interações, o que não invalida o valor acadêmico do projeto ;)

O Projeto também foi uma boa fonte de testes para ciclos de vida e comportamento do render dos componentes!
Aproveite a integração com o Reactotron e divirta-se com os _console.tron.log()_ no ciclo de vida ;)

A aplicação não possui componente de erro - tudo é impresso no console log do reactotron ;)

![Imagem do App EasyList-ReactNative Rodando](https://raw.githubusercontent.com/mayconfrancisco/easylist-reactnative/master/imgs/EasyList-ReactNative-GIF.gif)

### Para rodar o projeto:

_Sete as configurações de endereço do BackEnd no arquivo /src/services/api.js_

_Para baixar as dependências_

**yarn**

_Para iniciar a aplicação - Emuladores ou Aparelhos em modo debug USB são necessários_

**yarn add global react-native-cli** para instalar o CLI do React Native, caso não o tenha

**react-native run-ios** para rodar o projeto no iOS

**react-native run-android** para rodar o projeto no Android

### Sopinha de Letrinhas

**prop-types** para as validações de parâmetros _props_

**axios** para requisições HTTP ao BackEnd

**react-redux, redux, redux-saga e reduxsauce** para o gerenciamento do estado da aplicação

**seamless-immutable** adiciona imutabiliade ao estado da aplicação

**react-navigation** para gerenciamento das rotas da aplicação embora tenhamos apenas uma e esse seria dispensável, ficou para efeitos de estudo ;)

**reactotron-react-native, reactotron-redux, reactotron-redux-saga** para dedug e auxílio na fase de desenvolvimento

**styled-components/native** para facilitar a criação e manutenção dos estilos da aplicação

**react-native-gesture-handler** para dar suporte a gestos dos dispositivos

**react-native-iphone-x-helper** para auxiliar no layout com os tamanhos para o iPhones

### Seria bom:

Refatorar os componentes de AddList e AddItem
Add loadings específicos para AddList, AddItem - tornará a interface mais coerente
Verificar melhor o funcionamento do Seamless com aquela estrutura de estado definida para o TodoLists no App - Tivemos problemas com Update, UpdateIn, Set e SetIn
Adicionar esses itens na ISSUES do gerenciador de Repo ;)
