const API_URL = 'http://localhost:3000/aulas'

export const aulasService = {
  async getAulasBySubtema(subtemaId) {
    try {
      const response = await fetch(`${API_URL}?subtemaId=${subtemaId}`)
      if (!response.ok) {
        throw new Error(`Erro ao buscar aulas: ${response.statusText}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Erro ao buscar aulas:', error)
      throw error
    }
  },
}
