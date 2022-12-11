export default ([from, to]: [string, string]): string =>
  `${from}->${to} [id="edge-${from}->${to}"]`
