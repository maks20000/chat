<template>
  <section class="container">
    <b-container>
      <b-row>
        <b-col lg="3">

        </b-col>
        <b-col lg="6">
          <message-box></message-box>
        </b-col>
        <b-col lg="3">
          <user-list></user-list>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import messageBox from '~/components/messageBox.vue'
import userList from '~/components/userList.vue'

export default {
  components: {
    AppLogo,messageBox,userList
  },
  created () {
    setInterval (()=>{
      var time = new Date();
      this.$store.dispatch("update_user_status",{time:time.getTime()})
    },5000)
  }
}
</script>

<style>

</style>
