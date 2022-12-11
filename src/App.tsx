import React, { useEffect, useState } from 'react';
import './App.css';
import { Graphviz } from 'graphviz-react';

import {ErrorBoundary} from 'react-error-boundary'
import Model from './model/Model'
import dot from './dot'
import process from './dot/process'
import { Exception } from './Exception'
 

function ErrorFallback({error, resetErrorBoundary}: { error: Exception, resetErrorBoundary: () => void}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>reset model</button>
    </div>
  )
}

function Ui({ model, name }: { model: Model, name: string }) {
  return <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      localStorage.setItem(`model:${name}`, JSON.stringify(model))
    }}
    >
      <App
        model={model}
        name={name}
      />
    </ErrorBoundary>
}
function App({ model, name }: { model: Model, name: string }) {
  const modelString = localStorage.getItem(`model:${name}`)
  const [myModel, setModel] = useState<Model>(
    modelString ? JSON.parse(modelString) : model);
  const set = (model: Model) => {
    localStorage.setItem(`model:${name}`, JSON.stringify(model))
    setModel(model)
  }
  useEffect(() => {
    const listeners = myModel
      .transitions
      .map(
        transition => ({
          id: `#transition-${transition}`,
          click: () => {
            if (myModel.states.find(state => state === transition)) {
              set({
                ...myModel,
                states: myModel.states.filter(state => state !== transition),
              })
            } else {
              set(
                process(
                  {
                    ...myModel,
                    states: [...myModel.states, transition],
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
    const nodeListeners = myModel
      .places
      .map(
        place => ({
          id: `#node-${place}`,
          click: () => {
            if (myModel.markers.find(marker => marker === place)) {
              set({
                ...myModel,
                markers: myModel.markers.filter(marker => marker !== place),
              })
            } else {
              set(
                process(
                  {
                    ...myModel,
                    markers: [...myModel.markers, place],
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
  return (
    <div className="App">
      <header className="App-header">
        <Graphviz
          className='digraph'
          dot={dot(myModel)}
          options={{
            fit: true,
            height: 600,
            width: 1000,
            zoom: true,
          }}
        />
      </header>
      <button
        onClick={() => setModel(model)}
      >
        reset
      </button>
    </div>
  );
}

export default Ui;
