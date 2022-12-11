import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Graphviz } from 'graphviz-react';
import initModel from './model/dining-2'
import dot from './dot'
import process from './dot/process'

function App() {
  const [model, setModel] = useState(initModel);
  const [edge, setEdge] = useState('black');
  useEffect(() => {
    const listeners = model
      .transitions
      .map(
        transition => ({
          id: `#transition-${transition}`,
          click: () => {
            if (model.states.find(state => state === transition)) {
              setModel({
                ...model,
                states: model.states.filter(state => state !== transition),
              })
            } else {
              setModel(
                process(
                  {
                    ...model,
                    states: [...model.states, transition],
                  }
                )
              )
            }
          }
        })
      )
    listeners
      .forEach(
        ({
          id,
          click,
        }) => document.querySelector(id)
          ?.addEventListener('click', click)
      )
    const nodeListeners = model
      .nodes
      .map(
        node => ({
          id: `#node-${node}`,
          click: () => {
            if (model.markers.find(marker => marker === node)) {
              setModel({
                ...model,
                markers: model.markers.filter(marker => marker !== node),
              })
            } else {
              setModel(
                process(
                  {
                    ...model,
                    markers: [...model.markers, node],
                  }
                )
              )
            }
          }
        })
      )
    nodeListeners
      .forEach(
        ({
          id,
          click,
        }) => document.querySelector(id)
          ?.addEventListener('click', click)
      )
    return () => {
      [...listeners, ...nodeListeners]
        .forEach(
          ({
            id,
            click,
          }) => document.querySelector(id)
            ?.removeEventListener('click', click)
        )
    }
  })
console.log(model.markers)
  return (
    <div className="App">
      <header className="App-header">
        <Graphviz
          className='digraph'
          dot={dot(model)}
          options={{
            fit: true,
            height: 600,
            width: 1000,
            zoom: true,
          }}
        />
      </header>
    </div>
  );
}

export default App;

/*
`
          digraph TrafficLights {
            fontname="Helvetica,Arial,sans-serif"
            node [fontname="Helvetica,Arial,sans-serif"]
            edge [fontname="Helvetica,Arial,sans-serif"]
            layout = neato
            node [shape=box];  gy2; yr2; rg2; gy1; yr1; rg1;
            node [shape=circle,fixedsize=true,width=0.9];  green2; yellow2; red2; safe2; safe1; green1; yellow1; red1;
            gy2->yellow2 [id="edge-gy2-yellow2", style=${edgeHover}, color=${edge}];
            rg2->green2;
            yr2->safe1;
            yr2->red2;
            safe2->rg2;
            green2->gy2;
            yellow2->yr2;
            red2->rg2;
            gy1->yellow1;
            rg1->green1;
            yr1->safe2;
            yr1->red1;
            safe1->rg1;
            green1->gy1;
            yellow1->yr1;
            red1->rg1;
            
            overlap=false
            label="PetriNet Model TrafficLights\nExtracted from ConceptBase and layed out by Graphviz"
            fontsize=12;
            }
          `*/

