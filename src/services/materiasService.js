const API_URL = 'http://localhost:3000'

export const fetchCompetencias = async (materiaId) => {
  try {
    const response = await fetch(`${API_URL}/competencias?materiaId=${materiaId}`)
    if (!response.ok) throw new Error('Erro ao buscar competências')
    return await response.json()
  } catch (error) {
    console.error(`Erro ao buscar competências da matéria ${materiaId}:`, error)
    return []
  }
}
