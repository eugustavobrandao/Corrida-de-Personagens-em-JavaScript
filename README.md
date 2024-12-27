# Corrida-de-Personagens-em-JavaScript
O projeto é um jogo interativo de simulação de corrida. Os dois personagens competem em várias rodadas com desafios baseados em atributos como velocidade, manobrabilidade e poder. O sistema utiliza sorteios de dados para determinar os resultados de confrontos, bônus e penalidades, criando uma experiência dinâmica e imprevisível.


Principais Funcionalidades:
Definição dos personagens:


Cada personagem tem atributos fixos, como velocidade, manobrabilidade, poder, e pontuação inicial.
Simulação da corrida:


A corrida ocorre em 5 rodadas, onde cada rodada possui um "bloco" aleatório (reta, curva, ou confronto) que define o atributo a ser testado.
Resultados são calculados com base em valores de dados combinados com os atributos dos personagens.
Eventos aleatórios:


Blocos aleatórios: reta, curva, ou confronto.
Eventos "Turbo" e "Lama", que adicionam ou subtraem pontos dos personagens.
No bloco "Confronto", ataques aleatórios como casco ou bomba são realizados entre os personagens.
Sistema de pontuação:


O vencedor de cada rodada ganha pontos.
Os eventos aleatórios podem modificar a pontuação final.
Declaração do vencedor:

Após as rodadas, o jogo anuncia o vencedor com base na pontuação acumulada.


Demonstração
Ao rodar o jogo, você verá uma sequência de rodadas, eventos aleatórios e a evolução da pontuação dos personagens. No final, o sistema declara o vencedor ou informa se houve empate.

Exemplo de saída:
🏁🚨 Corrida entre Mario e Bowser começando...

🏁 Rodada 1
Bloco: CURVA
Mario 🎲 rolou um dado de Manobrabilidade: 3 + 3 = 6
Bowser 🎲 rolou um dado de Manobrabilidade: 2 + 3 = 5
Mario marcou um ponto!
Bowser passou na lama! Bowser perdeu 1 ponto! 🌧️
------------------------------
...
Resultado final:
Mario : 4
Bowser : 2

Mario venceu a corrida! Parabéns! 🏆


Aprendizados
Este projeto reforça conceitos importantes de desenvolvimento em JavaScript, como:

Funções assíncronas (async/await);
Manipulação de objetos;
Lógica condicional e operadores;
Estruturas de repetição.


Autor
Desenvolvido durante a trilha de aprendizado da Digital Innovation One.


Contribuições
Contribuições são bem-vindas! Caso queira adicionar novas funcionalidades, melhorar o código ou documentar, sinta-se à vontade para abrir um Pull Request.

