<template>
<div>
  <navbar></navbar>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns">

        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import Navbar from './Navbar'
export default {
  name: 'Parliamentarian-view',
  components: {
    Navbar
  },
  data: () => ({
    parliamentarians: [],
    parliamentarian: {}
  })
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
