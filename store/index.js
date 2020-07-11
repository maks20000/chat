import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    auth:false,
    user:"",
    id:"",
    time: 10,
    base_user:'http://localhost:3000/users/',
    base_room:'http://localhost:3000/rooms/',
    user_list:[]
  },
  mutations: {
    auth (state, user) {
      state.user=user.name;
      state.id=user.id;
      state.auth=true;
    }
  },
  actions: {
    async auth_user (cont, user) {
      let {data} = await axios.post(cont.state.base_user, user)
      localStorage.setItem("user", JSON.stringify(data))
      cont.commit("auth",data)
    },
    async update_user_status (cont, data) {
      await axios.patch(cont.state.base_user+cont.state.id, data)
    },
    async update_user_list (cont,room) {
      await axios.patch(cont.state.base_user+cont.state.id, data)
    }
  }
})

export default store
