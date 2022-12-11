import Model from '../model/Model'

interface ModelRet extends Model {
  transformed: Boolean
}

const process = (model: Model): Model => {
  const newModel: ModelRet = model.states.reduce<ModelRet>((acc, state) => {
    const tos = acc
        .edges
        .filter(
          ([ from ]) => from === state)
        .map(([_, to]) => to)
      // all destinations free
      if (!tos.find(node => model.markers.find(marker => marker === node))) {
        const froms = acc
          .edges
          .filter(
            ([ _, to ]) => to === state)
          .map(([from]) => from)
        
          if (!froms.find(node => !model.markers.find(marker => marker === node))) {
            return {
              ...acc,
              states: acc.states.filter(s => s !== state),
              markers: [
                ...acc.markers,
                ...tos,
              ].filter(
                marker =>
                  !froms.find(node => node === marker)
              ),
              transformed: true        
            }
          }
      }
      return acc

  }, {...model, transformed: false })
  return newModel.transformed ? process(newModel) : newModel;
}
export default process
