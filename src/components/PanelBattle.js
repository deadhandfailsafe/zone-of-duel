import React, { useState } from 'react';
import random from 'random';

import {
  generateZoneLayers,
  generateLayerMaps
} from '../functions/FunctionMaps';

const testBoy = () => {
  let currentZone = generateZoneLayers(9);
  console.log(currentZone);
  let zoneWithMaps = generateLayerMaps(currentZone);
  console.log(zoneWithMaps);
};

const playerAttack = (enemyHealthPoints, setEnemyHealthPoints) => {
  let attackAmount = random.int(1, 10);
  setEnemyHealthPoints(enemyHealthPoints - attackAmount);
};

const PanelBattle = () => {
  const [playerHealthPoints, setPlayerHealthPoints] = useState(100);
  const [enemyHealthPoints, setEnemyHealthPoints] = useState(100);

  return (
    <div>
      <h1>Player 1 HP: {playerHealthPoints}</h1>
      <h1>Player 2 HP: {enemyHealthPoints}</h1>
      <button
        onClick={() => playerAttack(enemyHealthPoints, setEnemyHealthPoints)}>
        Attack
      </button>
      <button onClick={() => testBoy()}>Test</button>
    </div>
  );
};

export default PanelBattle;
