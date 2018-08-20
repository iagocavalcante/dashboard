<template>
    <q-page  class="docs-input row justify-center ">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xl dark">
            <div class="text-center" style="color:white">
            <p class="q-display-1 text-weight-bolder" colorName="negative">Dashboard Sample</p>
            </div>

            <div class="q-mt-md">
            <q-input v-model="userData.email" color="primary" type="email" float-label="Login"
            autocomplete="off" autocorrect="off" autocapitalize="off" :before="[{icon: 'person', handler () {}}]"  />
            </div>

            <div class="q-mt-md">
            <q-input v-model="userData.password" color="primary" type="password" float-label="Senha"
            autocomplete="off" autocorrect="off" autocapitalize="off" :before="[{icon: 'lock', handler () {}}]" @keyup.enter="login(userData)" />
            </div>

            <div class="q-mt-sm">
            <q-btn color="primary" class="full-width" label="Entrar" size="lg" @click="goToPage()" :loading="loading">
            <span slot="loading">
                <q-spinner-hourglass class="on-left" />
                Loading...
            </span>
            </q-btn>
            </div>
        </div>
        </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userData: {
        email: 'user.test',
        password: '12345678'
      },
      loading: false,
      customDialogModel: false
    }
  },
  methods: {
    goToPage () {
      this.$router.push('dashboard')
    }
  }
}
</script>
