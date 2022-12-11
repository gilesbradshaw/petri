import Model from '../model/Model';
import node from './node'
import transition from './transition'
import arc from './arc'

export default (model: Model) => `
digraph {
  fontname="Helvetica,Arial,sans-serif"
  node [fontname="Helvetica,Arial,sans-serif"]
  edge [fontname="Helvetica,Arial,sans-serif"]
  layout = neato
  node [shape=box];
  ${model.transitions.map(transition(model.states)).join(';')}
  node [shape=circle,fixedsize=true,width=0.9];
  ${model.places.map(node(model.markers)).join(';')}
  ${model.arcs.map(arc).join('\n')}
  
  overlap=false
  label="${model.label}"
  fontsize=12;
  }
`
