import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    auth:false,
    user:"",
    id:"",
    inRoom: 1,
    time: 20,
    base: "http://localhost:3000/",
    base_user:'users',
    base_room:'rooms',
    base_message:'messages',
    last_time: "",
    room_list:[],
    user_list:[],
  },
  getters: {
    get_user_list (state) {
      return state.user_list;
    },
  },
  mutations: {
    auth (state, user) {
      state.user=user.name;
      state.id=user.id;
      state.auth=true;
    },
    update_list (state, data) {
      state.user_list=data;
    },
    update_room (state, data) {
      state.room_list=data;
    },
    set_room(state,room) {
      state.inRoom=room;
    }
  },
  actions: {
    async auth_user (cont, user) {
      let {data} = await axios.post(cont.state.base+cont.state.base_user, user)
      localStorage.setItem("user", JSON.stringify(data))
      cont.commit("auth",data)
    },
    async update_user_status (cont, data) {
      await axios.patch(cont.state.base+cont.state.base_user+"/"+cont.state.id, data)
    },
    async update_user_list (cont,room) {
      // var data = await axios.get(cont.state.base+cont.state.base_user+"?room="+room)
      var data = await axios.get(cont.state.base+cont.state.base_user+"?room="+room)
      cont.commit("update_list", data.data);
    },
    async room_list (cont) {
      var data = await axios.get(cont.state.base+cont.state.base_room);
      cont.commit("update_room",data.data);
    },
    async messages (cont,room) {
      var data = await axios.get(cont.state.base+cont.state.base_message+"?room="+room);
      cont.commit("update_room",data.data);
    },
    async set_chat_room (cont,room) {
      cont.commit("set_room",room);
      cont.dispatch("room_list")
      cont.dispatch("update_user_status",{room:room})
      cont.dispatch("update_user_list",room)
    },
  }
})

export default store
