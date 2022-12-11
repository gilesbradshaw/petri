export default interface Model {
  label: string,
  transitions: Array<string>,
  nodes: Array<string>,
  edges: Array<[string, string]>,
  markers: Array<string>,
  states: Array<string>
}