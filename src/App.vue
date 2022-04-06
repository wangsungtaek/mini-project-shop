<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from './layouts/Footer'
import Header from './layouts/Header.vue'

export default {
  components: { Header, Footer },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
