export default (states: Array<string>) =>
  (name: string): string =>
    `${name} [
  id="transition-${name}",
  style=${states.find(state => state === name) ? '"bold"' : '"normal"'},
  color=${states.find(state => state === name) ? '"green"' : '"black"'},
]`
