<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Dashboard Sample
          <div slot="subtitle">To test example of dashboard using quasar</div>
        </q-toolbar-title>

        <q-btn flat round>
          <q-icon name="person" />

          <q-popover>
            <q-list link style="min-width: 260px">
              <q-item @click.native="logout()">
                <q-item-side icon="person" inverted color="dark" />
                <q-item-main>
                  <q-item-main label="Logout"/>
                  <q-item-tile sublabel></q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>

      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Some Image or Icon</q-list-header>
        <q-item to="/dashboard" >
          <q-item-side icon="dashboard" />
          <q-item-main label="Dashboard" sublabel="List of Modules" />
        </q-item>
        <q-item to="/dashboard/list" >
          <q-item-side icon="table_chart" />
          <q-item-main label="List" sublabel="List data from api" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <transition appear  enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutUpBig" mode="out-in" >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.dialog({
        title: 'Logout',
        message: 'Are you really want to disconnect?',
        ok: 'Confirm',
        cancel: 'Cancel',
        color: 'dark'
      }).then(() => {
        this.$router.push('/')
      })
        .catch(() => {
        })
    }
  }
}
</script>

<style>
</style>
