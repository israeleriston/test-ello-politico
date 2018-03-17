<template>
<div class="modal is-active" v-if="active">
 <div class="modal-background" @click="closeModal"></div>
 <div class="container">
  <div class="card">
      <section class="modal-card-body">
        <div class="field has-text-right">
            <input id="checkbox" type="checkbox"
            class="switch is-rounded" checked="checked">
            <label for="checkbox">Editar Informações</label>
        </div>
        <div class="columns">
          <div class="column is-5">
            <div class="card">
              <div class="card-image">
                  <figure class="image is-1by1">
                    <img :src="content.IdentificacaoParlamentar.UrlFotoParlamentar">
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-7">
            <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Código</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.CodigoParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="email"
                  v-model="content.IdentificacaoParlamentar.EmailParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Tratamento</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.FormaTratamento">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Nome</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.NomeCompletoParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Sexo</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.SexoParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Partido</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.SiglaPartidoParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">UF</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.UfParlamentar">
                </p>
              </div>
            </div>
          </div>

                   <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Página</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                  class="input is-small"
                  type="text"
                  v-model="content.IdentificacaoParlamentar.UrlPaginaParlamentar">
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="modal-card-foot">
      <button class="button is-success">Salvar</button>
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
    edited: false
  }),
  methods: {
    closeModal () {
      this.$emit('closed', false)
    }
  }

}
</script>

<style>

</style>
