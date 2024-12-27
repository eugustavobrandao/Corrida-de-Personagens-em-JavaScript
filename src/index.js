const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
    TURBO: 0,
  };
  
  const player2 = {
    NOME: "Browser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 3,
    PODER: 4,
    PONTOS: 0,
    TURBO: 0,
  };
  
  async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  async function drawTurboLama() {
    let random = Math.random();
    if (random < 0.33) {
      return "TURBO";
    } else if (random < 0.66) {
      return "LAMA";
    } else {
      return "PISTA";
    }
  }
  
  async function getRandomBlock() {
    let random = Math.random();
    let result;
  
    switch (true) {
      case random < 0.33:
        result = "RETA";
        break;
  
      case random < 0.66:
        result = "CURVA";
        break;
  
      default:
        result = "CONFRONTO";
        break;
    }
  
    return result;
  }
  
  async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
      `${characterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
  }
  
  async function getConfront() {
    let random = Math.random();
    let result;
  
    switch (true) {
      case random < 0.5:
        result = "CASCO";
        break;
  
      default:
        result = "BOMBA";
        break;
    }
    return result;
  }
  
  async function combatResult(attacker, defender, attackType) {
    if (attackType === "CASCO") {
      defender.PONTOS = Math.max(0, defender.PONTOS - 1);
      console.log(
        `${attacker.NOME} atacou ${defender.NOME} com um casco! ${defender.NOME} perdeu 1 ponto! 🐢`
      );
    } else {
      defender.PONTOS = Math.max(0, defender.PONTOS - 2);
      console.log(
        `${attacker.NOME} atacou ${defender.NOME} com uma bomba! ${defender.NOME} perdeu 2 pontos! 💣`
      );
    }
  }
  
  async function turboLamaResult(pilot, resultType) {
    if (resultType === "TURBO") {
      pilot.PONTOS += 1;
      console.log(`${pilot.NOME} recebeu um turbo! ${pilot.NOME} ganhou 1 ponto! 🛻💨`);
    } else if (resultType === "LAMA") {
      pilot.PONTOS = Math.max(0, pilot.PONTOS - 1);
      console.log(`${pilot.NOME} passou na lama! ${pilot.NOME} perdeu 1 ponto! 🌧️`);
    }
  }
  
  async function playerRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Rodada ${round}`);
  
      let block = await getRandomBlock();
      console.log(`Bloco: ${block}`);
  
      let diceResult1 = await rollDice();
      let diceResult2 = await rollDice();
  
      let drawResult1 = await drawTurboLama();
      let drawResult2 = await drawTurboLama();
  
      let totalTestSkill1 = 0;
      let totalTestSkill2 = 0;
  
      if (block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
  
        await logRollResult(character1.NOME, "Velocidade", diceResult1, character1.VELOCIDADE);
        await logRollResult(character2.NOME, "Velocidade", diceResult2, character2.VELOCIDADE);
      }
  
      if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
  
        await logRollResult(character1.NOME, "Manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
        await logRollResult(character2.NOME, "Manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
      }
  
      if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;
  
        console.log(`${character1.NOME} confrontou ${character2.NOME} 🥊`);
  
        await logRollResult(character1.NOME, "Poder", diceResult1, character1.PODER);
        await logRollResult(character2.NOME, "Poder", diceResult2, character2.PODER);
  
        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
          let attackType = await getConfront();
          await combatResult(character1, character2, attackType);
        }
        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
          let attackType = await getConfront();
          await combatResult(character2, character1, attackType);
        }
      }
  
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      }
  
      await turboLamaResult(character1, drawResult1);
      await turboLamaResult(character2, drawResult2);
  
      console.log("------------------------------");
    }
  }
  
  async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME} : ${character1.PONTOS}`);
    console.log(`${character2.NOME} : ${character2.PONTOS}`);
  
    if (character1.PONTOS > character2.PONTOS) {
      console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    } else if (character2.PONTOS > character1.PONTOS) {
      console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    } else {
      console.log("A corrida terminou com empate.");
    }
  }
  
  (async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    await playerRaceEngine(player1, player2);
    await declareWinner(player1, player2);
  })();
  