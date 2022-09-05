# prova01auth

Nas primeiras 4 horas de programação foram realizada as  seguintes atividades:

1. configuração inicial do projeto typescript com express
a. checagem see todas ass dependencias necessárias estavam instaladas e suas respectivas tipagens
b. criação do escript para rodar o servidor e ir  testando o sistema
c. criação do servidor com expresse e da primeira rota de teste para checar através do insomina que o servidor está acessível

2. Configuração do banco de dados pelo prisma
a. Configurar à conexão no arquivo .env para permitier o acesso do banco de dados
b. criação dos primeiros models, usuário e refresh token
c. migração dos models para o banco de dados.

3. inicio da consttrução do sistema propriamente dito
a. o prrojeto contadára com a seguiinte organização: casos de uso, conexao com banco de dados, controllers, middlewares, rotas.
b. implementar a criação do usuario e persistir seus dados no banco.
b.1 realizar a função de ativar o usuário, pois após ser cadastrado o usuário precisa ativar sua conta
obs.: seria necessário criar uma nova rota para rrealizarr essa função, porém foi feita junto com a autenticaãou, ou seja, ao efetuarr o login o usário automaticamente ativa sua conta
c. criar o acess token.
c.1 permiter a autenticação atraves do bearer token
d. criar o refresh token
d.1 realizar a criação de um novo acess token
d.2 persistir o refresh token no banco de dados

4.implementar o crud (ainda falta fazer)
dúvida inicial - fazer o relacionamento no banco de dados entre usuario e leitura
implementar esse relacionamento no core do sistema
