<template>
  <div id="app">
    <template v-if="currentUser">
      <Navbar></Navbar>
    </template>
    <main class="container-fluid">
      <router-view/>
    </main>
    <template v-if="currentUser">
      <Foot></Foot>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar'
import Foot from './components/Foot'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  },
  components: {
    Navbar,
    Foot
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
/*Body padding reguired for fixed-top bootstrap navbar - see docs*/
body {
  padding-top: 4.3em;
  padding-bottom: 3em;
}

.divTableRow:nth-child(even) {
  background-color: #262626;
  color: darkgray;
}

.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.divTableCell{
  color: lightgray;
}
.is-danger{
  color:red;
}
.fa-warning{
  color:red;
}
</style>
