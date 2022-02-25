<template>
  <div class="container">
     <div class="w-full lg:w-1/3 mt-4">
         <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-50 py-4 px-4">
                Login
            </div>

            <div class="p-4">
                <form @submit.prevent="login()">
                    <div class="mb-5">
                        <label for="email" class="text-xs uppercase font-medium block mb-2">Email</label>
                        <input v-model="form.email" type="email" name="email" id="email" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 px-4 py-2 transation duration-150">                      
                    </div>
                     <div class="mb-5">
                        <label for="password" class="text-xs uppercase font-medium block mb-2">password</label>
                        <input v-model="form.password" type="password" name="password" id="password" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 px-4 py-2 transation duration-150">                      
                    </div>

                    <button class="px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 text-white">Login</button>
                </form>

            </div>
        </div>
     </div>
  </div>
</template>

<script>

// import axios from 'axios';
import router from '@/router';
import { reactive } from 'vue';
import store from '@/store'

export default {
  setup() {
    const form = reactive({
        'email' :'',
        'password' :''
    });


    async function login() {
      try {
        await store.dispatch('auth/login', form);
        router.replace('/')
      } catch (error) {
        console.log('error')
      }
     
      

    }

    return {
      login,
      form
    }
  }
}
</script>

<style>

</style>  