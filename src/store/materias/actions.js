import { fetchCompetencias } from '@/services/materiasService'
import { fetchSubtemasByCompetencia } from '@/services/subtemasService'
import { aulasService } from '@/services/aulasService'
export default {
  async fetchCompetencias({ commit, state }, materiaId) {
    if (state.competencias[materiaId]) return
    const competencias = await fetchCompetencias(materiaId)
    commit('SET_COMPETENCIAS', { materiaId, competencias })
  },
  async fetchSubtemas({ commit, state }, competenciaId) {
    if (state.subtemas[competenciaId]) return

    try {
      const subtemas = await fetchSubtemasByCompetencia(competenciaId)
      commit('SET_SUBTEMAS', { competenciaId, subtemas })
    } catch (error) {
      console.error('Erro ao buscar subtemas:', error)
    }
  },
  async fetchAulas({ commit }, subtemaId) {
    try {
      const aulas = await aulasService.getAulasBySubtema(subtemaId)
      commit('SET_AULAS', { subtemaId, aulas })
    } catch (error) {
      console.error('Erro ao carregar aulas:', error)
    }
  },
}
