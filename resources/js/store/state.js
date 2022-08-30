import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,
    state () {
        return {
            safelyStoredNumber: 0,
            count:1
        }
    },
    getters: {
        safelyStoredNumber: state => state.safelyStoredNumber,
        storedNumberMatches(state) {
            return matchNumber => {
                return state.safelyStoredNumber === matchNumber;
            }
        }
    },
    mutations: {
        incrementStoredNumber(state) {
            state.safelyStoredNumber++;
        },
        setStoredNumber(state, newNumber) {
            state.safelyStoredNumber = newNumber;
        },
        increment (state) {
            state.count++
        }
    },
    actions:{
        // login({commit}){
        //     return axios.get('/api/user').then(({data})=>{
        //         commit('SET_USER',data)
        //         commit('SET_AUTHENTICATED',true)
        //         router.push({name:'dashboard'})
        //     }).catch(({response:{data}})=>{
        //         commit('SET_USER',{})
        //         commit('SET_AUTHENTICATED',false)
        //     })
        // },
        // logout({commit}){
        //     commit('SET_USER',{})
        //     commit('SET_AUTHENTICATED',false)
        // }
    },

}
