<template>
  <q-page class="row gutter-sm q-pa-lg">
    <div class="col-3">
      <q-card inline>

        <q-card-media>
          <img :src="`https://images.unsplash.com/photo-1501447050926-85359af687bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34ebe401dc0b20bdd49204787ffcd13c&auto=format&fit=crop&w=500&q=60`">
        </q-card-media>

        <q-card-title class="text-center" style="min-height: 100px">
          <span class="q-title">Module Name</span>
        </q-card-title>

        <q-card-separator />

        <q-card-actions class="gutter-sm">
          <div class="col-8">
            <q-btn push color="dark" label="Access Module" @click="goToModule()" />
          </div>
        </q-card-actions>

      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Dashboard',
  methods: {
    goToModule () {
      console.log('test')
    }
  }
}
</script>
