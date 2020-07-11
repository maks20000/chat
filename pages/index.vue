<template>
  <section class="container">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>NuxtChat</b-navbar-brand>
    </b-navbar>
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
  }
}
</script>

<style>

</style>

