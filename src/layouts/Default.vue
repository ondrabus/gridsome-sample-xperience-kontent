<template>
  <div class="application-content">
    <Header/>
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
export default {
  components: {
    Footer,
    Header
  }
}
</script>