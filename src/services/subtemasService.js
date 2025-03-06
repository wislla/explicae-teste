const BASE_URL = 'http://localhost:3000'

export const fetchSubtemasByCompetencia = async (competenciaId) => {
  try {
    const response = await fetch(`${BASE_URL}/subtemas?competenciaId=${competenciaId}`)
    if (!response.ok) {
      throw new Error(`Erro ao buscar subtemas: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Erro na requisição de subtemas:', error)
    return []
  }
}
