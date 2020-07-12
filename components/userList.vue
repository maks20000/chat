<template>
  <div class="list">
    <b-list-group>
        <b-list-group-item v-for="user in list" v-bind:key="user.id">{{user.name}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list:[]
    }
  },
  methods : {
      async setList (room=this.$store.state.inRoom) {
        var {data} = await axios.get(this.$store.state.base+this.$store.state.base_user+"?room="+room)
        this.list=data.filter((elem)=>{
          var time =this.$moment().unix();
          if (parseInt(time)-parseInt(elem.time)<parseInt(this.$store.state.time)) {
            return elem;
          }
        })
      }
  },
  created () {
    this.setList(this.$store.state.inRoom);
    setInterval(()=>{
      this.setList (this.$store.state.inRoom)
    },1000)
  }
}
</script>

<style>
  .list {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    border: 1px solid #d4d4d4fa;
  }

  .list .list-group-item {
    border: 0px;
    padding: 0.1rem 1.25rem;
  }

  .list .list-group-item:hover {
    background: #d4d4d4fa;
  }
</style>
