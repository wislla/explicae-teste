export default {
  SET_COMPETENCIAS(state, { materiaId, competencias }) {
    state.competencias[materiaId] = competencias
  },
  SET_SUBTEMAS(state, { competenciaId, subtemas }) {
    state.subtemas[competenciaId] = subtemas
  },
  SET_AULAS(state, { subtemaId, aulas }) {
    state.aulas = {
      ...state.aulas,
      [subtemaId]: aulas
    };
  }
}
