<script setup lang = "ts">
    import {login} from '@/stores/session';
    import {ref} from 'vue';

    const email = ref{''};
    const name = ref{''};
    const password = ref{''};
</script>
<template>
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Name</label>
              <div class="control has-icons-left">
                <input type="name" placeholder="Name" class="input" v-model="name" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" v-model="email" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" v-model="password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
       
</template>

<style>

</style>