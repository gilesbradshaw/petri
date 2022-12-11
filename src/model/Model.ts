export default interface Model {
  label: string,
  transitions: Array<string>,
  places: Array<string>,
  arcs: Array<[string, string]>,
  markers: Array<string>,
  states: Array<string>
}