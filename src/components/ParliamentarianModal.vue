<template>
<div class="modal is-active" v-if="active">
 <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card" style="width: 80vw">
    <header class="modal-card-head">
            <input id="checkbox" type="checkbox"
            class="switch is-rounded" style="text-align: rigth" v-model="edited">
            <label for="checkbox" style="color:black">Editar Informações</label>
    </header>
      <div class="modal-card-body">
        <div class="columns">
          <div class="column is-5">
            <div class="card-image">
              <figure class="image is-1by1">
                  <img :src="content.IdentificacaoParlamentar.UrlFotoParlamentar" :disabled="!edited">
              </figure>
            </div>
          </div>
          <div class="column is-7">
            <div class="column is-1">
            <div class="block">
              <span class="tag is-info is-medium">Perfil</span>
            </div>
            </div>

            <b-field label="Código" :horizontal="true" class="field-label is-small">
            <b-input v-model="content.IdentificacaoParlamentar.CodigoParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Email" :horizontal="true" class="field-label is-small">
            <b-input type="email" v-model="content.IdentificacaoParlamentar.EmailParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Tratamento" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.FormaTratamento" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Nome" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.NomeCompletoParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Sexo" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.SexoParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Partido" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.SiglaPartidoParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="UF" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.UfParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <b-field label="Página" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.IdentificacaoParlamentar.UrlPaginaParlamentar" :disabled="!edited"></b-input>
            </b-field>

            <div class="block">
              <span class="tag is-info is-medium">Mandato</span>
            </div>

            <b-field label="Código" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.Mandato.CodigoMandato" :disabled="!edited"></b-input>
            </b-field>

             <b-field label="Participação" :horizontal="true" class="field-label is-small">
            <b-input  v-model="content.Mandato.DescricaoParticipacao" :disabled="!edited"></b-input>
            </b-field>

            <div class="block">
              <span class="tag is-info is-medium">Exercicio</span>
            </div>

            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Codigo Exercicio</th>
                  <th>Data Início</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="e in content.Mandato.Exercicios.Exercicio" :key="e.id">
                  <td>{{ e.CodigoExercicio }}</td>
                  <td>{{ e.DataInicio }}</td>
                </tr>
              </tbody>
            </table>

            <div class="block">
              <span class="tag is-info is-medium">Suplentes</span>
            </div>

            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Participação</th>
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="e in content.Mandato.Suplentes.Suplente" :key="e.id">
                  <td>{{ e.CodigoParlamentar }}</td>
                  <td>{{ e.DescricaoParticipacao }}</td>
                  <td>{{ e.NomeParlamentar }}</td>
                </tr>
              </tbody>
            </table>

        </div>
        </div>
      </div>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="save" :disabled="!edited">Salvar</button>
        <button class="button" @click="closeModal">Cancelar</button>
      </footer>
    </div>
</div>
</template>

<script>
export default {
  name: 'parliamentarian-modal',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    edited: false,
    activeTab: 0
  }),
  methods: {
    closeModal () {
      this.edited = false
      this.$emit('closed', false)
    },
    save () {
      const selected = Object.assign({}, this.content)
      this.$emit('saved', selected)
      this.closeModal()
    }
  }

}
</script>
<style>
.input {
    border-radius: 4px;
    font-size: .75rem;
}

</style>
