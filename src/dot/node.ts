export default (markers: Array<string>) =>
(name: string): string =>
  `${name} [
    id="node-${name}",
    style=${markers.find(state => state === name) ? '"bold"' : '"normal"'},
    color=${markers.find(state => state === name) ? '"red"' : '"black"'},
    xlabel="${name}",
    label=<<font point-size="8"> ${markers.filter(state => state === name).map(() => '&#9899;').join(' ')}</font>>
  ]`
