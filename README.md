# Paradigmas Mobile — HC Store

## 1. Objetivo do projeto

Este projeto foi desenvolvido para a atividade de Paradigmas de Desenvolvimento Mobile. O objetivo é estudar as diferenças entre o desenvolvimento para web e para dispositivos móveis, reconstruindo uma parte da HC Store em React Native utilizando Expo.

A versão mobile apresenta um catálogo de produtos com imagens, preços, categorias, detalhes e um carrinho demonstrativo. Durante o desenvolvimento, foram utilizados componentes reutilizáveis, estilos com StyleSheet, organização com Flexbox e estados com useState.

O foco não é criar uma loja virtual completa, mas demonstrar como uma interface originalmente pensada para a web pode ser adaptada para uma experiência mobile.

## 2. Tecnologias utilizadas

- React Native: construção da interface do aplicativo.
- Expo: execução e desenvolvimento do projeto mobile.
- JavaScript: implementação da lógica dos componentes.
- StyleSheet: definição dos estilos da interface.
- Flexbox: organização dos elementos na tela.
- useState: controle de estados e interações.
- Git e GitHub: versionamento e publicação do código-fonte.

## 3. Fundamentação: desenvolvimento web e mobile

### 3.1. Ciclo de build e distribuição

No desenvolvimento web, uma alteração pode ser publicada em um servidor após os testes e o processo de deploy. Quando o usuário acessa a página, o navegador normalmente carrega a versão disponível no servidor, embora caches e outros mecanismos possam interferir na atualização.

No desenvolvimento mobile, o processo depende da forma como o aplicativo é distribuído. Durante o desenvolvimento com Expo, é possível visualizar alterações rapidamente no dispositivo ou simulador. Para distribuir um aplicativo instalado, geralmente é necessário gerar uma versão compatível com a plataforma.

Quando a distribuição acontece pelas lojas oficiais, como App Store e Google Play, existem processos de envio e análise que podem ser necessários antes de a nova versão ficar disponível. Além disso, os usuários podem continuar utilizando uma versão antiga até atualizarem o aplicativo.

Portanto, publicar uma página web e atualizar um aplicativo instalado não são exatamente o mesmo processo. O desenvolvedor precisa considerar como a nova versão será disponibilizada e como os usuários receberão as mudanças.

### 3.2. Ciclo de vida do aplicativo

Uma página web pode permanecer aberta em uma aba do navegador, ser recarregada ou ficar em segundo plano. Um programa desktop também pode ser minimizado, permanecer aberto ou ser encerrado.

No mobile, o aplicativo pode estar ativo e recebendo interações, passar para segundo plano quando o usuário abre outro aplicativo ou ser encerrado pelo sistema operacional. Em dispositivos com memória limitada, o sistema pode encerrar processos para liberar recursos.

Essas situações influenciam a forma como um aplicativo precisa lidar com dados temporários, carregamento de informações, retomada de atividades e estado da interface. Uma aplicação não deve presumir que permanecerá ativa o tempo todo.

### 3.3. Restrições dos dispositivos

No computador, normalmente existe uma tela maior e o usuário pode contar com mouse e teclado. No celular, a interface precisa funcionar em diferentes tamanhos de tela, resoluções e densidades de pixels.

Também é necessário considerar a bateria, a memória disponível e a qualidade da conexão. O aplicativo pode ser utilizado em uma rede instável ou sem internet, situação em que recursos que dependem de serviços remotos podem deixar de funcionar.

Outro cuidado é respeitar as áreas seguras da tela, considerando elementos como a câmera frontal, a Dynamic Island, as barras do sistema e os cantos arredondados. A orientação da tela e as permissões de recursos como câmera, localização e notificações também podem influenciar a experiência.

Essas limitações exigem testes em diferentes condições, em vez de considerar apenas a aparência em um único dispositivo.

### 3.4. Entrada e interação

Na web para desktop, muitas ações são realizadas com cliques, movimentos do mouse, teclado e atalhos. Em um aplicativo mobile, a interação acontece principalmente por toques e gestos.

Por isso, os botões precisam ter áreas de toque adequadas, espaçamento suficiente e identificação visual clara. Elementos muito pequenos ou próximos podem dificultar o uso, especialmente quando a pessoa utiliza o aparelho com uma mão.

O teclado virtual também exige atenção, pois pode cobrir parte da interface quando um campo de texto recebe foco. O layout precisa permitir que os campos e as ações importantes continuem acessíveis.

No React Native, componentes como Pressable permitem implementar áreas interativas, enquanto TextInput permite receber texto digitado pelo usuário.

### 3.5. Experiência do usuário mobile

O celular costuma ser utilizado em diferentes contextos: em pé, durante deslocamentos, com uma mão ou em momentos nos quais o usuário tem pouco tempo disponível.

Por esse motivo, uma boa interface mobile deve priorizar informações importantes, facilitar a navegação e evitar exigir muitos passos para realizar uma ação. A posição dos controles, o tamanho dos elementos e a clareza dos textos influenciam a facilidade de uso.

Padrões como navegação por abas, listas roláveis e botões acessíveis ajudam o usuário a reconhecer as ações disponíveis. Entretanto, adaptar uma página para mobile não significa apenas diminuir seu tamanho: é necessário avaliar como a pessoa interage com o conteúdo em uma tela menor.

## 4. Pesquisa de campo: análise de aplicativos

Foram escolhidos Instagram e WhatsApp para observar como aplicativos utilizados no cotidiano organizam suas interfaces e interações em dispositivos móveis.

### 4.1. Instagram

#### Telas analisadas

**Figura 1 — Feed do Instagram**

![Print do feed do Instagram](docs/apps/instagram-feed.png)

Fonte: captura de tela realizada pelo autor.

**Figura 2 — Perfil do Instagram**

![Print do perfil do Instagram](docs/apps/instagram-perfil.png)

Fonte: captura de tela realizada pelo autor.

#### Entrada e interação

No feed, a navegação permite percorrer publicações por meio de rolagem e acessar ações de interação por toque. No perfil, o usuário encontra informações da conta e acesso às publicações. Essas interações são organizadas para uso direto na tela sensível ao toque.

#### UX mobile

A interface concentra navegação e ações em regiões específicas da tela. Isso facilita reconhecer as funções disponíveis sem depender de mouse ou teclado. A rolagem também permite apresentar uma grande quantidade de conteúdo em uma área limitada.

#### Conexão e permissões

A experiência depende da conexão para carregar conteúdos remotos. Em uma conexão instável, o carregamento e a atualização do feed podem ser afetados. Recursos como câmera, fotos e notificações podem depender de permissões do sistema operacional, conforme a função utilizada e as configurações do aparelho.

#### Comparação com a versão web

A versão web pode oferecer mais espaço horizontal e interação por mouse e teclado. No aplicativo mobile, a interface é organizada para toque e navegação em uma tela menor. A comparação das versões deve considerar a posição dos controles, a distribuição do conteúdo e as formas de interação.

### 4.2. WhatsApp

#### Telas analisadas

**Figura 3 — Lista de conversas do WhatsApp**

![Print das conversas do WhatsApp](docs/apps/whatsapp-conversas.png)

Fonte: captura de tela realizada pelo autor.

**Figura 4 — Conversa do WhatsApp**

![Print de uma conversa do WhatsApp](docs/apps/whatsapp-conversa.png)

Fonte: captura de tela realizada pelo autor.

#### Entrada e interação

Na lista de conversas, o usuário seleciona uma conversa por toque. Dentro dela, utiliza o campo de mensagem e o teclado virtual para digitar e enviar conteúdo. A interface organiza as mensagens em sequência, facilitando acompanhar a conversa.

#### UX mobile

A tela de conversa concentra as mensagens e o campo de composição em uma mesma área. Isso facilita continuar a interação sem precisar navegar por diversas telas para cada mensagem. Os controles devem continuar acessíveis mesmo quando o teclado virtual está aberto.

#### Conexão e permissões

O envio e o recebimento de mensagens dependem da conectividade. Quando a rede falha, algumas operações podem ficar pendentes até que a conexão seja restabelecida. Recursos como câmera, microfone, contatos e notificações podem utilizar permissões do sistema, de acordo com as funções acionadas e as configurações do dispositivo.

#### Comparação com a versão web

O WhatsApp Web permite acessar conversas em uma tela maior e utilizar o teclado físico para digitar. No aplicativo mobile, a interface é adaptada ao toque e ao teclado virtual. Apesar de oferecerem funções semelhantes, as duas versões possuem diferenças de disposição e contexto de uso.

### 4.3. Comparação entre os aplicativos

O Instagram prioriza a apresentação de conteúdo visual e a navegação por publicações, enquanto o WhatsApp prioriza a comunicação por mensagens e o acesso às conversas.

Nos dois casos, a interface precisa organizar informações e ações para telas menores. Entretanto, os padrões de navegação e os controles são diferentes porque cada aplicativo atende a uma finalidade específica.

**Observação:** as análises devem ser revisadas conforme as telas e os comportamentos efetivamente observados pelo autor. As permissões e os comportamentos de conexão podem variar conforme o sistema operacional, a versão do aplicativo e as configurações do aparelho.

## 5. Prática: reconstrução da HC Store em React Native

### 5.1. Interface original e versão mobile

A prática consistiu em reconstruir uma seção da HC Store, originalmente desenvolvida para a web, utilizando React Native e Expo.

**Figura 5 — HC Store na web**

![Print da versão web da HC Store](docs/comparacao/hcstore-web.png)

Fonte: captura de tela da página web original.

**Figura 6 — HC Store em React Native**

![Print da HC Store Mobile](docs/comparacao/hcstore-mobile.png)

Fonte: captura de tela do aplicativo desenvolvido pelo autor.

### 5.2. Componentização

A interface foi organizada em componentes dentro da pasta `src/components`, incluindo `Navbar` e `ProductCatalog`.

A separação permite organizar partes distintas da interface e facilita a manutenção do código. O catálogo recebe os produtos por props, enquanto o componente de navegação recebe informações e funções necessárias para interagir com outras partes do aplicativo.

### 5.3. Estilização com StyleSheet e Flexbox

Os estilos foram definidos com `StyleSheet.create`, separando as regras visuais da estrutura dos componentes.

O Flexbox foi utilizado para organizar elementos, alinhar informações e distribuir os cards de produtos. Essa abordagem permite construir layouts adequados ao espaço disponível no dispositivo.

### 5.4. Interações com useState

O projeto utiliza `useState` para controlar estados da interface, como a categoria selecionada, o produto visualizado em detalhes, a tela atual e os itens do carrinho.

Esses estados permitem que determinadas ações alterem o conteúdo exibido sem exigir uma navegação por páginas web tradicionais. O carrinho possui comportamento demonstrativo, com adição de produtos, alteração de quantidades e cálculo do total.

## 6. Diferenças encontradas entre web e React Native

1. **Elementos de interface:** na web, elementos como `div` e `p` são utilizados para estruturar páginas. No React Native, componentes como `View` e `Text` cumprem funções correspondentes na interface nativa.

2. **Exibição de texto:** no React Native, o texto visível precisa estar dentro de componentes apropriados, como `Text`, diferentemente da forma como o texto pode ser colocado diretamente em diversos elementos HTML.

3. **Estilização:** no projeto mobile, os estilos são organizados com `StyleSheet.create`. A organização das regras é diferente do CSS tradicional e não utiliza a mesma cascata global da web.

4. **Unidades de medida:** os estilos do React Native normalmente utilizam valores numéricos independentes de `px`, enquanto no CSS web é comum especificar unidades como `px`, `rem` e `%`.

5. **Flexbox:** embora esteja disponível nas duas tecnologias, o Flexbox do React Native possui padrões diferentes. Por exemplo, `flexDirection` utiliza `column` como valor padrão, enquanto no CSS web o padrão é `row`.

6. **Interações:** na web, eventos de mouse e estados como `:hover` são comuns. Em dispositivos móveis, as interações precisam considerar principalmente toque e gestos, como os implementados com `Pressable`.

7. **Imagens e recursos:** no projeto Expo, as imagens locais foram incluídas com `require` e caminhos relativos aos arquivos do projeto. Esse processo é diferente da referência a arquivos e URLs utilizada normalmente em páginas web.

8. **Adaptação da tela:** a interface mobile precisa considerar o espaço disponível, as áreas seguras e a presença do teclado virtual. Por isso, não basta copiar as dimensões visuais da versão web sem verificar como o conteúdo se comporta no celular.

## 7. Conclusão

Depois da pesquisa e da prática, compreendi que desenvolver para dispositivos móveis exige pensar não apenas na aparência da interface, mas também na forma como o usuário interage com ela. No mobile, é necessário considerar telas menores, toques, gestos, teclado virtual, ciclo de vida do aplicativo e limitações do dispositivo. A reconstrução da HC Store ajudou a perceber que componentes, estilos e interações precisam ser adaptados ao ambiente do React Native, em vez de simplesmente reproduzir o código da web.

## 8. Referências

APPLE. *Human Interface Guidelines: Layout*. Disponível em: https://developer.apple.com/design/human-interface-guidelines/layout. Acesso em: 13 out. 2026.

GOOGLE. *Accessibility — Material Design*. Disponível em: https://m1.material.io/usability/accessibility.html. Acesso em: 13 out. 2026.

REACT NATIVE. *Core Components and APIs*. Disponível em: https://reactnative.dev/docs/components-and-apis. Acesso em: 13 out. 2026.

REACT NATIVE. *Layout with Flexbox*. Disponível em: https://reactnative.dev/docs/flexbox. Acesso em: 13 out. 2026.

REACT NATIVE. *Get Started with React Native*. Disponível em: https://reactnative.dev/docs/getting-started. Acesso em: 13 out. 2026.

LIVRO PARA REFERENCIA:

ESCUDELARIO, B.; PINHO, D. *React Native: desenvolvimento de aplicativos mobile com React*. São Paulo: Casa do Código, 2021.

## 9. Declaração de uso de IA

OPENAI. ChatGPT (GPT-6). Ferramenta de inteligência artificial generativa.

Data de uso: 13 out. 2026.

Finalidade: apoio à organização da documentação, explicação de conceitos de desenvolvimento mobile, revisão da estrutura do README e auxílio na implementação e correção de componentes React Native.

Arquivos impactados: `README.md`, `App.js`, `src/components/Navbar.jsx` e `src/components/ProductCatalog.jsx`.


