<template>
<div>
  <navbar></navbar>
  <section class="hero is-success is-fullheight has-5-mt">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-multiline">
          <div v-for="p in parliamentarians" :key="p.id" class="column is-3">
            <div class="card">
            <div class="card-image">
              <figure class="image is-1by1">
                  <a @click="activateModal(p)">
                    <img :src="p.IdentificacaoParlamentar.UrlFotoParlamentar" >
                  </a>
              </figure>
            </div>
            <div class="card-content ">
              <p class="content is-marginless">
                {{ p.IdentificacaoParlamentar.NomeParlamentar }}
              </p>
              <p class="content">
                {{ p.IdentificacaoParlamentar.SiglaPartidoParlamentar }} -
                {{ p.IdentificacaoParlamentar.UfParlamentar }}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <modal :active.sync="activeModal" @closed="closedModal" :content="parliamentarian"></modal>
    </div>
  </section>
</div>
</template>
<script>
import Modal from './ParliamentarianModal'
import Navbar from './Navbar'
export default {
  name: 'Parliamentarian-view',
  components: {
    Navbar, Modal
  },
  data: () => ({
    parliamentarians: [],
    parliamentarian: {},
    activeModal: false
  }),
  methods: {
    loadAll () {
      this.$http.get('http://legis.senado.gov.br/dadosabertos/senador/lista/atual.json')
        .then(req => {
          console.log(' req ', req)
          this.parliamentarians = req.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
        })
    },

    closedModal (value) {
      this.activeModal = value
    },

    activateModal (p) {
      this.activeModal = true
      this.parliamentarian = p
    }
  },

  mounted () {
    this.loadAll()
  }
}
</script>
<style>
.hero.is-success {
  background: rgb(220, 226, 231);
}

.box {
  box-shadow: 6px 6px 10px rgba(153, 153, 153, 0.507);
}

p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.has-5-mt {
  margin-top: 5vh;
}
</style>
