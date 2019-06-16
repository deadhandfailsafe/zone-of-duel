import random from 'random';
import dataMapPool from '../data/dataMapPool.json';

// If we split the zone into horizontal layers, top to bottom or bottom to top, we want to look at each slice and give it 1-3 "maps" to contain, so here we are randomly generating the map amount for each of those layers.
const generateZoneLayers = zoneLayerAmount => {
  // We want to start with 1 because the final area will always be a single map.
  let zoneArray = [1];
  for (let i = 1; i < zoneLayerAmount; i++) {
    let layerMaps = random.int(1, 3);
    zoneArray = [...zoneArray, layerMaps];
  }
  return zoneArray;
};

// With this we can now take that array of layers and start to generate the actual maps on each layer as a base frame to use for later detailed generation and population.
const generateLayerMaps = zoneLayers => {
  let zoneMappedArray = [];
  for (let i = 0; i < zoneLayers.length; i++) {
    let innerMapArray = [];
    for (let j = 0; j < zoneLayers[i]; j++) {
      let mapAreaEnviornment =
        dataMapPool[random.int(0, dataMapPool.length - 1)].name;
      innerMapArray = [...innerMapArray, mapAreaEnviornment];
    }
    zoneMappedArray = [...zoneMappedArray, [innerMapArray]];
  }
  return zoneMappedArray;
};

export { generateZoneLayers, generateLayerMaps };
