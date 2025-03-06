<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import Accordion from '@/components/AccordionComponet.vue'
import TabsComponent from '@/components/TabsComponent.vue'
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb.vue'
import MainAccordion from '@/components/MainAccordion.vue'

const materias = [
  {
    id: 1,
    title: 'Interpretação de Textos',
    aulas: 1193,
    tempoAulas: '10h 22m',
    exercicios: 74,
    tempoExercicios: '7h 12m',
    materiais: 53,
    tempoMateriais: '06h 03m',
  },
  {
    id: 2,
    title: 'Gramática',
    aulas: 86,
    tempoAulas: '14h 47m',
    exercicios: 27,
    tempoExercicios: '10h 45m',
    materiais: 10,
    tempoMateriais: '10h 00m',
  },
]

const store = useStore()
const subtemas = ref({})
const aulas = ref({})

const fetchSubtemas = async (competenciaId) => {
  await store.dispatch('materias/fetchSubtemas', competenciaId)
  subtemas.value[competenciaId] = store.getters['materias/getSubtemasByCompetencia'](competenciaId)
}

const fetchAulas = async (subtemaId) => {
  await store.dispatch('materias/fetchAulas', subtemaId)
  aulas.value[subtemaId] = store.getters['materias/getAulasBySubtema'](subtemaId)
}
</script>

<template>
  <main>
    <NavigationBreadcrumb :items="['Cadernos', 'Língua Portuguesa']" />

    <MainAccordion
      v-for="materia in materias"
      :key="materia.id"
      :id="materia.id"
      :title="materia.title"
      :aulas="materia.aulas"
      :tempoAulas="materia.tempoAulas"
      :exercicios="materia.exercicios"
      :tempoExercicios="materia.tempoExercicios"
      :materiais="materia.materiais"
      :tempoMateriais="materia.tempoMateriais"
    >
      <template #default="{ competencias }">
        <Accordion
          v-for="competencia in competencias"
          :key="competencia.id"
          :title="competencia.nome"
          :depth="0"
          :fetchData="() => fetchSubtemas(competencia.id)"
        >
          <template #default>
            <Accordion
              v-for="subtema in subtemas[competencia.id]"
              :key="subtema.id"
              :title="subtema.nome"
              :depth="1"
              :fetchData="() => fetchAulas(subtema.id)"
            >
              <template #default>
                <TabsComponent
                  :aulas="aulas[subtema.id] || []"
                  :detalhesExercicios="['00:05:30', '00:10:45']"
                  :detalhesMateriais="['00:48:00']"
                />
              </template>
            </Accordion>
          </template>
        </Accordion>
      </template>
    </MainAccordion>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
