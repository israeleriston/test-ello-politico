<template>
<div class="modal is-active" v-if="active">
 <div class="modal-background" @click="closeModal"></div>
 <div class="container">
  <div class="card">
      <section class="modal-card-body">
        <div class="field has-text-right">
            <input id="checkbox" type="checkbox"
            class="switch is-rounded" v-model="edited">
            <label for="checkbox">Editar Informações</label>
        </div>
        <div class="columns">
          <div class="column is-5">
            <div class="card">
              <div class="card-image">
                  <figure class="image is-1by1">
                    <img :src="content.IdentificacaoParlamentar.UrlFotoParlamentar" :disabled="!edited">
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-7">

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

          </div>
        </div>
      </section>
    </div>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save" :disabled="!edited">Salvar</button>
      <button class="button" @click="closeModal" >Cancelar</button>
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
    edited: false
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
