<template>
  <div class="message-box">
    <div ref="box" class="box f-grow-1">
      <div class="box_wrapper">
        <message :isUser="mes.user_id==user_id" v-for="mes in messages" :key="mes.id" :name="mes.name">{{mes.text}}</message>
      </div>
    </div>
      <b-form inline>
        <b-input v-model="text_message" class="mb-2 mr-sm-2 mb-sm-0 f-grow-1"></b-input> <b-button @click="send" variant="success">Send</b-button>
      </b-form>
  </div>
</template>

<script>
import message from "~/components/message.vue"
import axios from 'axios'
export default {
  components: {
    message
  },
  data () {
    return {
      text_message:"",
      messages:[],
      user_id:null,
    }
  },
  methods: {
    async setMessages (room=this.$store.state.inRoom) {
      var {data} = await axios.get(this.$store.state.base+this.$store.state.base_message+"?room="+room)
      this.messages=data;
    },
    async send () {
      if (this.text_message!="") {
        var data = {
          text:this.text_message,
          name:this.$store.state.user,
          room:this.$store.state.inRoom,
          user_id:this.$store.state.id
        }
        this.text_message=""
        await axios.post(this.$store.state.base+this.$store.state.base_message,data)
        this.setMessages(this.$store.state.inRoom)
        this.update_scroll(41)
      }
    },
    update_scroll (time) {
      setTimeout(()=>{
        this.$refs.box.scrollTop=this.$refs.box.scrollHeight
      },time)
    }
  },
  created () {
    this.user_id = this.$store.state.id;
    this.setMessages(this.$store.state.inRoom);
    setInterval(()=>{
      this.setMessages (this.$store.state.inRoom)
    },1000)
  },
  mounted () {
    this.update_scroll(100)
  }
}
</script>

<style>
  .box {
    padding: 10px;
    border: 1px solid #d4d4d4fa;
    margin-bottom: 20px;
    display: block;
    overflow: hidden;
    overflow-y: auto;
  }

  .box_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .f-grow-1 {
    flex-grow: 1;
  }

  .message-box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
