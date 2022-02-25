import { createStore } from 'vuex' ;
import axios from 'axios' ;

export default createStore({
  namespaced : true,
  state: {    
      authenticated : false,
      user :null
  },

  mutations: {

      SET_AUTHENTICATED(state,value){state.authenticated = value},
      SET_USER(state,value){state.user = value}

  },
  getters: {     

      authenticated(state){
        return state.authenticated;
      },

      user(state){
        return state.user;
      }

  }, 
  actions: {

    async login ({dispatch},credentials){        
        await axios.get('sanctum/csrf-cookie')        
        await axios.post('login', credentials)
        dispatch('me')
    },

    async me({commit}){
      try {

        let response = await axios.get('api/me')
        commit('SET_AUTHENTICATED',true)
        commit('SET_USER',response.data)

      } catch (error) {
        commit('SET_AUTHENTICATED',false)
        commit('SET_USER',null)
      }
    }
  },
 
})

