import Model from './Model'
const model: Model = {
  label: "PetriNet Model Traffic Lights",
  transitions: [
    'gy2',
    'rg2',
    'yr2',
    'gy1',
    'rg1',
    'yr1',
    
  ],
  nodes: [
    'green1',
    'yellow1',
    'red1',
    'safe1',
    'green2',
    'yellow2',
    'red2',
    'safe2',
  ],
  edges: [
    ['gy2', 'yellow2'],
    ['rg2', 'green2'],
    ['yr2', 'safe1'],
    ['yr2', 'red2'],
    ['safe2', 'rg2'],
    ['green2', 'gy2'],
    ['yellow2', 'yr2'],
    ['red2', 'rg2'],
    ['gy1', 'yellow1'],
    ['rg1', 'green1'],
    ['yr1', 'safe2'],
    ['yr1', 'red1'],
    ['safe1', 'rg1'],
    ['green1', 'gy1'],
    ['yellow1', 'yr1'],
    ['red1', 'rg1'],
  ],
  markers: [
    'green1',
    'red2',
  ],
  states: [],
}

export default model;
