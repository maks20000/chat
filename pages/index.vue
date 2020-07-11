<template>
  <div>
    <chat></chat>
  </div>
</template>

<script>
import chat from '~/components/main.vue'

export default {
  components: {
    chat
  },
  beforeMount () {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user!=null) {
       this.$store.commit("auth",user)
    }
    this.$store.dispatch("update_user_status");
  }
}
</script>

<style>

</style>

