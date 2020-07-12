<template>
  <div class="list_room">
    <b-list-group>
        <b-list-group-item v-for="room in this.$store.state.room_list" v-bind:key="room.id" @click="set_room(room.id)">{{room.name}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {

  methods: {
    async set_room (id) {
      var user = JSON.parse(localStorage.getItem("user"));
      user.room=id;
      localStorage.setItem("user",JSON.stringify(user))
      await this.$store.dispatch("set_chat_room",id);
      this.update_scroll(600)
    },
    update_scroll (time) {
      setTimeout(()=>{
        document.querySelector(".box").scrollTop=document.querySelector(".box").scrollHeight
      },time)
    }
  }

}
</script>

<style>
  .list_room {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    border: 1px solid #d4d4d4fa;
  }

  .list_room .list-group-item {
    border: 0px;
    padding: 0.1rem 1.25rem;
    cursor: pointer;
  }

  .list_room .list-group-item:hover {
    background: #d4d4d4fa;
  }
</style>
