export default {
  getCompetenciasByMateria: (state) => (materiaId) => {
    return state.competencias[materiaId] || []
  },
  getSubtemasByCompetencia: (state) => (competenciaId) => {
    return state.subtemas[competenciaId] || []
  },
  getAulasBySubtema: (state) => (subtemaId) => {
    return state.aulas[subtemaId] || []
  },
}
