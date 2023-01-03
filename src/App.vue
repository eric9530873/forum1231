<template>
  <div id="forum">
    <NavBar />
    <main class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
