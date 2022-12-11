import Model from '../model/Model';
import node from './node'
import transition from './transition'
import edge from './edge'

export default (model: Model) => `
digraph {
  fontname="Helvetica,Arial,sans-serif"
  node [fontname="Helvetica,Arial,sans-serif"]
  edge [fontname="Helvetica,Arial,sans-serif"]
  layout = neato
  node [shape=box];
  ${model.transitions.map(transition(model.states)).join(';')}
  node [shape=circle,fixedsize=true,width=0.9];
  ${model.nodes.map(node(model.markers)).join(';')}
  ${model.edges.map(edge).join('\n')}
  
  overlap=false
  label="${model.label}"
  fontsize=12;
  }
`
