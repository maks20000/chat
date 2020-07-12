<template>
  <section class="container chat">
    <b-container>
      <b-row>
        <b-col lg="3">
          <h2>Rooms</h2>
          <room-list></room-list>
        </b-col>
        <b-col lg="6">
          <h2>Chat room {{this.$store.state.inRoom}}</h2>
          <message-box></message-box>
        </b-col>
        <b-col lg="3">
          <h2>Users</h2>
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
import roomList from '~/components/roomList.vue'

export default {
  components: {
    AppLogo,messageBox,userList,roomList
  },
  created () {
    this.$store.dispatch("room_list");
    setInterval (()=>{
      var time =this.$moment().unix();
      this.$store.dispatch("update_user_status",{time:time})
    },1000)
  }
}
</script>

<style>
.chat {
  padding-top: 30px;
}
  .row > div {
    height: 420px;
    margin-bottom: 50px;
  }
</style>
