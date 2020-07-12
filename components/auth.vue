<template>
  <div>
    <div class="center">
      <b-form-input class="mr-2" v-model="name" placeholder="Enter your name"></b-form-input>
      <b-button @click="auth()" variant="success">Auth</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      name:""
    }
  },
  methods: {
     ...mapActions([
      'auth_user'
    ]),
    auth() {
      if (this.name!="") {
        this.auth_user({name:this.name,room:1})
      }
    }
  }
}
</script>

<style>
  .center {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 0 auto;
  }
</style>
