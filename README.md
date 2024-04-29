# Bot de cadastro do Servidor(PalMitos) da comunidade do jogo Palworld
Este projeto é um bot Discord que permite aos usuários cadastrar e armazenar dados dentro de um servidor Discord. Ele fornece uma maneira conveniente de gerenciar informações específicas do servidor, como listas de membros, eventos, tarefas e muito mais.
## Para esse projeto funcionar, é necessário que contemple os requisitos abaixo:
**Passo 1: Acessar o Discord Developer Portal**

Abra seu navegador web e vá para Discord Developer Portal.  

Faça login na sua conta do Discord, se necessário.  

**Passo 2: Criar uma Nova Aplicação**

Clique no botão "New Application" (Nova Aplicação) no canto superior direito da tela.  

Digite um nome para sua aplicação e clique em "Create" (Criar).  

**Passo 3: Criar um Bot**  

Na página da sua nova aplicação, vá para o menu do lado esquerdo e clique em "Bot".  Em seguida, clique em "Add Bot" (Adicionar Bot).  Confirme a ação clicando em "Yes, do it!" (Sim, faça isso).  

**Passo 4: Obter o Token do Bot** 

Na página do bot, vá para a seção "Token" e clique no botão "Copy" (Copiar) para copiar o token. IMPORTANTE: Nunca compartilhe seu token com ninguém, pois isso pode permitir que outras pessoas controlem seu bot!  

**Passo 5: Usar o Token** 

Agora que você tem o token do seu bot, você pode usá-lo para autenticar o bot em sua aplicação ou script.

**Passo 6: Conceder Permissões (Opcional)**

Se o seu bot precisar de permissões específicas para funcionar corretamente, você pode configurá-las na seção "OAuth2" da página do bot no portal do desenvolvedor do Discord.

## Projeto baseado no cadastro de informações para o Discord.js e Banco de Dados SQLite
Este é um projeto de exemplo que utiliza o Discord.js para criar um bot para o Discord, e usa o banco de dados SQLite através do Sequelize para armazenar dados.  


## Ferramentas Necessárias  

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

* Node.js: Um ambiente de execução JavaScript assíncrono.  

* npm (Node Package Manager) ou yarn: Gerenciadores de pacotes para instalação de dependências.  

* SQLite: Um sistema de gerenciamento de banco de dados relacional embutido.  

## Bibliotecas e Dependências
Este projeto utiliza as seguintes bibliotecas e dependências:  

* Discord.js: Uma poderosa biblioteca JavaScript para interagir com a API do Discord.
* dotenv: Uma biblioteca para carregar variáveis de ambiente de um arquivo .env.
* Sequelize: Um ORM (Object-Relational Mapping) para Node.js, utilizado para trabalhar com bancos de dados relacionais.
* sqlite3: Um driver para SQLite, utilizado pelo Sequelize para interagir com o banco de dados SQLite.
## Instalação
Siga estes passos para configurar o projeto:  

1. Clone este repositório para o seu ambiente local.
2. No diretório do projeto, execute o comando para instalar as dependências:Usando npm:  

Copy code:
```
npm install
```
3. Crie um arquivo .env na raiz do projeto.
4. Adicione as seguintes variáveis ao arquivo .env:
```
TOKEN=sua_variavel_token_aqui
CLIENT_ID=sua_variavel_client_id_aqui
GUILD_ID=sua_variavel_guild_id_aqui
```
