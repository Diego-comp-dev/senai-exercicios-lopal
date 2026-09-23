# Desafio 6: 
## O que é o SSH

É um protocolo de rede que permite gerenciar computadores e servidores remotamente, totalmente criptografada através de uma linha de comando, usa a porta TCP 22.

## Diferença entre clonar um repositório usando HTTPS ou SSH
* HTTPS: utiliza o mesmo protocolo de navegação web. A leitura e a clonagem podem ser abertas a qualquer usuário sem necessidade de autenticação.

* SSH: utiliza autenticação por chaves. O desenvolvedor gera uma chave privada (armazenada de forma secreta no computador local) e cadastra a chave pública equivalente nas configurações da sua conta na plataforma (GitHub, GitLab, Bitbucket). Quando o Git tenta ler ou gravar no repositório, o protocolo SSH valida digitalmente a identidade do computador sem que nenhuma senha trafegue pela rede.

## Situações indicadas para cada tipo de acesso
* HTTPS:
  * Clonagem rápida de repositórios públicos: Ideal para baixar código aberto ou projetos de terceiros sem precisar configurar chaves no computador.

  * Redes corporativas com bloqueio de portas: Ambientes de trabalho com firewalls rigorosos que bloqueiam o tráfego da porta 22 (SSH), mas mantêm a porta 443 (HTTPS) aberta para navegação web.

  * Ambientes temporários ou computadores de terceiros: Máquinas de teste, laboratórios ou computadores que você não utilizará a longo prazo, onde cadastrar chaves permanentes seria inseguro ou desnecessário.

* SSH:
  * Desenvolvimento diário na sua máquina principal: Para trabalhar em projetos contínuos sem precisar lidar com expiração de tokens ou reautenticações frequentes.

  * Servidores, CI/CD e Automação: Em pipelines de integração contínua (como GitHub Actions ou GitLab CI) e rotinas de deploy automatizado em servidores remotos, onde scripts precisam enviar ou puxar código de forma não interativa.

  * Múltiplas contas no mesmo computador: Para gerenciar perfis diferentes (pessoal e trabalho) configurando chaves SSH distintas no arquivo.

# Desafio 7: 
## O que é HTTP e HTTPS

São protocolos de rede que permitem a comunicação e a transferência de dados.

* HTTP(sem criptografia)

 Transmite as informações em texto puro(vulneráveis), usa a porta TCP 80.
* HTTPS(Com criptografia)

Adiciona uma camada de protelção por meio do protocolo TLS, exige um certificado digital no servidor, usa a prota TCP 443.
  
 ## Porque a segurança da comunicação entre cliente e servidor é importante

 Os principais motivos são:

* Confidencialidade: impede que terceiros espionem o tráfego de dados.

* Integridade: Garante que o conteúdo não seja alterado ou corrompido durante o trajeto.

* Autenticação: Prova que você está conectado ao servidor legítimo e não a um site falso.

Isso garante que os dados fiquem protegidos contras interceptações,falsificações e adulterações.

# Desafio 8:
## O que é docker

O Docker é uma plataforma open-source de conteinerização que permite empacotar uma aplicação junto com todas as suas dependências, bibliotecas e arquivos de configuração em uma unidade padronizada chamada container.

Sua principal finalidade é garantir que o sistema funcione de forma idêntica em qualquer ambiente, resolvendo o clássico problema do "na minha máquina funciona, mas em produção não".

## Diferença entre docker e máquina virtual
Enquanto uma máquina virtual tradicional emula um computador inteiro (incluindo um sistema operacional completo para cada VM), o Docker virtualiza apenas o nível do sistema operacional, compartilhando o mesmo kernel da máquina hospedeira.

# Desafio 9
## O que é live server

É uma extensão do vscode que lança um servidor HTTP local com suporte a live reload.

## Como ele permite que um arquivo HTML se comunique com um arquivo JavaScript externo através da tag *script*

A tag **script** funciona como a ponte que instrui o navegador a carregar e executar scripts JavaScript dentro do contexto do documento HTML. Quando o atributo **src** é utilizado, o navegador realiza o carregamento do arquivo **.js** externo e o executa na mesma página.

Assim que o navegador baixa o arquivo app.js, ele compartilha a mesma árvore de elementos (DOM) do arquivo index.html. Qualquer alteração feita pelo JavaScript reflete imediatamente na tela do usuário.

## Por que abrir direto no navegador (file://) não funciona da mesma forma

Ao dar um duplo clique no arquivo index.html, o navegador abre a página usando o protocolo file:// (ex.: file:///C:/meu-projeto/index.html), acessando os arquivos diretamente do disco rígido.

Quando você utiliza um servidor web (seja o Live Server local ou um servidor remoto), a comunicação é feita via protocolo http:// ou https://. A abertura via file:// limita o funcionamento do JavaScript devido a restrições de segurança do próprio navegador:

## O que significa Hospedar um Serviço

Hospedar um serviço significa armazenar os arquivos, códigos, bancos de dados e configurações da sua aplicação em um servidor (um computador de alto desempenho) que permanece ligado, configurado e conectado à internet 24 horas por dia.

Enquanto um projeto em desenvolvimento roda apenas no seu computador (localhost), a hospedagem disponibiliza esse projeto em um endereço acessível publicamente (através de um endereço IP ou um domínio como meusite.com), permitindo que qualquer pessoa ao redor do mundo acesse a aplicação.

## Exemplos de Serviços de Hospedagem no Mercado

* GitHub Pages: Serviço gratuito oferecido pelo GitHub para hospedar páginas e portfólios diretamente de repositórios públicos.

* AWS (Amazon Web Services): Oferece controle total de infraestrutura como instâncias virtuais (EC2) e armazenamento de arquivos (S3).