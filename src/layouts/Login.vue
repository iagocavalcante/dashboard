<template>
  <q-layout view="lHh Lpr lFf" class="img-background" style="border: solid 1px black">
   <q-page-container class="container-fluid">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
::-webkit-scrollbar {
display: none;
}
.img-background{
  background: #fff;
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.dark{
  /* color: #fff !important; */
  background: #42424236;
  /* opacity: 0.3; */
}
</style>
